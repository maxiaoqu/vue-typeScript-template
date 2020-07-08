<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { oidcGetUserInfo } from '@plugins/oidc'

  @Component<App>({
    name: 'App'
  })
export default class App extends Vue {
  mounted() {
    this.oidcGetUserInfo()
  }

  private oidcGetUserInfo() {
    oidcGetUserInfo()
  }
}
</script>
