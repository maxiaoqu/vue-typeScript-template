<template>
  <div class="admin">
    <div>Admin - {{ isAdmin }}</div>
    <button @click="returnHome('login')">
      返回登录页
    </button>
    <button @click="returnHome('Home1')">
      返回大屏端2
    </button>
    <button @click="returnHome('Home2')">
      返回后台管理系统1
    </button>
    <button @click="returnHome('Home3')">
      返回其他系统2
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'Admin'
})
export default class Admin extends Vue {
  get isAdmin() {
    return this.$store.state.isAdmin
  }

  returnHome(name) {
    this.$router.push({
      name: name
    })
  }
}
</script>

<style lang="scss">
  .admin {
    text-align: center;
    padding-top: 200px;
    button{
      font-size: 30px;
    }
  }
</style>
