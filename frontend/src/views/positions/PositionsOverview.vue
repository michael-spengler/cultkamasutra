<template>
  <div class="view-positions-overview">
    <SKHeader rootRoute="positions-overview" title="Positions" />
    <SKHero />

    <div content max-width>
      <masonry :cols="{ default: 3, 750: 2, 500: 1 }" gutter="20px">
        <SKPosition
          v-for="p in $store.getters.positions"
          :key="p._id"
          :position="p"
        />
      </masonry>
    </div>
  </div>
</template>

<script lang="ts">
import SKHeader from '@/components/SK-Header.vue';
import SKHero from '@/components/SK-Hero.vue';
import SKPosition from '@/components/SK-Position.vue';
import { Vue, Component } from 'vue-property-decorator';

@Component({
  components: {
    SKPosition,
    SKHeader,
    SKHero
  }
})
export default class PositionsOverview extends Vue {}
</script>

<style lang="scss" scoped>
.view-positions-overview {
  .sk-position {
    margin-bottom: 20px;
  }
}
</style>
