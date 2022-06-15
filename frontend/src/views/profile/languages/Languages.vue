<template>
  <div class="view-languages" content max-width>
    <tl-flow horizontal="space-between">
      <h2>{{ $getText('ui.profile-menu.languages', 'Languages') }}</h2>
      <tc-link routeName="create-language">add new language</tc-link>
    </tl-flow>
    <br />
    <tl-grid gap="10" minWidth="150">
      <router-link
        class="language"
        :class="{ dark: $store.getters.darkmode }"
        v-for="l in $store.getters.langs"
        :key="l._id"
        :to="{ name: 'language-details', params: { id: l._id } }"
      >
        <tl-flow horizontal="space-between">
          <div class="flag">
            <img :src="`assets/flags/${l.file}.svg`" alt="" />
          </div>
          <div class="name">{{ l.title }}</div>
        </tl-flow>
      </router-link>
    </tl-grid>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Languages extends Vue {}
</script>

<style lang="scss" scoped>
.view-languages {
  .language {
    background: $paragraph;
    color: $color;
    &.dark {
      background: $paragraph_dark;
      color: $color_dark;
    }
    padding: 10px;
    border-radius: $border-radius;
    text-decoration: none;

    .flag {
      img {
        height: 30px;
      }
    }
    .name {
      font-weight: 500;
    }
  }
}
</style>
