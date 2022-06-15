<template>
  <div class="view-interim-positions">
    <SKRouterView />
  </div>
</template>

<script lang="ts">
import SKRouterView from '@/components/SK-RouterView.vue';
import { Vue, Component } from 'vue-property-decorator';

@Component({
  components: {
    SKRouterView
  }
})
export default class PositionsInterim extends Vue {}
</script>

<style lang="scss" scoped>
.view-interim-positions {
  min-height: 100vh;
}
</style>
