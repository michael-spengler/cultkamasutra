<template>
  <tc-modal
    v-model="modalOpened"
    class="sk-select-position"
    :dark="$store.getters.darkmode"
    title="Select position"
  >
    <tc-input
      :dark="$store.getters.darkmode"
      v-model="query"
      placeholder="Search..."
    />
    <br />
    <tc-list :dark="$store.getters.darkmode">
      <tc-list-item
        v-for="p in positions"
        :key="p._id"
        :title="$getText(`position.${p._id}.title`)"
        @click="selected(p._id)"
      />
    </tc-list>
  </tc-modal>
</template>

<script lang="ts">
import { EventBus } from '@/utils/eventbus';
import { IPosition } from '@/utils/interfaces';
import { getText } from '@/utils/langs';
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class SKSelectPosition extends Vue {
  public modalOpened = false;
  public query = '';

  mounted() {
    EventBus.$on('sk-select-position', () => {
      this.query = '';
      this.modalOpened = true;
    });
  }

  public selected(id: string) {
    EventBus.$emit('sk-select-position-return', id);
    this.modalOpened = false;
  }

  get positions(): IPosition[] {
    const positions: IPosition[] = this.$store.getters.positions;
    if (this.query.length === 0) return positions;
    return positions.filter(x =>
      getText('position.' + x._id + '.title')
        .toLowerCase()
        .includes(this.query.toLowerCase())
    );
  }
}
</script>
<style lang="scss" scoped>
.sk-select-position {
  .tc-list {
    min-width: 250px;
  }
}
</style>
