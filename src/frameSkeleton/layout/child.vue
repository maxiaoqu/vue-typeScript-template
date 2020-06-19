<template>
  <div class="layout child">
    <div class="layout-left">
      <router-list />
    </div>
    <div class="layout-right">
      <h4>
        【其他系统】这里是公用部分
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

  @Component<Child>({
    name: 'Child',
    components: { RouterList }
  })
export default class Child extends Vue {

}
</script>

<style lang="scss" scoped>
  .layout {
    width: 100%;
    height: 100%;
    display: flex;

    &-left {
      width: 460px;
      height: 100%;
    }

    &-right {
      flex: 1;
      height: 100%;
      min-width: 0;

      h4 {
        line-height: 80px;
        color: #55a532;
        border-bottom: 1px solid #55a532;
      }
    }
  }
</style>
