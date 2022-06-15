<template>
  <div class="view-positions" content max-width>
    <tl-flow horizontal="space-between">
      <h2>{{ $getText('ui.profile-menu.positions', 'Positions') }}</h2>
      <tc-link routeName="add-position">add position</tc-link>
    </tl-flow>

    <tc-list :dark="$store.getters.darkmode">
      <tc-list-item
        v-for="p in $store.getters.positions"
        :key="p._id"
        :title="$getText(`position.${p._id}.title`)"
        description="edit"
        :to="{ name: 'edit-position', params: { id: p._id } }"
      />
    </tc-list>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Positions extends Vue {}
</script>
<style lang="scss" scoped>
.view-positions {
  .tc-list {
    margin-top: 10px;
  }
}
</style>
