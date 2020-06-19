<template>
  <div class="home">
    <div>Home - {{ isRouteTitle }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

  @Component<Home>({
    name: 'Home'
  })
export default class Home extends Vue {
  get isRouteTitle() {
    return this.$route.meta.title
  }
}
</script>

<style lang="scss">
  .home {
    text-align: center;

    button {
      font-size: 16px;
      color: #ff6700;
    }
  }
</style>
