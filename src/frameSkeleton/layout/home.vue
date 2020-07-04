<template>
  <div class="layout home">
    <div class="layout-left">
      <router-list />
    </div>
    <div class="layout-right">
      <h4>
        【后台管理系统】这里是公用菜单、头部
      </h4>
      <main class="layout-box">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import RouterList from './components/routerList.vue'

  @Component<Home>({
    name: 'Home',
    components: { RouterList }
  })
export default class Home extends Vue {

}
</script>

<style lang="scss" scoped>
  .layout {
    width: 100%;
    height: 100%;
    display: flex;

    &-left {
      width: 320px;
      height: 100%;
    }

    &-right {
      flex: 1;
      height: 100%;
      min-width: 0;

      h4 {
        font-size: 20px;
        line-height: 60px;
        color: blueviolet;
        border-bottom: 1px solid blueviolet;
      }
    }
  }
</style>
