<!--
说明：使用请求方式（axios）的案例页面
-->
<template>
  <div class="UseRequest" />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

  @Component<UseRequest>({
    name: 'UseRequest'
  })
export default class UseRequest extends Vue {

}
</script>

<style lang="scss">
  .UseRequest {
    width: 100%;
    height: 100%;
  }
</style>
