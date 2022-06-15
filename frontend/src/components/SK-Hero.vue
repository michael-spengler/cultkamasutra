<template>
  <tc-hero
    :class="{ dark: $store.getters.darkmode }"
    class="sk-hero"
    :hasFixedHeader="false"
  >
    <img :src="src" alt="" />
  </tc-hero>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class SKHero extends Vue {
  get src(): string {
    if (this.$store.getters.darkmode) {
      // return 'assets/banner_dark.svg';
      return 'assets/cult-dao.png';
    }
    // return 'assets/banner_light.svg';
    return 'assets/cult-dao.png';
  }
}
</script>

<style lang="scss" scoped>
.sk-hero {
  background: linear-gradient(to bottom right, #eecd96, $background);

  &.dark {
    background: linear-gradient(to bottom right, #000, $background_dark);
  }

  img {
    height: 150px;
  }
}
</style>
