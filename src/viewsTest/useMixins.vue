<!--
说明：使用Mixins方式的案例页面
-->
<template>
  <div
    ref="UseMixins"
    class="UseMixins"
  />
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'
import MyMixins from '@/viewsTest/typescript/mixins'

  @Component<UseMixins>({
    name: 'UseMixins'
  })
export default class UseMixins extends Mixins(MyMixins) {
  mounted() {
    console.log(1111, this.testNameArr, this.testPropData, this.testPropData2)
    this.initEcharts2()
  }
}
</script>

<style lang="scss" scoped>
  .UseMixins {
    width: 100%;
    height: 100%;
  }
</style>
