import { Component, Prop, Vue } from 'vue-property-decorator'
// 声明全局方法
declare module 'vue/types/vue' {
  interface Vue {
    testNameArr: string[],
    initEcharts(): void,
    initEcharts2(): void
  }
}
/**
 * mixins
 */
@Component<MyMixins>({
  name: 'MyMixins'
})
export default class MyMixins extends Vue {
  /* props */
  @Prop(Boolean) public testPropData: boolean
  @Prop({ type: String, default: '' }) public testPropData2!: string
  /* data() */
  // 注意：只能使用public定义，不能使用protected、定义，否则组件内收不到
  testNameArr: string[] = []

  /*
  类似：vue的生命周期
  */
  created() {
    this.initEcharts()
  }

  /*
  类似：methods
  注意：在本脚本调用的使用private，在组件内调用的，使用public
  */
  initEcharts(): void {
    this.testNameArr = ['1', '2']
  }

  initEcharts2(): void {
    console.log('methods', this.$refs.UseMixins)
  }
}
