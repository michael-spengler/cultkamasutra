<template>
  <div class="view-login">
    <div class="information">
      <h1>{{ $getText('ui.login.title', 'Login') }}</h1>
      <p center>{{ $getText('ui.login.about', 'Welcome back!') }}</p>
      <div class="center">
        <img src="assets/login/login-hero.svg" alt="" />
      </div>
    </div>
    <svg
      class="divider"
      :class="{ dark: $store.getters.darkmode }"
      preserveAspectRatio="none"
      viewBox="0 0 374 57"
    >
      <path
        d="M374.108-26.5V-79.463A80.666,80.666,0,0,1,395.373-83.5h12.265C467.362-80.14,482.046-33.41,575.9-27.448c61.406,3.9,131.071-10.9,172.211-21.7V-26.5Z"
        transform="translate(-374.108 83.5)"
      />
    </svg>

    <div class="login-box" :class="{ dark: $store.getters.darkmode }">
      <tc-list :dark="$store.getters.darkmode">
        <tc-list-item
          @click="optionClicked('google')"
          icon="google"
          title="Sign in with Google"
        />
        <tc-list-item
          @click="optionClicked('google')"
          icon="apple"
          title="Sign in with Apple"
        />
      </tc-list>
    </div>
  </div>
</template>

<script lang="ts">
import { signIn } from '@/utils/auth';
import { Vue, Component } from 'vue-property-decorator';
@Component
export default class Login extends Vue {
  public optionClicked(provider: string): void {
    signIn(provider);
  }
}
</script>

<style lang="scss" scoped>
.view-login {
  .tc-list-item {
    cursor: pointer;
  }

  max-width: 100vw;
  overflow-x: hidden;
  height: 100vh;
  display: flex;
  flex-direction: column;
  .information {
    max-width: 600px;
    margin: 0 auto;
    padding: 0 5vw;
    padding-top: calc(70px + env(safe-area-inset-top));
    h1 {
      text-align: center;
      margin: 0;
    }
    .center {
      text-align: center;
    }
    z-index: 1;
  }
  .divider {
    width: 100vw;
    height: 50px;
    min-height: 50px;
    margin-top: -29px;
    z-index: 0;
    fill: $paragraph;
    &.dark {
      fill: $paragraph_dark;
    }
  }
  .login-box {
    margin-top: -0.5px;
    padding-top: -10px;
    padding-bottom: calc(70px + env(safe-area-inset-bottom));
    flex-direction: column;
    display: flex;
    justify-content: flex-end;
    flex-grow: 1;

    background: $paragraph;
    &.dark {
      background: $paragraph_dark;
    }
    .tc-list {
      margin: 0 auto;
      min-width: 300px;
      max-width: 90vw;
    }
  }
}
</style>
