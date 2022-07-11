<template>
  <div>
    <div class="view-home">
      <SKHeader rootRoute="home" title="SportKamasutra">
        <tc-button
          variant="opaque"
          color="#111"
          background="#fff"
          icon="share"
          @click="share"
        />
      </SKHeader>

      <SKHero />

      <div content>
        <h3 center>
          {{
            $getText('ui.home.title', 'Make Love - Not War')
          }}
        </h3>

        <SKCarousel>
          <SKPosition
            v-for="t in $store.getters.trending"
            :key="t._id"
            :position="t"
          />
        </SKCarousel>

        <!-- <p center>
          <tc-link routeName="positions-overview">
            {{ $getText('ui.home.view-all', 'view all') }}
          </tc-link>
        </p> -->

        <br />
        <p center>
          <b>
            {{
              $getText(
                'ui.home.button-description',
                'Over 69 positions are ready for you!'
              )
            }}
          </b>
        </p>
        <tl-flow>
          <tc-button
            variant="filled"
            :name="$getText('ui.home.button', 'Start your training now')"
            routeName="search"
          />
        </tl-flow>
        <br />
        <tl-flow>
          <a href="https://cultdao.io/manifesto.pdf" target="_blank">
          <tc-button
            variant="filled"
            :name='"Read The CULT Manifesto"'
          />
          </a>
        </tl-flow>
        <!-- <p
          center
          max
          v-for="(p, i) in $getText('ui.home.about', ' ').split('\\n')"
          :key="'p' + i"
        >
          {{ p }}
        </p> -->
      </div>
    </div>
    <SKFooter />
  </div>
</template>

<script lang="ts">
import SKCarousel from '@/components/SK-Carousel.vue';
import SKFooter from '@/components/SK-Footer.vue';
import SKHeader from '@/components/SK-Header.vue';
import SKHero from '@/components/SK-Hero.vue';
import SKPosition from '@/components/SK-Position.vue';
import { copyToClipboard } from '@/utils/functions';
import { ISKNotification } from '@/utils/interfaces';
import { getText } from '@/utils/langs';
import { Vue, Component } from 'vue-property-decorator';

@Component({
  components: {
    SKFooter,
    SKHeader,
    SKCarousel,
    SKPosition,
    SKHero
  }
})
export default class Home extends Vue {
  public share(): void {
    const url = window.location.href;
    const share: ShareData = {
      title: 'SportKamasutra',
      text: getText(`ui.home.title`),
      url: url
    };

    try {
      navigator
        .share(share)
        .then(() => {
          /** */
        })
        .catch(this.copyToClip);
    } catch (_) {
      this.copyToClip();
    }
  }

  private copyToClip() {
    copyToClipboard(window.location.href);
    this.$store.commit('sendNotification', {
      text: window.location.href,
      title: 'Copied URL to your clipboard'
    } as ISKNotification);
  }
}
</script>

<style lang="scss" scoped>
.view-home {
  min-height: calc(100vh - env(safe-area-inset-bottom) - 50px);

  [max] {
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
  }
}
a {
  color: inherit;
  text-decoration: none; /* no underline */
}

</style>
