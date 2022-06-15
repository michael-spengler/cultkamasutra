<template>
  <div class="view-e-books">
    <SKHeader
      rootRoute="ebooks"
      :title="$getText('ui.tabbar.books', 'Books')"
    />

    <SKHero />

    <div content>
      <h2 center>{{ $getText('ui.tabbar.books', 'Books') }}</h2>
      <br />

      <div class="grid">
        <div class="cover">
          <tc-image
            src="https://books.google.com/books/content/images/frontcover/omd1AgAAQBAJ?fife=w400-h600"
          />
        </div>

        <div class="stores">
          <div class="store" v-for="s in Object.keys(editions)" :key="s">
            <div class="store-title">{{ s }}</div>
            <div class="editions">
              <a
                v-for="e in editions[s]"
                :key="e.lang"
                :href="e.href"
                target="_blank"
                :title="e.lang"
              >
                <img :src="`assets/flags/${e.file}.svg`" :alt="e.file" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <SKFooter />
  </div>
</template>

<script lang="ts">
import SKFooter from '@/components/SK-Footer.vue';
import SKHeader from '@/components/SK-Header.vue';
import SKHero from '@/components/SK-Hero.vue';
import { Vue, Component } from 'vue-property-decorator';

@Component({
  components: {
    SKFooter,
    SKHeader,
    SKHero
  }
})
export default class EBooks extends Vue {
  public editions = {
    Google: [
      {
        href:
          'https://play.google.com/store/books/details/My_Media_Concepts_Sport_Kamasutra?id=omd1AgAAQBAJ',
        lang: 'English',
        file: 'united-states-of-america'
      },
      {
        href:
          'https://play.google.com/store/books/details/My_Media_Concepts_Sport_Kamasutra?id=6EdzAgAAQBAJ',
        lang: 'German',
        file: 'germany'
      },
      {
        href:
          'https://play.google.com/store/books/details/My_Media_Concepts_%D0%9A%D0%B0%D0%BC%D0%B0_C%D1%83%D1%82%D1%80%D0%B0_%D0%A1%D0%BF%D0%BE%D1%80%D1%82?id=T_V0AgAAQBAJ',
        lang: 'Russian',
        file: 'russia'
      },
      {
        href:
          'https://play.google.com/store/books/details/My_Media_Concepts_Sport_Kama_Sutra?id=Wdx7AgAAQBAJ',
        lang: 'Italian',
        file: 'italy'
      },
      {
        href:
          'https://play.google.com/store/books/details/My_Media_Concepts_Kama_Sutra_Deportista?id=X6d1AgAAQBAJ',
        lang: 'Spanish',
        file: 'spain'
      },
      {
        href:
          'https://play.google.com/store/books/details/My_Media_Concepts_%EC%8A%A4%ED%8F%AC%EC%B8%A0_%EC%B9%B4%EB%A7%88%EC%88%98%ED%8A%B8%EB%9D%BC?id=miPGAgAAQBAJ',
        lang: 'Korean',
        file: 'south-korea'
      },
      {
        href:
          'https://play.google.com/store/books/details/My_Media_Concepts_%E5%81%A5%E8%BA%AB_%E6%84%9B%E7%B6%93?id=ftx7AgAAQBAJ',
        lang: 'Chinese',
        file: 'china'
      },
      {
        href:
          'https://play.google.com/store/books/details/My_Media_Concepts_Sport_Kama_Sutra?id=BfV0AgAAQBAJ',
        lang: 'French',
        file: 'france'
      }
    ],
    Amazon: [
      {
        href:
          'https://www.amazon.de/Sport-Kamasutra-English-Yade-ebook/dp/B093DHWP2P/ref=mp_s_a_1_38?dchild=1&qid=1621453303&refinements=p_27%3AYade&s=digital-text&sr=1-38&text=Yade',
        lang: 'English',
        file: 'united-states-of-america'
      },
      {
        href:
          'https://www.amazon.de/Sport-Kamasutra-German-Yade-ebook/dp/B093CHB4M4/ref=mp_s_a_1_15?dchild=1&qid=1621453177&refinements=p_27%3AYade&s=digital-text&sr=1-15&text=Yade',
        lang: 'German',
        file: 'germany'
      },

      {
        href:
          'https://www.amazon.de/Sport-Kama-Sutra-Italian-Yade-ebook/dp/B093CLCP8Z/ref=mp_s_a_1_16?dchild=1&qid=1621453177&refinements=p_27%3AYade&s=digital-text&sr=1-16&text=Yade',
        lang: 'Italian',
        file: 'italy'
      },
      {
        href:
          'https://www.amazon.de/Kama-Sutra-Deportista-Spanish-Yade-ebook/dp/B093CJDDHM/ref=mp_s_a_1_18?dchild=1&qid=1621453177&refinements=p_27%3AYade&s=digital-text&sr=1-18&text=Yade',
        lang: 'Spanish',
        file: 'spain'
      },

      {
        href:
          'https://www.amazon.de/%E5%81%A5%E8%BA%AB-%E6%84%9B%E7%B6%93-Chinese-Traditional-ebook/dp/B093CQG9BB/ref=mp_s_a_1_43?dchild=1&qid=1621453307&refinements=p_27%3AYade&s=digital-text&sr=1-43&text=Yade',
        lang: 'Chinese',
        file: 'china'
      },
      {
        href:
          'https://www.amazon.de/Sport-Kama-Sutra-French-Yade-ebook/dp/B093CJSZQ8/ref=mp_s_a_1_17?dchild=1&qid=1621453177&refinements=p_27%3AYade&s=digital-text&sr=1-17&text=Yade',
        lang: 'French',
        file: 'france'
      }
    ]
  };
}
</script>

<style lang="scss" scoped>
.view-e-books {
  [content] {
    min-height: calc(100vh - 475px - env(safe-area-inset-top));
  }
  .grid {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 20px;

    .cover {
      max-width: 150px;
    }

    .stores {
      display: grid;
      grid-gap: 10px;
      grid-template-columns: 1fr;

      .store {
        .store-title {
          font-weight: bold;
          font-size: 18px;
          margin-bottom: 10px;
        }

        .editions {
          display: flex;
          flex-wrap: wrap;

          a {
            margin: 5px;
            height: 40px;
            width: 40px;
          }
        }
      }
    }
  }
}
</style>
