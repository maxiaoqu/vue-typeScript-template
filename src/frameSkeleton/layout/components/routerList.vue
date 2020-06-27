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
import { baseRoutes, indexRoutes, homeRoutes, childRoutes, testRoutes } from '@/router/routerPath'

  @Component<RouterList>({
    name: 'RouterList'
  })
export default class RouterList extends Vue {
    private routerList: any[] = []

    mounted() {
      this.getRouterList()
    }

    private getRouterList() {
      let routerList = baseRoutes.concat(indexRoutes).concat(homeRoutes).concat(childRoutes).concat(testRoutes)
      this.routerList = routerList
    }

    private gotoPage(router: any) {
      console.log(12312, router.name, router)
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
