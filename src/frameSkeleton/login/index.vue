<template>
  <div class="login">
    <div class="login-wrapper">
      <div class="belt">
        <div
          class="t"
          style="--index: 0"
        />
        <div
          class="t"
          style="--index: 1"
        />
        <div
          class="t"
          style="--index: 2"
        />
        <div
          class="t"
          style="--index: 3"
        />
        <div
          class="t"
          style="--index: 4"
        />
        <div
          class="t"
          style="--index: 5"
        />
        <div
          class="t"
          style="--index: 6"
        />
        <div
          class="t"
          style="--index: 7"
        />
        <div
          class="t"
          style="--index: 8"
        />
        <div
          class="t"
          style="--index: 9"
        />
      </div>
      <div
        class="box"
        style="--index: 0"
      />
      <div
        class="box"
        style="--index: 1"
      />
      <div
        class="box"
        style="--index: 2"
      />
      <div
        class="box"
        style="--index: 3"
      />
      <div
        class="box"
        style="--index: 4"
      />
    </div>
    <div class="login-title">
      <p>{{ loginTitle }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { oidcSignIn } from '@plugins/oidc'

  @Component<Login>({
    name: 'Login'
  })
export default class Login extends Vue {
    public loginTitle: string = '正在为您检查环境'

    mounted() {
      let setTime = setTimeout(() => {
        this.oidcEventsLogin()
      }, 5000)
    }

    private oidcEventsLogin() {
      this.loginTitle = '正进入登录环境中...'
      let setTimeOutNum = setTimeout(() => {
        clearTimeout(setTimeOutNum)
        oidcSignIn()
      }, 800)
    }
}
</script>

<style lang="scss" scoped>
  .login {
    width: 100%;
    height: 100%;
    text-size-adjust: 100%;
    background: #2f3242;
    background-size: 163px;
    display: flex;
    justify-content: center;
    align-items: center;

    &-wrapper {
      width: 100px;
      height: 100px;
      background: #2c3e50;
      position: relative;
      overflow: hidden;
      border-radius: 50%;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

      .belt {
        position: absolute;
        top: 60%;
        left: 0%;
        transform: translate(-50%, -50%);
        width: 200px;
        height: 5px;
        background: #fff;
        animation: belt 2s linear infinite;
        z-index: 2;

        .t {
          width: 5px;
          height: 2px;
          background: #fff;
          position: absolute;
          top: -2px;
          left: calc(20px * var(--index));
        }
      }

      .box {
        width: 20px;
        height: 20px;
        background: #fff;
        position: absolute;
        left: 50%;
        top: -10%;
        transform: translate(-50%, -50%);
        animation: box 2s infinite;
        animation-delay: calc(1s + (1s * var(--index)));
        z-index: 1;
      }
    }

    &-title {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: calc(50% + 70px);
      color: #eeeeee;
    }

    @keyframes belt {
      to {
        left: 100%;
      }
    }
    @keyframes box {
      25% {
        top: 52%;
        animation-timing-function: cubuc-bezier(0.27, 0.37, 0.43, 0.07);
      }
      35% {
        top: 52%;
        left: 52%;
        animation-timing-function: cubic-bezier(0.33, 0.9, 0.86, 0.62);
      }
      50% {
        top: 52%;
        left: 55%;
        animation-timing-function: linear;
      }
      75% {
        top: 52%;
        left: 75%;
        animation-timing-function: linear;
      }
      100% {
        top: 52%;
        left: 120%;
        animation-timing-function: linear;
      }
    }
  }
</style>
