<!--
说明：使用组件--页面1
-->
<template>
  <div class="UseComponents">
    使用组件--页面1
    <MyComponentsNo1 />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import MyComponentsNo1 from '@/viewsTest/components/myComponents.vue'

  @Component<UseComponents>({
    name: 'UseComponents',
    components: {
      MyComponentsNo1
    }
  })
export default class UseComponents extends Vue {

}
</script>

<style lang="scss">
  .UseComponents {
    width: 100%;
    height: 100%;
  }
</style>
