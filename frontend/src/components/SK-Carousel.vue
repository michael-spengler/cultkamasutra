<template>
  <div class="sk-carousel">
    <slot />
    <div class="sk-carousel__spacer" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class SKCarousel extends Vue {}
</script>

<style lang="scss" scoped>
.sk-carousel {
  margin: 20px -5vw 0;
  display: flex;
  overflow-x: auto;
  user-select: none;
  overflow-y: hidden;

  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }
  .sk-carousel__spacer {
    flex-shrink: 0;
    width: 5vw !important;
  }
  & > * {
    max-width: 250px;
    margin-left: 30px;
    scroll-snap-align: center;
    flex-shrink: 0;
    &:first-child {
      margin-left: 5vw;
    }
  }
}
</style>
