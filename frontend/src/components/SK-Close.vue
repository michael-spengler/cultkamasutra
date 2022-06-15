<template>
  <div
    class="sk-close"
    :class="{ dark: $store.getters.darkmode }"
    @click="handleClick"
  >
    <i class="ti-cross-circle-filled"></i>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component
export default class SKClose extends Vue {
  public handleClick() {
    if (this.$route.name === 'search') {
      const from = this.$store.getters.searchOpenedFrom;
      this.$router.push(from || { name: 'home' });
      this.$store.commit('searchOpenedFrom', null);
      return;
    }
    this.$router.back();
  }
}
</script>

<style lang="scss" scoped>
.sk-close {
  position: fixed;
  top: calc(20px + env(safe-area-inset-top));
  right: calc(20px + env(safe-area-inset-right));
  z-index: 100;

  height: 35px;
  width: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;

  color: $color;
  &.dark {
    color: $color_dark;
  }

  cursor: pointer;
  transition: 0.2s ease-in-out;
  opacity: 0.75;
  &:hover {
    opacity: 1;
  }
}
</style>
