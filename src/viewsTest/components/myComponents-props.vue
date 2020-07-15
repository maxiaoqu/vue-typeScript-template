<!--
说明：接参组件书写的案例页面
-->
<template>
  <div
    class="MyComponentsProps"
    @click="propEmeit"
  >
    我是接参组件
    <h4>{{ title }}</h4>
    <p v-if="isShow">
      是否显示
    </p>
    <p
      v-for="(item,index) in dataArr"
      :key="index"
    >
      {{ item }}
    </p>
    <span>{{ dataObj.name }} --- {{ dataObj.class }}</span>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

  @Component<MyComponentsProps>({
    name: 'MyComponentsProps'
  })
export default class MyComponentsProps extends Vue {
    @Prop({ default: '' }) public title!: string
    @Prop({ default: false }) public isShow!: boolean
    @Prop({ default: () => [] }) public dataArr!: any[]
    @Prop({
      default: () => {
      }
    }) public dataObj!: any

    private propEmeit() {
      this.$emit('propEmeit', 999)
    }
}
</script>

<style lang="scss">
  .MyComponentsProps {
    width: 100%;
    height: 100%;
  }
</style>
