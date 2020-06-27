<template>
  <div class="ErrorPage">
    <svg
      width="380px"
      height="500px"
      viewBox="0 0 837 1045"
      version="1.1"
    >
      <g
        id="Page-1"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <path
          id="Polygon-1"
          d="M353,9 L626.664028,170 L626.664028,487 L353,642 L79.3359724,487 L79.3359724,170 L353,9 Z"
          stroke="#007FB2"
          stroke-width="6"
        />
        <path
          id="Polygon-2"
          d="M78.5,529 L147,569.186414 L147,648.311216 L78.5,687 L10,648.311216 L10,569.186414 L78.5,529 Z"
          stroke="#EF4A5B"
          stroke-width="6"
        />
        <path
          id="Polygon-3"
          d="M773,186 L827,217.538705 L827,279.636651 L773,310 L719,279.636651 L719,217.538705 L773,186 Z"
          stroke="#795D9C"
          stroke-width="6"
        />
        <path
          id="Polygon-4"
          d="M639,529 L773,607.846761 L773,763.091627 L639,839 L505,763.091627 L505,607.846761 L639,529 Z"
          stroke="#F2773F"
          stroke-width="6"
        />
        <path
          id="Polygon-5"
          d="M281,801 L383,861.025276 L383,979.21169 L281,1037 L179,979.21169 L179,861.025276 L281,801 Z"
          stroke="#36B455"
          stroke-width="6"
        />
      </g>
    </svg>
    <div class="ErrorPage-box">
      <h1 class="ErrorPage-title">
        {{ errorTitle }}
      </h1>
      <p class="ErrorPage-message">
        :( 很抱歉，{{ errorMessage }}!
      </p>
      <div class="ErrorPage-info">
        <h4>可能原因：</h4>
        <p
          v-for="(item,index) in errorInfo"
          :key="item"
        >
          {{ index+1 }}、{{ item }}
        </p>
      </div>
      <div class="ErrorPage-button">
        <div class="ErrorPage-button-group">
          <button
            class="link-button link-back-button"
            @click="backHistory"
          >
            返回上一页
          </button>
          <button
            class="link-button"
            @click="backIndexHome"
          >
            返回首页
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

  @Component<ErrorPage>({
    name: 'ErrorPage'
  })
export default class ErrorPage extends Vue {
    @Prop({ default: '' }) public errorTitle!: string;
    @Prop({ default: '' }) public errorMessage!: string
    @Prop({ default: () => [] }) public errorInfo!: string

    // 返回上一页
    private backHistory() {
      this.$router.go(-1)
    }

    // 返回首页
    private backIndexHome() {
      this.$router.replace({
        path: '/'
      })
    }
}
</script>

<style lang="scss" scoped>
  .ErrorPage {
    width: 100%;
    height: 100%;
    background-color: #2f3242;
    user-select: none;

    svg {
      position: absolute;
      top: 50%;
      left: 50%;
      margin-top: -250px;
      margin-left: -400px
    }

    .ErrorPage-box {
      height: 200px;
      width: 380px;
      position: absolute;
      top: 36%;
      left: 50%;
      margin-top: -100px;
      margin-left: 50px;
      color: #fff;
      font-family: Roboto;
      font-weight: 300;

      .ErrorPage {
        &-title {
          font-size: 60px;
          line-height: 46px;
          margin-bottom: 40px
        }

        &-message {
          font-size: 20px;
          font-weight: 600;
        }

        &-info {
          padding-top: 20px;
          text-align: left;
          color: #F2773F;

          h4 {
            font-size: 18px;
          }

          p {
            font-size: 16px;
            padding-left: 40px;
            font-weight: 400;
          }
        }

        &-button {
          &-group {
            margin-top: 40px;

            button {
              background: #007FB2;
              padding: 8px 25px;
              border-radius: 4px;
              color: #fff;
              font-weight: 700;
              font-size: 14px;
              transition: all .3s linear;
              border: none;
              cursor: pointer;
              text-decoration: none;
              margin-right: 10px;

              &:hover {
                background: #5a5c6c;
                color: #fff
              }
            }
          }
        }
      }
    }

    #Polygon-1, #Polygon-2, #Polygon-3, #Polygon-4, #Polygon-5 {
      -webkit-animation: float 1s infinite ease-in-out alternate;
      animation: float 1s infinite ease-in-out alternate
    }

    #Polygon-2 {
      -webkit-animation-delay: .2s;
      animation-delay: .2s
    }

    #Polygon-3 {
      -webkit-animation-delay: .4s;
      animation-delay: .4s
    }

    #Polygon-4 {
      -webkit-animation-delay: .6s;
      animation-delay: .6s
    }

    #Polygon-5 {
      -webkit-animation-delay: .8s;
      animation-delay: .8s
    }

    @-webkit-keyframes float {
      100% {
        -webkit-transform: translateY(20px);
        transform: translateY(20px)
      }
    }

    @keyframes float {
      100% {
        -webkit-transform: translateY(20px);
        transform: translateY(20px)
      }
    }

    @media (max-width: 450px) {
      svg {
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -250px;
        margin-left: -190px
      }

      .message-box {
        top: 50%;
        left: 50%;
        margin-top: -100px;
        margin-left: -190px;
        text-align: center
      }
    }
  }
</style>
