<template>
  <div class="OidcCallback" />
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

<style lang="scss" scoped>
  .OidcCallback {
    background: #ff7e5f;
    background: -webkit-linear-gradient(to right, #feb47b, #ff7e5f);
    background: linear-gradient(to right, #feb47b, #ff7e5f);
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }
</style>
