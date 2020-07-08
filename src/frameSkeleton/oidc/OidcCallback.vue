<template>
  <div class="OidcCallback">
    <div class="scene">
      <svg
        id="dc-spinner"
        version="1.1"
        x="240px"
        y="240px"
        width="240"
        height="240"
        viewBox="0 0 240 240"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMinYMin meet"
      >
        <text
          x="60"
          y="120"
          font-family="Monaco"
          font-size="24px"
          style="letter-spacing:0.6"
          fill="grey"
        >
          正在进入系统...
          <animate
            attributeName="opacity"
            values="0;1;0"
            dur="1.8s"
            repeatCount="indefinite"
          />
        </text>
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { oidcSigninRedirect } from '@plugins/oidc'

  @Component<OidcCallback>({
    name: 'OidcCallback'
  })
export default class OidcCallback extends Vue {
  mounted() {
    oidcSigninRedirect()
  }
}
</script>

<style lang="scss" scoped>
  .OidcCallback {
    width: 100%;
    height: 100%;
    text-size-adjust: 100%;
    background: #2f3242;
    background-size: 163px;

    .scene {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        width: 240px;
        height: 240px;
      }
    }
  }
</style>
