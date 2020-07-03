<!--
说明：使用传参给接参组件的案例页面
-->
<template>
  <div class="UseRequest">
    传参给接参组件
    <my-components-props
      :title="title"
      :is-show="isShow"
      :data-arr="dataArr"
      :data-obj="dataObj"
      @propEmeit="propEmeit($event)"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import MyComponentsProps from '@/viewsTest/components/myComponents-props.vue'

  @Component<UseRequest>({
    name: 'UseRequest',
    components: { MyComponentsProps }
  })
export default class UseRequest extends Vue {
    private title: string = '传参-标题'
    private isShow: boolean = true
    private dataArr: any[] = ['传参-数组1', '传参-数组2', '传参-数组3', '传参-数组4']
    private dataObj: object = {
      name: '传参-对象',
      class: '传参-对象2'
    }

    private propEmeit(num: number) {
      console.log('子组件传过来的参数：', num)
    }
}
</script>

<style lang="scss">
  .UseRequest {
    width: 100%;
    height: 100%;
  }
</style>
