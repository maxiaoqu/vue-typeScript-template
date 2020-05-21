<template>
  <div class="home">
    <div>Hello typeScript</div>
    <button type="primary"  @click="openAdmin">打开后台</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'Home'
})
export default class Home extends Vue {
  get isAdmin () {
    return this.$store.state.isAdmin
  }
  set isAdmin (val: Boolean) {
    this.$store.commit('setIsAdmin', val)
  }

  openAdmin () {
    this.$router.push('/admin')
  }
}
</script>

<style lang="scss">
.home {
  text-align: center;
  padding-top: 200px;
}
</style>
