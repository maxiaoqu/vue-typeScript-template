<template>
  <div>OidcCallback</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import OidcService from '@/plugin/oidc'

  @Component<OidcCallback>({
    name: 'OidcCallback'
  })
export default class OidcCallback extends Vue {
  mounted() {
    let authService = new OidcService()
    authService.oidcSigninRedirect()
  }
}
</script>
