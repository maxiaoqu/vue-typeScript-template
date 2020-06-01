<template>
  <div class="Error404">
    404
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

  @Component({
    name: 'Error404'
  })
export default class Error404 extends Vue {

}
</script>

<style lang="scss" scoped>
  .Error404 {
    width: 100%;
    height: 100%;
  }
</style>
