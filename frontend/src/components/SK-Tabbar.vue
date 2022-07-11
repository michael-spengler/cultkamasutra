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
    <a href="https://cultdao.io/manifesto.pdf" target="_blank">
      <tc-tabbar-item icon="book-filled" :title="'Manifesto'" />
    </a>
    <a href="https://youtu.be/6IoAp1f3tVk" target="_blank">
      <tc-tabbar-item icon="user-filled" :title="'Video'" />
    </a>
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
import { Vue, Component } from "vue-property-decorator";
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

a {
  color: inherit;
  text-decoration: none; /* no underline */
}
</style>
