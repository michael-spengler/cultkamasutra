<template>
  <div class="view-liked-positions" content>
    <h2 center>
      {{ $getText('ui.profile-menu.liked-positions', 'Liked Positions') }}
    </h2>
    <div v-if="liked.length === 0" center>
      <p>
        {{
          $getText(
            'ui.profile-positions.nothing-liked',
            "You haven't liked any position yet. Like a position to save it here."
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
          v-for="p in likedPositions"
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
export default class LikedPositions extends Vue {
  get liked(): string[] {
    return this.$store.getters.user.likedPositions;
  }

  get positions(): IPosition[] {
    return this.$store.getters.positions;
  }

  get likedPositions(): IPosition[] {
    return this.positions.filter(x => this.liked.includes(x._id));
  }
}
</script>
<style lang="scss" scoped>
.view-liked-positions {
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
