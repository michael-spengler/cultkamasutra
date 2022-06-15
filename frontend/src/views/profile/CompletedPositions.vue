<template>
  <div class="view-completed-positions" content>
    <h2 center>
      {{
        $getText('ui.profile-menu.completed-positions', 'Completed Positions')
      }}
    </h2>

    <div v-if="completed.length === 0" center>
      <p>
        {{
          $getText(
            'ui.profile-positions.nothing-completed',
            "You haven't completed any position yet. Complete a position to save it here."
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
          v-for="p in completedPositions"
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
export default class CompletedPositions extends Vue {
  get completed(): string[] {
    return this.$store.getters.user.completedPositions;
  }

  get positions(): IPosition[] {
    return this.$store.getters.positions;
  }

  get completedPositions(): IPosition[] {
    return this.positions.filter(x => this.completed.includes(x._id));
  }
}
</script>
<style lang="scss" scoped>
.view-completed-positions {
  .tl-grid[small] {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    max-width: 500px;
  }
  .sk-position {
    margin-bottom: 20px;
  }
}
</style>
