/* eslint-disable */
import App from '@/App.vue';
import router, { getTitle } from '@/router';
import store from '@/store';
import * as TCComponents from 'tccomponents_vue';
import 'tccomponents_vue/lib/tccomponents_vue.css';
import Vue from 'vue';
import VueMasonry from 'vue-masonry-css';
import { Route } from 'vue-router';
import VueScrollReveal from 'vue-scroll-reveal';
import { VNode } from 'vue/types/umd';
import './registerServiceWorker';
import { getUserFromJWT, persistLogin, verfiyUser } from './utils/auth';
import axios from './utils/axios';
import { setDarkmode, setLightmode } from './utils/functions';
import { IPosition, ISKNotification } from './utils/interfaces';
import { getText, setAutoLang } from './utils/langs';

Vue.config.productionTip = false;

if (window.location.href.includes('sportkamasutra.org')) {
  setLightmode();
} else {
  setDarkmode();
}

for (const component in TCComponents) {
  Vue.component(component, TCComponents[component]);
}

Vue.prototype.$getText = getText;

Vue.use(VueMasonry);
Vue.use(VueScrollReveal, {
  duration: 1000,
  scale: 0.9,
  opacity: 0,
  distance: '350px',
  delay: 0,
  origin: 'bottom',
  viewOffset: {
    bottom: 200
  }
});

axios.get('lang').then(res => store.commit('updateLangs', res.data));

setAutoLang();

axios.get('position/all').then(res => {
  (res.data as IPosition[]).forEach(x => store.commit('addPosition', x));
});

axios.get('position/trending').then(res => {
  store.commit('setTrending', res.data);
});

router.beforeEach(async (to: Route, from: Route, next: Function) => {
  const toDepth = to.meta.level || 0;
  const fromDepth = from.meta.level || 0;
  const toPath = to.fullPath.split('/').slice(0, 2);
  const fromPath = from.fullPath.split('/').slice(0, 2);
  if (fromPath.join('/') !== toPath.join('/')) {
    store.commit('routeTransition', 'slide-bottom');
  } else {
    store.commit(
      'routeTransition',
      toDepth < fromDepth ? 'slide-right' : 'slide-left'
    );
  }

  const possibleToken = to.query.skToken as string;
  if (possibleToken) {
    persistLogin(possibleToken);
  }

  if (!store.getters.valid && (await verfiyUser())) {
    store.commit('signIn', getUserFromJWT());
    store.commit('sendNotification', {
      text: 'Welcome back, ' + store.getters.user.name,
      title: 'SportKamasutra'
    } as ISKNotification);

    axios
      .get('position/liked')
      .then(res => store.commit('updateLikedPositions', res.data));

    axios
      .get('position/completed')
      .then(res => store.commit('updateCompletedPositions', res.data));
  }

  if (to.name === 'login' && store.getters.valid) {
    next({ name: 'profile' });
    return;
  }

  // forward to login if not signed in
  if (to.meta.needsSignIn && !store.getters.valid) {
    console.log('Hello');

    next({ name: 'login' });
    return;
  }

  if (to.meta.groups || to.meta.permissions) {
    if (!store.getters.valid) {
      return;
    }

    const allowedGroups: string[] = to.meta.groups || [];
    const requiredPerms: string[] = to.meta.permissions || [];
    const userGroup: string = store.getters.user.group.toLowerCase();
    const userPermissions: string[] = store.getters.user.permissions || [];

    // user not inside allowed group
    if (!allowedGroups.includes(userGroup)) {
      // user has no individual permissions
      if (userPermissions.length === 0) {
        return; // cant enter
      }
      // individual permissions dont include required
      if (!userPermissions.some(x => requiredPerms.includes(x))) {
        return; // cant enter
      }
    }
    // can enter
  }

  if (
    to.name === 'edit-position' &&
    !store.getters.positionExists(to.params.id)
  ) {
    if (from.name !== 'positions') next({ name: 'positions' });
    return;
  }

  if (
    to.name === 'positions-detail' &&
    !store.getters.positionExists(to.params.id) &&
    store.getters.positions.length > 0
  ) {
    if (from.name !== 'search') next({ name: 'search' });
    return;
  }

  const title = getTitle(to);
  document.title = title;

  const gt = document.querySelector('meta[name="title"]');
  if (gt) gt.setAttribute('content', title);

  const twitter = document.querySelector('meta[property="twitter:title"]');
  if (twitter) twitter.setAttribute('content', title);

  const og = document.querySelector('meta[property="og:title"]');
  if (og) og.setAttribute('content', title);

  next();
});

// show specific html-elements only for specfic groups
// eslint-disable-next-line
Vue.directive('group', (el: HTMLElement, binding: any, vnode: VNode) => {
  const showElement =
    store.getters.valid &&
    Object.keys(binding.modifiers).includes(
      store.getters.user.group.toLowerCase()
    );
  if (!showElement) {
    el.innerHTML = '';
    setTimeout(() => {
      el.remove();
    });
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
