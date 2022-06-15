<template>
  <div class="sk-footer" :class="{ dark: $store.getters.darkmode }">
    <!-- <tl-flow class="lang" horizontal="end"> -->
    <tl-flow class="lang">
      <tc-select
        :dark="$store.getters.darkmode"
        :value="selectedLang.title"
        icon="globe"
        placeholder="change language"
        @selectedItems="langChanged"
      >
        <tc-select-item
          v-for="l in languages"
          :key="l._id"
          :defaultSelected="l._id === selectedLang._id"
          :title="l.title"
          :icon="`assets/flags/${l.file}.svg`"
        />
      </tc-select>
      <img :src="`assets/flags/${selectedLang.file}.svg`" alt="" />
    </tl-flow>
    <br />
    <div class="footer-grid">
      <div class="copyright">
        © CultKamasutra 2020
      </div>
      <tl-flow class="legal">
        <tc-link color="color" routeName="impressum">Impressum</tc-link>
      </tl-flow>
    </div>
  </div>
</template>

<script lang="ts">
import { loadLang } from '@/utils/langs';
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class SKFooter extends Vue {
  get languages() {
    return this.$store.state.langs;
  }

  get selectedLang() {
    return (
      this.languages.filter(
        (x: { _id: string }) => x._id === this.$store.state.selectedLang
      )[0] || { title: 'Select a language' }
    );
  }

  public langChanged(to: string[]) {
    if (to.length === 0) return;
    const lang = to[0];
    const id = this.languages.filter(
      (x: { title: string }) => x.title === lang
    )[0]._id;
    loadLang(id);
  }

  public select(id: string) {
    loadLang(id);
  }
}
</script>

<style lang="scss" scoped>
.sk-footer {
  padding: 20px 5vw calc(70px + env(safe-area-inset-bottom));

  background: $paragraph;
  &.dark {
    background: $color;
  }

  /deep/ img {
    filter: none !important;
  }

  .lang {
    img {
      width: 20px;
      height: 20px;
    }
  }

  .footer-grid {
    display: grid;
    grid-gap: 5px;
    .copyright {
      text-align: center;
    }
    .legal .tc-link {
      margin: 0 5px;
    }
    @media only screen and(min-width: 550px) {
      grid-template-columns: auto 1fr;
      .copyright {
        text-align: left;
      }
      .legal {
        justify-content: flex-end;
      }
    }
  }
}
</style>
