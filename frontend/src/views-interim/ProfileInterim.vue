<template>
  <div class="view-interim-profile">
    <SKHeader
      :backTitle="this.$route.meta.prev.title()"
      :rootRoute="this.$route.meta.prev.name"
      :title="title"
      :dark="!$store.getters.darkmode"
    />
    <SKHero />

    <SKRouterView />
  </div>
</template>

<script lang="ts">
import SKHeader from '@/components/SK-Header.vue';
import SKHero from '@/components/SK-Hero.vue';
import SKRouterView from '@/components/SK-RouterView.vue';
import { Vue, Component } from 'vue-property-decorator';

@Component({
  components: {
    SKHeader,
    SKRouterView,
    SKHero
  }
})
export default class ProfileInterim extends Vue {
  get isRoot(): boolean {
    return this.$route.name === 'profile';
  }
  get title(): string {
    return (this.$route.name || '').split('-').join(' ');
  }
}
</script>
<style lang="scss" scoped>
.view-interim-profile {
  min-height: 100vh;
}
</style>
