<template>
  <div>OidcCallback</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import oidcEvents from '@/plugin/oidc/oidcEvents'

  @Component({
    name: 'OidcCallback'
  })
export default class OidcCallback extends Vue {
  mounted() {
    oidcEvents.signinRedirectCallback()
      .then(function(res) {
        localStorage.setItem('token', res.id_token)
        if (res.id_token) {
          window.location.href = '/'
        }
      })
      .catch(function(err) {
        console.error(err)
      })
  }
}
</script>
