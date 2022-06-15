<template>
  <div class="view-statistics" content max-width>
    <h2>General</h2>
    <template v-if="!stats.sums">
      <br />
      <tc-spinner :dark="$store.getters.darkmode" size="20" />
      <br />
    </template>

    <tl-grid v-else gap="20">
      <tl-flow
        v-for="s in Object.keys(stats.sums)"
        :key="s"
        class="general-stat"
        :class="{ dark: $store.getters.darkmode }"
        horizontal="space-between"
      >
        <div class="amount">{{ stats.sums[s] }}</div>
        <div class="description">{{ s }}</div>
      </tl-flow>
    </tl-grid>

    <h2>Login Provider</h2>
    <template v-if="!stats.login">
      <br />
      <tc-spinner :dark="$store.getters.darkmode" size="20" />
      <br />
    </template>
    <tl-grid v-else gap="10px 30">
      <div v-for="p in Object.keys(stats.login)" :key="p" class="provider-stat">
        <tl-flow horizontal="space-between">
          <div class="provider">
            {{ p }}: <span>{{ stats.login[p].total }} User</span>
          </div>
          <div class="percentage">
            {{ Math.round(stats.login[p].perc * 10000) / 100 }}%
          </div>
        </tl-flow>
        <tc-progress :percent="stats.login[p].perc * 100" />
      </div>
    </tl-grid>
  </div>
</template>

<script lang="ts">
import axios from '@/utils/axios';
import { Vue, Component } from 'vue-property-decorator';
@Component
export default class Statistics extends Vue {
  public stats = {};

  async mounted() {
    this.stats = (await axios.get('stats')).data;
  }
}
</script>
<style lang="scss" scoped>
.view-statistics {
  .tl-grid {
    margin: 20px 0;
  }
  .general-stat {
    background: $paragraph;
    &.dark {
      background: $paragraph_dark;
    }
    border-radius: $border-radius;
    padding: 10px;
    .amount {
      color: $primary;
      font-weight: bold;
      font-size: 18px;
    }
    .description {
      opacity: 0.75;
    }
  }

  .provider-stat .tl-flow {
    font-weight: bold;
    span {
      font-weight: normal;
    }
  }
}
</style>
