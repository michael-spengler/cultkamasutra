<template>
  <div class="view-trending-positions" content>
    <h2 center>
      {{ $getText('ui.profile-menu.trending-positions', 'Trending Positions') }}
    </h2>
    <div v-if="trendingPositions.length === 0" center>
      <p>
        {{
          $getText(
            'ui.profile-positions.nothing-trending',
            'There are no trending positions at the moment.'
          )
        }}
      </p>
      <tl-grid small minWidth="100">
        <div>
          <tc-link routeName="search">
            {{
              $getText(
                'ui.profile-positions.find-a-position',
                'Find a position'
              )
            }}
            <i small class="ti-chevron-right" />
          </tc-link>
        </div>
      </tl-grid>
    </div>

    <div v-else max-width>
      <br />
      <masonry :cols="{ default: 3, 750: 2, 500: 1 }" gutter="20px">
        <SKPosition
          v-scroll-reveal
          v-for="p in trendingPositions"
          :key="p._id"
          :position="p"
        />
      </masonry>
    </div>
  </div>
</template>

<script lang="ts">
import SKPosition from '@/components/SK-Position.vue';
import { IPosition } from '@/utils/interfaces';
import { Vue, Component } from 'vue-property-decorator';

@Component({
  components: {
    SKPosition
  }
})
export default class TrendingPositions extends Vue {
  get trendingPositions(): IPosition[] {
    return this.$store.getters.trending;
  }
}
</script>
<style lang="scss" scoped>
.view-trending-positions {
  .tl-grid[small] {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    max-width: 500px;
  }
  .sk-position,
  .sk-position {
    margin-bottom: 20px;
  }
}
</style>
