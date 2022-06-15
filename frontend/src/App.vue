<template>
  <div class="CultKamasutra" :class="{ dark: $store.getters.darkmode }">
    <SKNotification />
    <SKRouterView />
    <SKSuspensionInfo />
    <SKSelectPosition />
    <SKTabbar />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import SKNotification from './components/SK-Notification.vue';
import SKRouterView from './components/SK-RouterView.vue';
import SKSuspensionInfo from './components/SK-SuspensionInfo.vue';
import SKSelectPosition from './components/SK-SelectPosition.vue';
import SKTabbar from './components/SK-Tabbar.vue';

@Component({
  components: {
    SKRouterView,
    SKSuspensionInfo,
    SKNotification,
    SKSelectPosition,
    SKTabbar
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
html {
  font-family: -apple-system, BlinkMacSystemFont, SF Pro Display, Segoe UI,
    Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji,
    Segoe UI Symbol;
  scroll-behavior: smooth;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
}

body {
  margin: 0;
}

.CultKamasutra {
  min-height: 100vh;

  background: $background;
  color: $color;

  &.dark {
    background: $background_dark;
    color: $color_dark;
  }
}

[content] {
  padding: 20px 5vw calc(70px + env(safe-area-inset-bottom));
}

[center] {
  text-align: center;
}

[error] {
  color: $error;
}

i[huge] {
  font-size: 3em;
  margin-bottom: 5px;
}

i[small] {
  font-size: 10px;
  margin-left: 5px;
}

h1,
h2 {
  margin: 0;
}

p {
  font-size: 16px;
}

[max-width] {
  max-width: 800px;
  margin: 0 auto;
}
</style>
