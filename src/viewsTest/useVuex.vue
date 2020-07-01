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

  @Component<useVuex>({
    name: 'useVuex'
  })
export default class useVuex extends Vue {

}
</script>

<style lang="scss">
  .useVuex {
    width: 100%;
    height: 100%;
  }
</style>
