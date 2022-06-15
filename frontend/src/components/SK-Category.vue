<template>
  <div class="sk-category">
    <tl-flow flow="column">
      <div class="icon">
        <i :class="'ti-' + icon" />
      </div>
      <div class="title">{{ title }}</div>
    </tl-flow>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
@Component
export default class SKCategory extends Vue {
  @Prop() title!: string;
  @Prop() icon!: string;
}
</script>

<style lang="scss" scoped>
.sk-category {
  cursor: pointer;
  width: 200px;
  padding: 20px 0;
  color: #fff;
  background-image: radial-gradient(
    circle 1192px at 21.5% 49.5%,
    rgba(91, 21, 55, 1) 0.1%,
    rgba(0, 0, 0, 1) 100.2%
  );
  box-shadow: $shadow-light;
  transition: all 0.2s ease-in-out;
  &:hover {
    box-shadow: $shadow;
  }
  border-radius: $border-radius;
  .icon {
    font-size: 35px;
    line-height: 40px;
  }
  .title {
    margin-top: 5px;
    font-weight: 500;
    opacity: 0.75;
  }
}
</style>
