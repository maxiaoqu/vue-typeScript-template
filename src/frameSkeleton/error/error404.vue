<template>
  <div class="Error404">
    <error-page
      :error-title="errorTitle"
      :error-message="errorMessage"
      :error-info="errorInfo"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ErrorPage from './components/errorPage.vue'

  @Component<Error404>({
    name: 'Error404',
    components: { ErrorPage }
  })
export default class Error404 extends Vue {
    private errorTitle: string = '404'
    private errorMessage: string = '您访问的这个页面存在了'
    private errorInfo: string[] = [
      '该页面已经被删除了，但您的浏览器之前保留了此地址的记录',
      '您手动输入了一个从来没有的访问url，这样系统也是无法识别您的url',
      '如果问题依然存在，请与服务器的管理员联系'
    ]
}
</script>

<style lang="scss" scoped>
  .Error404 {
    width: 100%;
    height: 100%;
  }
</style>
