<template>
  <div class="Error403">
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

  @Component<Error403>({
    name: 'Error403',
    components: { ErrorPage }
  })
export default class Error403 extends Vue {
    private errorTitle: string = '403'
    private errorMessage: string = '您没有访问该页面的权限'
    private errorInfo: string[] = [
      '请确认浏览器是否支持 128 位 SSL安全性。如果支持，就与 Web服务器的管理员联系，并报告问题',
      '请与站点管理员联系以建立用户证书权限。如果必要，也可以更改用户证书并重试',
      '请与Web服务器的管理员联系以获取有效的用户证书',
      '如果问题依然存在，请与 Web 服务器的管理员联系'
    ]
}
</script>

<style lang="scss" scoped>
  .Error403 {
    width: 100%;
    height: 100%;
  }
</style>
