<!--
说明：使用请求方式（axios）的案例页面
-->
<template>
  <div class="UseRequest">
    使用请求方式（axios）的案例页面<br>
    <button @click="todoRequest1">
      组件内请求
    </button>
    <button @click="todoRequest2">
      调取公共方法请求
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
// 组件内请求
import { getRequestData } from '@/plugin/axios'
// 调取公共方法请求
import { getUserInfo } from '@/viewsTest/typescript/request'

  @Component<UseRequest>({
    name: 'UseRequest'
  })
export default class UseRequest extends Vue {
  // 组件内请求
  private todoRequest1() {
    let params = {}
    getRequestData('/dataServer/abc/cba', 'get', params).then(res => {
      console.info('返回的数据:', res)
    }).catch(err => {
      console.info('错误的原因:', err)
    })
  }

  // 调取公共方法请求
  private todoRequest2() {
    let params = {}
    getUserInfo(params).then(res => {
      console.info('返回的数据:', res)
    }).catch(err => {
      console.info('错误的原因:', err)
    })
  }
}
</script>

<style lang="scss">
  .UseRequest {
    width: 100%;
    height: 100%;
  }
</style>
