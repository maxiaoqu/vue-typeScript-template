<!--
说明：两个页面调取相同的方法、变量，但页面布局不同，也使用Mixins方式来解决---页面1(无自己独立的点击事件、交互事件)
-->
<template>
  <div class="UseSameMethodsNo1">
    页面1方式，横屏布局
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import SameMethods from '@/viewsTest/typescript/sameMethods'

  @Component<UseSameMethodsNo1>({
    name: 'UseSameMethodsNo1',
    mixins: [SameMethods]
  })
export default class UseSameMethodsNo1 extends Vue {
  /* 这个可以写不同逻辑的代码 */
}
</script>

<style lang="scss">
  .UseSameMethodsNo1 {
    width: 100%;
    height: 100%;
  }
</style>
