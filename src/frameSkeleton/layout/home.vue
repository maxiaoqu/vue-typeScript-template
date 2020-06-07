<template>
  <div class="layout home">
    <h4 style="color: blueviolet;">
      【后台管理系统】这里是公用菜单、头部
    </h4>
    <main class="layout-box">
      <router-view />
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

  @Component({
    name: 'Home'
  })
export default class Home extends Vue {

}
</script>
