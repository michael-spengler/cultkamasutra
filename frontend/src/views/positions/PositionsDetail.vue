<template>
  <div class="view-positions-detail">
    <SKHeader
      :backTitle="this.$route.meta.prev.title()"
      :rootRoute="this.$route.meta.prev.name"
      :title="title || 'Details'"
      :trigger="180"
    >
      <tc-button
        variant="opaque"
        color="#111"
        background="#fff"
        icon="share"
        @click="share"
      />
    </SKHeader>

    <template v-if="position">
      <div class="detail-hero" :class="{ dark: $store.getters.darkmode }">
        <div class="image-container">
          <img :src="'assets/positions/' + position.thumbnail" alt="" />
        </div>
        <div class="overlay">
          <tl-grid minWidth="100" gap="0">
            <tc-button
              :variant="liked && 'filled'"
              :background="liked ? '#fff' : '#aaa'"
              color="#111"
              :name="liked ? 'Liked' : 'Like'"
              :icon="liked ? 'heart' : 'heart-empty'"
              @click="like"
            />

            <tc-button
              :variant="completed && 'filled'"
              :background="completed ? '#fff' : '#aaa'"
              color="#111"
              :name="completed ? 'Completed' : 'Complete'"
              :icon="completed && 'checkmark'"
              @click="complete"
            />
          </tl-grid>
        </div>
      </div>

      <div content>
        <h1 center>{{ $getText(`position.${id}.title`) }}</h1>

        <div
          class="information-wrapper"
          :class="{ dark: $store.getters.darkmode }"
        >
          <div class="information">
            <div class="title">
              {{ $getText('general.position-detail.Level', 'Level') }}
            </div>
            <div class="icon">
              {{ position.level }}
            </div>
            <div class="description">
              {{ $getText('general.position-detail.out-of', 'out of') }} 3
            </div>
          </div>
          <div class="information">
            <div class="title">
              {{ $getText('general.position-detail.Intimacy', 'Intimacy') }}
            </div>
            <div class="icon">
              {{ position.intimacy }}
            </div>
            <div class="description">
              {{ $getText('general.position-detail.out-of', 'out of') }} 3
            </div>
          </div>
          <router-link
            v-group.admin.moderator
            tag="div"
            class="information"
            :to="{ name: 'edit-position', params: { id: position._id } }"
          >
            <div class="title">Edit</div>
            <div class="icon">
              <i class="ti-pencil"></i>
            </div>
            <div class="description">position</div>
          </router-link>
        </div>
        <p>{{ $getText(`position.${id}.description`) }}</p>
        <tc-divider :dark="$store.getters.darkmode" />

        <h3 center>
          {{
            $getText(
              'general.position-detail.training-effect',
              'Training Effect'
            )
          }}
        </h3>

        <tl-grid gap="20">
          <div class="sex">
            <div class="muscles">
              <p center>
                {{ musclesWoman }}
              </p>
            </div>

            <tl-flow horizontal="space-around" class="image-wrapper">
              <SKBodyFrontMale
                :primary="position.primaryMusclesMan"
                :secondary="position.secondaryMusclesMan"
              />
              <SKBodyBackMale
                :primary="position.primaryMusclesMan"
                :secondary="position.secondaryMusclesMan"
              />
            </tl-flow>
          </div>
          <div class="sex">
            <div class="muscles">
              <p center>
                {{ musclesMan }}
              </p>
            </div>
            <tl-flow horizontal="space-around" class="image-wrapper">
              <SKBodyFrontFemale
                :primary="position.primaryMusclesWoman"
                :secondary="position.secondaryMusclesWoman"
              />
              <SKBodyBackFemale
                :primary="position.primaryMusclesWoman"
                :secondary="position.secondaryMusclesWoman"
              />
            </tl-flow>
          </div>
        </tl-grid>
      </div>
    </template>
    <div v-else>Loading</div>
  </div>
</template>

