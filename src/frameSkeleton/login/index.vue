<template>
  <div class="login">
    login
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

  @Component<Login>({
    name: 'Login'
  })
export default class Login extends Vue {

}
</script>

<style lang="scss" scoped>
  .login {
    width: 100%;
    height: 100%;

  }
</style>
