<template>
  <div class="home">
    <div>Hello typeScript</div>
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

@Component({
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
}
</script>

<style lang="scss">
  .home {
    text-align: center;
    padding-top: 200px;
  }
</style>
