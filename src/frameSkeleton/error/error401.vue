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
import ErrorPage from '@/frameSkeleton/error/components/errorPage.vue'

  @Component<Error401>({
    name: 'Error401',
    components: { ErrorPage }
  })
export default class Error401 extends Vue {
    private errorTitle: string = '401'
    private errorMessage: string = '你访问的页面展示有问题'
    private errorInfo: string[] = [
      '你访问的页面展示有问题',
      '你访问的页面展示有问题你访问的页'
    ]
}
</script>

<style lang="scss" scoped>
  .Error401 {
    width: 100%;
    height: 100%;
  }
</style>
