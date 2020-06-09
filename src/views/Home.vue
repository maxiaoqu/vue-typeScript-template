<template>
  <div class="home">
    <div>Hello typeScript</div>
    <button @click="logoutSys">
      退出登录
    </button>
    <button
      type="primary"
      @click="openAdmin('register')"
    >
      打开注册页
    </button>
    <button
      type="primary"
      @click="openAdmin('Admin1')"
    >
      打开大屏端1
    </button>
    <button
      type="primary"
      @click="openAdmin('Admin2')"
    >
      打开后台管理系统1
    </button>
    <button
      type="primary"
      @click="openAdmin('Admin3')"
    >
      打开其他系统1
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import OidcService from '@/plugin/oidc'

  @Component<Home>({
    name: 'Home'
  })
export default class Home extends Vue {
  get isAdmin() {
    return this.$store.state.isAdmin
  }

  set isAdmin(val: Boolean) {
    this.$store.commit('setIsAdmin', val)
  }

  openAdmin(name) {
    this.$router.push({
      name: name
    })
  }

  private logoutSys() {
    let authService = new OidcService()
    authService.oidcSignOut()
  }

  mounted() {
    console.log(90909)
  }
}
</script>

<style lang="scss">
  .home {
    text-align: center;
    padding-top: 100px;

    button {
      font-size: 16px;
      color: #ff6700;
    }
  }
</style>
