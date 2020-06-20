<template>
  <div class="home">
    <div>Home - {{ isRouteTitle }}</div>
    <buttom
      v-if="isRouteTitle === '首页'"
      @click="gotoHome"
    >
      进入系统
    </buttom>
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

  private gotoHome() {
    this.$router.push({
      name: 'indexRoutes'
    })
  }
}
</script>

<style lang="scss">
  .home {
    text-align: center;

    button {
      font-size: 16px;
      padding: 10px;
      color: #ff6700;
      border: 1px solid #2db7f5;
    }
  }
</style>
