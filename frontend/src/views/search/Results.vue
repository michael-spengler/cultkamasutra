<template>
  <div class="view-search-results">
    <SKHeader
      :backTitle="this.$route.meta.prev.title()"
      :rootRoute="this.$route.meta.prev.name"
      :title="title"
      :trigger="180"
    />
    <SKHero />
    <div content max-width>
      <tl-flow v-if="!results" flow="column">
        <tc-spinner :dark="$store.getters.darkmode" size="20" />
        <br />
        <span>{{ $getText('ui.searching.searching', 'Searching...') }}</span>
      </tl-flow>
      <tl-flow v-else-if="results.length === 0" flow="column">
        <i huge error class="ti-exclamation-triangle" />
        <div>{{ $getText('ui.search.nothing-found', 'Nothing found') }}</div>
      </tl-flow>
      <div v-else>
        <div class="subtitle">
          {{ results.length }}
          {{ $getText('ui.search.results-for', 'Results for') }}
        </div>
        <div class="title">
          {{ $getText('ui.search.muscle', 'Muscle') }}: {{ muscle }}
        </div>

        <masonry :cols="{ default: 3, 750: 2, 500: 1 }" gutter="20px">
          <SKPosition
            v-scroll-reveal
            v-for="p in results"
            :key="p._id"
            :position="p"
          />
        </masonry>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import SKHeader from '@/components/SK-Header.vue';
import SKHero from '@/components/SK-Hero.vue';
import SKPosition from '@/components/SK-Position.vue';
import axios from '@/utils/axios';
import { getText } from '@/utils/langs';
import { Position, PositionSearchOptionsDTO } from '@/utils/models';
import { Vue, Component } from 'vue-property-decorator';

@Component({
  components: {
    SKHero,
    SKPosition,
    SKHeader
  }
})
export default class SearchResults extends Vue {
  public results: Position[] | null = null;

  async mounted() {
    this.results = null;
    const { data } = await axios.post(`position/search/${this.sex}`, {
      type: 'muscle',
      input: this.muscle
    } as PositionSearchOptionsDTO);

    this.results = data;
  }

  get sex(): string {
    const sex = this.$route.params.sex;
    if (sex.toLowerCase() === 'men') return sex.toLowerCase();
    return 'women';
  }

  get muscle(): string {
    return this.$route.params.muscle;
  }

  get title(): string {
    return getText('ui.search.results-for', 'Results for') + ' ' + this.muscle;
  }
}
</script>

<style lang="scss" scoped>
.view-search-results {
  .sk-position {
    margin-bottom: 20px;
  }
  .subtitle {
    font-size: 12px;
    font-weight: bold;
    opacity: 0.5;
    text-transform: uppercase;
  }
  .title {
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 20px;
  }
}
</style>
