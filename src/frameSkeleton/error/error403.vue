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
import ErrorPage from '@/frameSkeleton/error/components/errorPage.vue'

  @Component<Error403>({
    name: 'Error403',
    components: { ErrorPage }
  })
export default class Error403 extends Vue {
    private errorTitle: string = '403'
    private errorMessage: string = '你没有访问该页面的权限'
    private errorInfo: string[] = [
      '请核对您登录的账号',
      '请联系管理员帮你增加该页面权限'
    ]
}
</script>

<style lang="scss" scoped>
  .Error403 {
    width: 100%;
    height: 100%;
  }
</style>
