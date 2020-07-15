<!--
说明：组件书写的案例页面
-->
<template>
  <div class="MyComponents">
    我是组件1
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

  @Component<MyComponents>({
    name: 'MyComponents'
  })
export default class MyComponents extends Vue {

}
</script>

<style lang="scss">
  .MyComponents {
    width: 100%;
    height: 100%;
  }
</style>
