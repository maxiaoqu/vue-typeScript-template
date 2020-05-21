<template>
  <div class="admin">
    <div>Admin - {{ isAdmin }}</div>
    <button @click="returnHome">返回首页</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'Admin'
})
export default class Admin extends Vue {
  get isAdmin () {
    return this.$store.state.isAdmin
  }

  returnHome () {
    this.$router.push('/')
  }
}
</script>

<style lang="scss">
.admin {
  text-align: center;
  padding-top: 200px;
}
</style>
