<template>
  <tc-modal
    v-model="modalOpened"
    class="sk-suspension-info"
    @close="close"
    :dark="$store.getters.darkmode"
    title="Suspension Info"
  >
    <tl-flow flow="column">
      <tc-avatar src="https://avatars2.githubusercontent.com/u/43786652" />
      <div class="user-name">Michael Spengler</div>
      <div class="user-id">9015ac85-2be3-48b9-b7a9-773f9a3d5883</div>
    </tl-flow>

    <tl-grid gap="0 10" minWidth="10">
      <div class="info">
        <div class="title">Suspended by</div>
        <div class="description">Timo Scheuermann</div>
      </div>
      <div class="info">
        <div class="title">Suspended until</div>
        <div class="description">06.01.2020</div>
      </div>
    </tl-grid>

    <tl-grid>
      <tc-button variant="filled" tfbackground="error" name="Pardon User" />
    </tl-grid>
  </tc-modal>
</template>

<script lang="ts">
import { EventBus } from '@/utils/eventbus';
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class SKSuspensionInfo extends Vue {
  public modalOpened = false;
  public userId = '';

  mounted() {
    EventBus.$on('sk-suspension-info', (id: string) => {
      this.userId = id;
      this.modalOpened = true;
    });
  }

  public close() {
    this.modalOpened = false;
  }
}
</script>
<style lang="scss" scoped>
.sk-suspension-info {
  .user-name {
    font-weight: bold;
    margin-top: 10px;
  }
  .user-id {
    opacity: 0.75;
    font-size: 12px;
  }
  .tl-grid {
    margin-top: 20px;
    .info {
      text-align: center;
      .title {
        font-weight: bold;
        opacity: 0.75;
      }
    }
  }
}
</style>
