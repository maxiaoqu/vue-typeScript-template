<template>
  <div class="layout test">
    <div class="layout-left">
      <router-list />
    </div>
    <div class="layout-right">
      <h4>
        【测试页面】这里是公用部分
      </h4>
      <main class="layout-box">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import RouterList from '@/frameSkeleton/layout/components/routerList.vue'

  @Component<Test>({
    name: 'Test',
    components: { RouterList }
  })
export default class Test extends Vue {

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
        color: #ff6700;
        border-bottom: 1px solid #ff6700;
      }
    }
  }
</style>
