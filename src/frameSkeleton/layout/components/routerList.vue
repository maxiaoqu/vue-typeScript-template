<template>
  <ul class="RouterList">
    <li
      v-for="(item,index) in routerList"
      :key="index"
      class="RouterList-item"
      :title="item.meta.title"
    >
      <p v-if="item.children">
        {{ item.meta.title }}
      </p>
      <p
        v-else
        @click="gotoPage(item)"
      >
        {{ item.meta.title }}
      </p>
      <ul
        v-if="item.children"
        class="childrenList"
      >
        <li
          v-for="(child,cidex) in item.children"
          :key="cidex"
          class="childrenList-item"
          :title="child.meta.title"
        >
          <p @click="gotoPage(child)">
            {{ child.meta.title }}
          </p>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { UserModule } from '@/store/modules/user'

  @Component<RouterList>({
    name: 'RouterList'
  })
export default class RouterList extends Vue {
    private routerList: any[] = []

    mounted() {
      let _this = this
      this.$nextTick(() => {
        _this.getRouterList()
      })
    }

    private getRouterList() {
      let routerList = [{
        path: '/',
        name: '_index',
        redirect: '/index',
        meta: {
          icon: 'icon-name',
          hidden: true,
          title: '首页'
        }
      }]
      let permissionRouter = UserModule.userPermissionRouter
      if (permissionRouter) {
        routerList = routerList.concat(permissionRouter)
      }
      this.routerList = routerList
    }

    private gotoPage(router: any) {
      this.$router.push({
        name: router.name
      })
    }
}
</script>

<style lang="scss" scoped>
  .RouterList {
    width: 100%;
    height: 100%;
    padding: 10px 5px;
    border-right: 1px solid #eeeeee;
    cursor: pointer;

    &-item {
      display: block;
      padding: 0 10px 0 40px;
      line-height: 60px;
      text-align: left;
      border-bottom: 1px dotted #2db7f5;

      .childrenList {
        margin-left: 40px;

        &-item {
          line-height: 60px;

          &:last-child {
            border: none;
          }
        }
      }
    }

    p {
      width: 100%;
      line-height: 40px;
      word-break: keep-all;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
</style>