<script lang="ts">
import SKHeader from '@/components/SK-Header.vue';
import { Vue, Component } from 'vue-property-decorator';
import SKBodyFrontMale from '@/components/sk-body/SK-BodyFrontMale.vue';
import SKBodyFrontFemale from '@/components/sk-body/SK-BodyFrontFemale.vue';
import SKBodyBackMale from '@/components/sk-body/SK-BodyBackMale.vue';
import SKBodyBackFemale from '@/components/sk-body/SK-BodyBackFemale.vue';
import { IPosition, ISKNotification } from '@/utils/interfaces';
import {
  complete,
  copyToClipboard,
  hasCompleted,
  hasLiked,
  like
} from '@/utils/functions';
import { getText } from '@/utils/langs';

@Component({
  components: {
    SKHeader,
    SKBodyFrontMale,
    SKBodyFrontFemale,
    SKBodyBackMale,
    SKBodyBackFemale
  }
})
export default class PositionsDetail extends Vue {
  public position: IPosition | null = null;

  mounted() {
    this.loadPosition();
  }

  public loadPosition(): void {
    this.position = this.$store.getters.position(this.id);
    if (!this.position) {
      setTimeout(() => {
        this.loadPosition();
      }, 200);
    }
  }

  get title(): string | undefined {
    if (this.position) return getText(`position.${this.id}.title`);
    return undefined;
  }

  get id(): string {
    return this.$route.params.id;
  }

  get musclesMan(): string {
    if (!this.position) return '';
    return [
      ...this.position.primaryMusclesMan,
      ...this.position.secondaryMusclesMan
    ].join(', ');
  }

  get musclesWoman(): string {
    if (!this.position) return '';
    return [
      ...this.position.primaryMusclesWoman,
      ...this.position.secondaryMusclesWoman
    ].join(', ');
  }

  get liked(): boolean {
    return hasLiked(this.id);
  }

  get completed(): boolean {
    return hasCompleted(this.id);
  }

  public like(): void {
    like(this.id);
  }

  public complete(): void {
    complete(this.id);
  }

  public share(): void {
    if (this.position) {
      const url = window.location.href;
      const share: ShareData = {
        title: 'SportKamasutra',
        text: getText(`position.${this.id}.title`),
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
.view-positions-detail {
  .detail-hero {
    background: $paragraph;
    background: radial-gradient(
      ellipse at center,
      #f5f5f5 0%,
      #ececec 60%,
      $paragraph 90%
    );

    &.dark {
      background: $color;
      background: radial-gradient(
        ellipse at center,
        #36383f 0%,
        #1a1d22 60%,
        $color 90%
      );
    }
    margin-top: calc(-1 * env(safe-area-inset-top));
    padding-top: env(safe-area-inset-top);
    height: calc(300px + env(safe-area-inset-top));
    position: relative;
    z-index: 1;
    .image-container {
      margin-top: env(safe-area-inset-top);
      height: 300px;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: bottom center;
      }
    }
    .overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 20px 5vw;
      .tl-grid {
        position: relative;
        left: 50%;
        max-width: 400px;
        transform: translateX(-50%);
      }
    }
  }

  .information-wrapper {
    display: flex;
    flex-wrap: nowrap;
    max-width: 100%;
    overflow-x: auto;
    @include custom-scrollbar__light();
    border: 2px solid rgba(0, 0, 0, 0.25);
    &.dark {
      border-color: rgba(255, 255, 255, 0.25);
      .information:not(:last-child)::after {
        background: white;
      }
    }
    border-right: unset;
    border-left: unset;
    padding: 7.5px 0;
    margin-top: 10px;
    .information {
      flex-grow: 1;
      white-space: nowrap;
      text-align: center;
      min-width: 110px;
      user-select: none;

      &:not(:last-child) {
        position: relative;
        &::after {
          content: '';
          position: absolute;
          height: 30px;
          width: 2px;
          border-radius: 5px;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          background: black;
          opacity: 0.5;
        }
      }

      .title {
        text-transform: uppercase;
        font-weight: 600;
        font-size: 14px;
        opacity: 0.75;
      }

      .icon {
        font-size: 20px;
        font-weight: bold;
        line-height: 25px;
      }

      .description {
        font-size: 14px;
        opacity: 0.75;
      }

      &:nth-child(3) {
        cursor: pointer;
      }
    }
  }

  .tl-grid {
    .sex {
      .muscle {
        height: 50px;
      }

      .image-wrapper {
        flex-wrap: nowrap;
        svg {
          height: 300px;
          width: fit-content;
        }
      }
    }
  }
}
</style>
