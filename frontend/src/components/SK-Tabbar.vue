<template>
  <tc-tabbar
    :moveout="$route.meta.fullscreen"
    :dark="$store.getters.darkmode"
    :key="$route.name"
  >
    <tc-tabbar-item
      icon="house"
      :title="$getText('ui.tabbar.home', 'Home')"
      routeName="home"
    />
    <tc-tabbar-item
      icon="book-filled"
      :title="$getText('ui.tabbar.books', 'Books')"
      routeName="ebooks"
    />
    <tc-tabbar-item
      icon="user-filled"
      :title="$getText('ui.tabbar.profile', 'Profile')"
      routeName="profile"
    />
    <tc-tabbar-item
      icon="chat-bubble"
      :title="$getText('ui.tabbar.chat', 'Chat')"
      routeName="chatbot"
    />
    <tc-tabbar-item
      icon="lens"
      :title="$getText('ui.tabbar.search', 'Search')"
      routeName="search"
    />
  </tc-tabbar>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component
export default class SKTabbar extends Vue {}
</script>

<style lang="scss" scoped>
.tc-tabbar {
  transition: all 0.5s ease-in-out !important;
  &[moveout] {
    transform: translateY(calc(50px + env(safe-area-inset-bottom)));
    opacity: 0;
  }
}
</style>
