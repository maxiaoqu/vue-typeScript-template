<template>
  <div class="Error401">
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

  @Component<Error401>({
    name: 'Error401',
    components: { ErrorPage }
  })
export default class Error401 extends Vue {
    private errorTitle: string = '401'
    private errorMessage: string = '您访问的页面未授权'
    private errorInfo: string[] = [
      '请与Web服务器的管理员联系，以确认您是否具有访问所请求资源的权限',
      '请记录试图访问的完整地址，并与Web服务器的管理员联系以确认您是否具有访问所请求资源的权限'
    ]
}
</script>

<style lang="scss" scoped>
  .Error401 {
    width: 100%;
    height: 100%;
  }
</style>
