<template>
  <div>OidcCallback</div>
</template>

<script lang="ts">

import Oidc from 'oidc-client'
import { Component, Vue } from 'vue-property-decorator'
import oidcEvents from '@/plugin/oidc/oidcEvents'

  @Component({
    name: 'OidcCallback'
  })
export default class extends Vue {
  // export default class OidcCallback extends Vue {
  mounted() {
    console.log(111222, oidcEvents)
    oidcEvents.signinRedirect().then(res => {
      console.log(111, res)
    }).catch(err => {
      console.log(222, err)
    })
  }
}
</script>
