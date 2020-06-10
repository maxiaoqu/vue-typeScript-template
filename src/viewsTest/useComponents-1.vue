<!--
说明：使用组件--页面1
-->
<template>
  <div class="UseComponentsNo1">
    <MyComponentsNo1 />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import MyComponentsNo1 from '@/viewsTest/components/myComponents-1.vue'

  @Component<UseComponentsNo1>({
    name: 'UseComponentsNo1',
    components: {
      MyComponentsNo1
    }
  })
export default class UseComponentsNo1 extends Vue {

}
</script>

<style lang="scss">
  .UseComponentsNo1 {
    width: 100%;
    height: 100%;
  }
</style>
