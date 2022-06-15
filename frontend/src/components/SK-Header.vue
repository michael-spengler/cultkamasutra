<template>
  <div
    class="sk-header"
    :class="{ 'sk-header__enhanced': enhanced, 'sk-header__dark': dark }"
  >
    <div
      class="sk-header--container"
      :class="{ dark: $store.getters.darkmode }"
    >
      {{ title }}
    </div>
    <router-link :to="{ name: rootRoute }" v-if="!isRoot">
      <i class="ti-chevron-left" /> {{ backTitle }}
    </router-link>
    <div class="slot">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
@Component
export default class SKHeader extends Vue {
  @Prop() title!: string;
  @Prop() rootRoute!: string;
  @Prop() backTitle!: string;
  @Prop({ default: 150 }) trigger!: number;
  @Prop() dark!: boolean;

  public TRIGGER = this.trigger;
  public enhanced = window.scrollY > this.TRIGGER;

  get isRoot(): boolean {
    return this.$route.name === this.rootRoute;
  }

  mounted() {
    window.addEventListener('scroll', this.scroll);
  }

  beforeDestroy() {
    window.removeEventListener('scroll', this.scroll);
  }

  public scroll() {
    this.enhanced = window.scrollY > this.TRIGGER;
  }
}
</script>

<style lang="scss" scoped>
.sk-header {
  .sk-header--container,
  a,
  .slot {
    position: fixed;
    text-transform: capitalize;
    transition: all 0.2s ease-in-out;
    line-height: 50px;
  }

  .sk-header--container {
    @include backdrop-blur($background);
    &.dark {
      @include backdrop-blur($background_dark);
    }
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    padding: 0 5vw;
    padding-top: env(safe-area-inset-top);
    transform: translateY(calc(-50px - env(safe-area-inset-top)));
    font-weight: bold;
    text-align: center;
  }

  a {
    top: env(safe-area-inset-top);
    color: #fff;
    text-decoration: none;
    z-index: 101;
    left: 5vw;
  }
  .slot {
    top: env(safe-area-inset-top);
    z-index: 101;
    right: 5vw;
  }

  &.sk-header__dark a {
    color: #111;
  }

  &.sk-header__enhanced {
    .sk-header--container {
      transform: translateY(0px);
    }
    a {
      color: $primary;
    }
  }
}
</style>
