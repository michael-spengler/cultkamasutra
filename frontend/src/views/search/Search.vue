<template>
  <div class="view-search" :class="{ dark: $store.getters.darkmode }">
    <SKClose />
    <div content>
      <h1 center>{{ $getText('ui.search.title', 'Choose Muscle') }}</h1>

      <br />
      <tc-segments :dark="$store.getters.darkmode" v-model="category">
        <tc-segment-item :title="$getText('ui.search.for-men', 'For men')" />
        <tc-segment-item
          :title="$getText('ui.search.for-women', 'For women')"
        />
      </tc-segments>

      <div class="image-wrapper">
        <transition name="fade">
          <SKBodyFrontMale
            v-if="front && male"
            key="frontMale"
            @selected="selected"
          />
          <SKBodyBackMale
            v-if="!front && male"
            key="backMale"
            @selected="selected"
          />
          <SKBodyFrontFemale
            v-if="front && !male"
            key="frontFemale"
            @selected="selected"
          />
          <SKBodyBackFemale
            v-if="!front && !male"
            key="backFemale"
            @selected="selected"
          />
        </transition>
      </div>

      <tl-flow>
        <tc-link @click="front = !front">
          <i class="ti-repeat" />
          {{ $getText('ui.search.rotate-body', 'rotate body') }}
        </tc-link>
      </tl-flow>
    </div>
  </div>
</template>

<script lang="ts">
import SKBodyFrontMale from '@/components/sk-body/SK-BodyFrontMale.vue';
import SKBodyBackMale from '@/components/sk-body/SK-BodyBackMale.vue';
import SKBodyFrontFemale from '@/components/sk-body/SK-BodyFrontFemale.vue';
import SKBodyBackFemale from '@/components/sk-body/SK-BodyBackFemale.vue';

import { Vue, Component } from 'vue-property-decorator';
import SKClose from '@/components/SK-Close.vue';

@Component({
  components: {
    SKBodyFrontMale,
    SKBodyBackMale,
    SKBodyFrontFemale,
    SKBodyBackFemale,
    SKClose
  }
})
export default class Search extends Vue {
  public front = true;
  public category = 0;

  get male(): boolean {
    return this.category === 0;
  }

  public selected(selected: string): void {
    const sex = this.male ? 'men' : 'women';
    this.$router.push({
      name: 'search-results',
      params: { sex: sex, muscle: selected }
    });
  }
}
</script>
<style lang="scss" scoped>
.view-search {
  min-height: 100vh;
  display: grid;
  place-content: center;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: linear-gradient(
      rgba($background, 0.75),
      rgba($background, 0.75)
    ),
    url('/assets/search-bg.webp');

  &.dark {
    background-image: linear-gradient(
        rgba($background_dark, 0.75),
        rgba($background_dark, 0.75)
      ),
      url('/assets/search-bg.webp');
  }

  h1 {
    margin-top: env(safe-area-inset-top);
  }

  .image-wrapper {
    margin: 20px 0;
    width: 150.3px;
    height: 500px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    svg,
    img {
      height: inherit;
      width: inherit;
      position: absolute;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}
.fade-enter-active,
.fade-leave-active {
  position: absolute;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: rotateY(90deg) scale(0.75);
}
</style>
