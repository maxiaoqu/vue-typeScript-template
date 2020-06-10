<!--
说明：两个页面调取相同的方法、变量，但页面布局不同，也使用Mixins方式来解决---页面2(有自己的点击事件、交互事件)
-->
<template>
  <div
    class="UseSameMethodsNo2"
    @click="no2Cliick"
  >
    页面2方式，竖屏布局，且页面2有自己的点击事件、交互事件
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import SameMethods from '@/viewsTest/typescript/sameMethods'

  @Component<UseSameMethodsNo2>({
    name: 'UseSameMethodsNo2',
    mixins: [SameMethods]
  })
export default class UseSameMethodsNo2 extends Vue {
  /* 这个可以写不同逻辑的代码 */

  // 点击事件的方法
  private no2Cliick() {
    console.log('点击事件的逻辑')
  }
}
</script>

<style lang="scss">
  .UseSameMethodsNo2 {
    width: 100%;
    height: 100%;
  }
</style>
