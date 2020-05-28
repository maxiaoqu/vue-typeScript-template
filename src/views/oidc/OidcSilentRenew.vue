<template>
  <h1>Oidc---其他操作</h1>
</template>
<script>
import { vuexOidcProcessSilentSignInCallback } from 'vuex-oidc'
import oidcSettings from '@/environment/oidcSettings'

vuexOidcProcessSilentSignInCallback(oidcSettings)
export default {}
</script>
