<template>
  <div class="layout child">
    <h4 style="color: #ff6700;">
      【其他系统】这里是公用部分
    </h4>
    <main class="layout-box">
      <router-view />
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

  @Component<Child>({
    name: 'Child'
  })
export default class Child extends Vue {

}
</script>
