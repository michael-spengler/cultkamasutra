import { getText } from '@/utils/langs';
import Vue from 'vue';
import VueRouter, { Route } from 'vue-router';

Vue.use(VueRouter);
const prefix = 'CultKamasutra | ';

const router = new VueRouter({
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  mode: 'history',

  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue'),
      meta: {
        title: () => prefix + getText('ui.tabbar.Home', 'Home')
      }
    },
    {
      path: '/ebooks',
      name: 'ebooks',
      component: () => import('@/views/EBooks.vue'),
      meta: {
        // title: () => prefix + getText('ui.tabbar.books', 'Books')
        title: () => prefix + "Manifesto"
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue'),
      meta: {
        title: () => prefix + 'Login'
      }
    },
    // {
    //   path: '/profile',
    //   component: () => import('@/views-interim/ProfileInterim.vue'),
    //   children: [
    //     {
    //       path: '',
    //       name: 'profile',
    //       component: () => import('@/views/profile/Profile.vue'),
    //       meta: {
    //         needsSignIn: true,
    //         title: () => prefix + getText('ui.tabbar.Profile', 'Profile'),
    //         prev: {
    //           name: 'profile',
    //           title: () => getText('ui.tabbar.profile', 'Profile')
    //         }
    //       }
    //     },
    //     {
    //       path: 'liked-positions',
    //       name: 'liked-positions',
    //       component: () => import('@/views/profile/LikedPositions.vue'),
    //       meta: {
    //         needsSignIn: true,
    //         title: () =>
    //           prefix +
    //           getText('ui.profile-menu.Liked-Positions', 'Liked Positions'),
    //         prev: {
    //           name: 'profile',
    //           title: () => getText('ui.tabbar.profile', 'Profile')
    //         }
    //       }
    //     },
    //     {
    //       path: 'completed-positions',
    //       name: 'completed-positions',
    //       component: () => import('@/views/profile/CompletedPositions.vue'),
    //       meta: {
    //         needsSignIn: true,
    //         title: () =>
    //           prefix +
    //           getText(
    //             'ui.profile-menu.Completed-Positions',
    //             'Completed Positions'
    //           ),
    //         prev: {
    //           name: 'profile',
    //           title: () => getText('ui.tabbar.profile', 'Profile')
    //         }
    //       }
    //     },
    //     {
    //       path: 'trending-positions',
    //       name: 'trending-positions',
    //       component: () => import('@/views/profile/TrendingPositions.vue'),
    //       meta: {
    //         needsSignIn: true,
    //         title: () =>
    //           prefix +
    //           getText(
    //             'ui.profile-menu.Trending-Positions',
    //             'Trending Positions'
    //           ),
    //         prev: {
    //           name: 'profile',
    //           title: () => getText('ui.tabbar.profile', 'Profile')
    //         }
    //       }
    //     },
    //     {
    //       path: 'statistics',
    //       name: 'statistics',
    //       component: () => import('@/views/profile/Statistics.vue'),
    //       meta: {
    //         needsSignIn: true,
    //         groups: ['admin'],
    //         title: () =>
    //           prefix + getText('ui.profile-menu.Statistics', 'Statistics'),
    //         prev: {
    //           name: 'profile',
    //           title: () => getText('ui.tabbar.profile', 'Profile')
    //         }
    //       }
    //     },
    //     {
    //       path: 'positions',
    //       name: 'positions',
    //       component: () => import('@/views/profile/positions/Positions.vue'),
    //       meta: {
    //         needsSignIn: true,
    //         groups: ['admin', 'moderator'],
    //         permissions: ['position.update', 'position.create'],
    //         title: () =>
    //           prefix + getText('ui.profile-menu.Positions', 'Positions'),
    //         prev: {
    //           name: 'profile',
    //           title: () => getText('ui.tabbar.profile', 'Profile')
    //         }
    //       }
    //     },
    //     {
    //       path: 'positions/add',
    //       name: 'add-position',
    //       component: () => import('@/views/profile/positions/AddPosition.vue'),
    //       meta: {
    //         needsSignIn: true,
    //         groups: ['admin', 'moderator'],
    //         permissions: ['position.create'],
    //         title: () => prefix + 'Add Position',
    //         prev: {
    //           name: 'positions',
    //           title: () => getText('ui.profile-menu.positions', 'Positions')
    //         }
    //       }
    //     },
    //     {
    //       path: 'positions/:id',
    //       name: 'edit-position',
    //       component: () => import('@/views/profile/positions/EditPosition.vue'),
    //       meta: {
    //         needsSignIn: true,
    //         groups: ['admin', 'moderator'],
    //         permissions: ['position.update'],
    //         title: () => prefix + 'Edit Position',
    //         prev: {
    //           name: 'positions',
    //           title: () => getText('ui.profile-menu.positions', 'Positions')
    //         }
    //       }
    //     },
    //     {
    //       path: 'languages',
    //       name: 'languages',
    //       component: () => import('@/views/profile/languages/Languages.vue'),
    //       meta: {
    //         needsSignIn: true,
    //         groups: ['admin', 'moderator'],
    //         permissions: ['lang.create', 'lang.update'],
    //         title: () =>
    //           prefix + getText('ui.profile-menu.languages', 'Languages'),
    //         prev: {
    //           name: 'profile',
    //           title: () => getText('ui.tabbar.profile', 'Profile')
    //         }
    //       }
    //     },
    //     {
    //       path: 'languages/add',
    //       name: 'create-language',
    //       component: () => import('@/views/profile/languages/AddLanguage.vue'),
    //       meta: {
    //         needsSignIn: true,
    //         groups: ['admin', 'moderator'],
    //         permissions: ['lang.create'],
    //         title: () => prefix + 'Create Language',
    //         prev: {
    //           name: 'languages',
    //           title: () => getText('ui.profile-menu.languages', 'Languages')
    //         }
    //       }
    //     },
    //     {
    //       path: 'languages/:id',
    //       name: 'language-details',
    //       component: () =>
    //         import('@/views/profile/languages/LanguageDetails.vue'),
    //       meta: {
    //         needsSignIn: true,
    //         groups: ['admin', 'moderator'],
    //         permissions: ['lang.update'],
    //         title: () => prefix + 'Language Details',
    //         prev: {
    //           name: 'languages',
    //           title: () => getText('ui.profile-menu.languages', 'Languages')
    //         }
    //       }
    //     },
    //     { path: '*', redirect: { name: 'profile' } }
    //   ]
    // },
    {
      path: '/search',
      name: 'search',
      component: () => import('@/views/search/Search.vue'),
      meta: {
        title: () => prefix + getText('ui.tabbar.Search', 'Search'),
        fullscreen: true
      }
    },
    {
      path: '/search/:sex/:muscle',
      name: 'search-results',
      component: () => import('@/views/search/Results.vue'),
      meta: {
        title: () => prefix + getText('ui.tabbar.Search', 'Search'),
        prev: {
          name: 'search',
          title: () => getText('ui.tabbar.Search', 'Search')
        }
      }
    },
    {
      path: '/chat',
      name: 'chatbot',
      component: () => import('@/views/ChatBot.vue'),
      meta: {
        title: () => prefix + getText('ui.tabbar.chat', 'Chat')
      }
    },
    {
      path: '/positions',
      component: () => import('@/views-interim/PositionsInterim.vue'),
      children: [
        {
          path: '',
          name: 'positions-overview',
          component: () => import('@/views/positions/PositionsOverview.vue'),
          meta: {
            title: () => prefix + 'Positions',
            prev: {
              name: 'home',
              title: () => getText('ui.tabbar.Home', 'Home')
            }
          }
        },
        {
          path: ':id',
          name: 'positions-detail',
          component: () => import('@/views/positions/PositionsDetail.vue'),
          meta: {
            title: () => prefix + 'Position Detail',
            prev: {
              name: 'search',
              title: () => getText('ui.tabbar.search', 'Search')
            }
          }
        },
        { path: '*', redirect: { name: 'search' } }
      ]
    },

    {
      path: 'impressum',
      name: 'impressum',
      component: () => import('@/views/Impressum.vue'),
      meta: {
        title: () => prefix + 'Impressum'
      }
    },
    {
      path: '*',
      redirect: { name: 'home' }
    }
  ]
});

export default router;

export function getTitle(route: Route = router.currentRoute): string {
  {
    const name: string = route.meta.title();
    if (!name) return prefix;
    return name;
  }
}
