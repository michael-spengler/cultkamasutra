<template>
  <div class="view-profile" content>
    <div class="profile-info">
      <tc-avatar size="small" :src="$store.getters.user.avatar" />
      <div class="details">
        <div class="name">{{ $store.getters.user.name }}</div>
        <div class="member-since">Member since: {{ date }}</div>
      </div>
    </div>
    <tc-divider :dark="$store.getters.darkmode" />
    <br />
    <tl-grid options>
      <div>
        <h2>{{ $getText('ui.tabbar.profile', 'Profile') }}</h2>
        <tc-list :dark="$store.getters.darkmode">
          <tc-list-item
            :title="
              $getText('ui.profile-menu.liked-positions', 'Liked Positions')
            "
            routeName="liked-positions"
            icon="heart"
          />
          <tc-list-item
            :title="
              $getText(
                'ui.profile-menu.completed-positions',
                'Completed Positions'
              )
            "
            routeName="completed-positions"
            icon="checkmark"
          />
          <tc-list-item
            :title="
              $getText(
                'ui.profile-menu.trending-positions',
                'Trending Positions'
              )
            "
            icon="chart-stocks"
            routeName="trending-positions"
          />
        </tc-list>

        <tc-list :dark="$store.getters.darkmode">
          <tc-list-item
            title="Impressum"
            icon="file-medical"
            routeName="impressum"
          />
          <tc-list-item
            red
            @click="signOut"
            :title="$getText('ui.profile-menu.sign-out', 'Sign out')"
            icon="logout"
          />
        </tc-list>
      </div>
      <div v-group.admin.moderator>
        <h2>Management</h2>
        <tc-list :dark="$store.getters.darkmode">
          <tc-list-item
            v-group.admin
            :title="$getText('ui.profile-menu.statistics', 'Statistics')"
            routeName="statistics"
            icon="chart-bar"
          />
          <tc-list-item
            :title="$getText('ui.profile-menu.positions', 'Positions')"
            routeName="positions"
            icon="list"
          />
          <tc-list-item
            :title="$getText('ui.profile-menu.languages', 'Languages')"
            routeName="languages"
            icon="globe"
          />
        </tc-list>
      </div>
    </tl-grid>
  </div>
</template>

<script lang="ts">
import { signOut } from '@/utils/auth';
import { getDateDDMMYYYY } from '@/utils/functions';
import { Vue, Component } from 'vue-property-decorator';
@Component
export default class Profile extends Vue {
  get date(): string {
    return getDateDDMMYYYY(this.$store.getters.user.date);
  }

  public signOut(): void {
    signOut();
  }
}
</script>

<style lang="scss" scoped>
.view-profile {
  [options] {
    max-width: 700px;
    margin: 0 auto;
  }
  .profile-info {
    display: flex;
    grid-gap: 20px;
    grid-template-columns: auto minmax(0px, 1fr);
    width: fit-content;
    left: 50%;
    transform: translateX(-50%);
    position: relative;
    .tc-avatar {
      width: 50px;
      height: 50px;
    }
    .details {
      display: flex;
      flex-direction: column;
      justify-content: center;
      .name {
        font-weight: bold;
        font-size: 20px;
      }
      .member-since {
        opacity: 0.9;
      }
    }
  }
  .tc-list-item {
    cursor: pointer;
  }
  .tc-list {
    margin-top: 20px;
    [red] {
      color: $error !important;
    }
  }
}
</style>
