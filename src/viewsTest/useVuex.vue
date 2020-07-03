<!--
说明：Vuex使用案例页面
-->
<template>
  <div class="useVuex">
    Vuex使用
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { AppModule } from '@/store/modules/app'

  @Component<useVuex>({
    name: 'useVuex'
  })
export default class useVuex extends Vue {
  mounted() {
    console.log('状态管理', AppModule)
    console.log('状态管理-size', AppModule.size)
    console.log('状态管理--getSize', AppModule.getSize)
  }
}
</script>

<style lang="scss">
  .useVuex {
    width: 100%;
    height: 100%;
  }
</style>
