<template>
  <div class="layout index">
    <h4 style="color: aqua;">
      【大屏端】这里是公用的头部
    </h4>
    <main class="layout-box">
      <router-view />
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

  @Component<Index>({
    name: 'Index'
  })
export default class Index extends Vue {

}
</script>
