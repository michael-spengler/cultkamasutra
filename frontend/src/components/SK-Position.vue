<template>
  <router-link
    :to="{ name: 'positions-detail', params: { id: position._id } }"
    class="sk-position"
    :class="{ dark: $store.getters.darkmode }"
    v-if="position"
  >
    <div class="thumbnail-wrapper">
      <img :src="'assets/positions/' + position.thumbnail" alt="" />
    </div>
    <div class="container">
      <div class="title">{{ $getText(`position.${id}.title`) }}</div>

      <div class="information-wrapper">
        <div class="information">
          <i class="ti-heart"></i>
          <div>
            <span>
              {{ $getText('general.position-detail.Intimacy', 'Intimacy') }}
            </span>
            <span>{{ position.intimacy }}</span>
          </div>
        </div>
        <div class="information">
          <i class="ti-link-alt"></i>
          <div>
            <span>
              {{ $getText('general.position-detail.level', 'Level') }}
            </span>
            <span>{{ position.level }}</span>
          </div>
        </div>
      </div>

      <tl-grid minWidth="10" gap="4">
        <tc-button
          icon="heart"
          :variant="liked ? 'filled' : 'opaque'"
          tfbackground="error"
          @click.stop.prevent="like"
        />
        <tc-button
          icon="checkmark"
          :variant="completed ? 'filled' : 'opaque'"
          tfbackground="success"
          @click.stop.prevent="complete"
        />
      </tl-grid>
    </div>
  </router-link>
</template>

<script lang="ts">
import { complete, hasCompleted, hasLiked, like } from '@/utils/functions';
import { IPosition } from '@/utils/interfaces';
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class SKPosition extends Vue {
  @Prop() position!: IPosition;

  get id(): string {
    if (!this.position) return '1704';
    return this.position._id;
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
}
</script>

<style lang="scss" scoped>
.sk-position {
  text-decoration: none;

  height: fit-content;
  box-shadow: $shadow-light;
  transition: all 0.2s ease-in-out;
  &:hover {
    box-shadow: $shadow;
  }

  border-radius: $border-radius;
  color: inherit;
  background: $paragraph;

  &.dark {
    background: $color;
    .thumbnail-wrapper {
      background: radial-gradient(
        ellipse at center,
        #36383f 0%,
        #1a1d22 60%,
        $color 90%
      );
    }
  }

  display: block;

  .thumbnail-wrapper {
    height: 200px;
    padding-top: 10px;
    border-radius: inherit;
    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
    background: radial-gradient(
      ellipse at center,
      #f5f5f5 0%,
      #ececec 60%,
      $paragraph 90%
    );
  }
  .container {
    padding: 10px;
    padding-bottom: 7px;
    .title {
      overflow-wrap: break-word;
      font-weight: bold;
      font-size: 1.4em;
    }

    .information-wrapper {
      font-size: 12px;
      margin: 10px 0;
      .information {
        display: grid;
        grid-template-columns: 20px 1fr;
        place-content: center;
        div {
          span {
            opacity: 0.75;
            font-weight: bold;
            text-transform: uppercase;
          }
        }
      }
    }

    .tl-grid {
      margin: -3px;
      .tc-button {
        padding: 4px;
      }
    }
  }
}
</style>
