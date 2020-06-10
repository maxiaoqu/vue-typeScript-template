<!--
说明：组件书写的案例页面
-->
<template>
  <div class="MyComponentsNo1">
    我是组件1
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

  @Component<MyComponentsNo1>({
    name: 'MyComponentsNo1'
  })
export default class MyComponentsNo1 extends Vue {

}
</script>

<style lang="scss">
  .MyComponentsNo1 {
    width: 100%;
    height: 100%;
  }
</style>
