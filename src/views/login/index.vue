<template>
  <div>Login</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import oidcEvents from '@/plugin/oidc/oidcEvents'

  @Component({
    name: 'Login'
  })
export default class Login extends Vue {
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
