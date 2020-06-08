<template>
  <div class="login">
    <div class="login-title">
      <h4>正在为您</h4>
      <h4>检查环境</h4>
    </div>
    <div class="login-left">
      <div class="cat">
        <div class="ears1" />
        <div class="head1">
          <div class="eyes1" />
          <div class="nose1" />
        </div>
        <div class="body1">
          <div class="left-paw1" />
          <div class="right-paw1" />
        </div>
        <div class="tail1" />
        <div class="PRlaptop">
          <div class="PRscreen" />
          <div class="PRkeyboard" />
        </div>
      </div>
    </div>
    <div class="login-right">
      <div class="dog">
        <div class="ears2" />
        <div class="head2">
          <div class="eyes2" />
          <div class="nose2" />
        </div>
        <div class="body2">
          <div class="left-paw2" />
          <div class="right-paw2" />
        </div>
        <div class="tail2" />
        <div class="ORlaptop">
          <div class="ORscreen" />
          <div class="ORkeyboard" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import oidcEvents from '@/plugin/oidc/oidcEvents'

  @Component<Login>({
    name: 'Login'
  })
export default class Login extends Vue {
  mounted() {
    oidcEvents.signinRedirect().then(res => {
      console.log(111, res)
    }).catch(err => {
      console.log(222, err)
    })
  }
}
</script>

<style lang="scss" scoped>
  .login {
    margin: 0;
    padding: 0;

    &-title {
      position: absolute;
      top: 25%;
      left: 0;
      right: 0;
      text-align: center;
      z-index: 99;

      h4 {
        display: inline-block;
        font-weight: 500;
        font-size: 50px;
        color: #20314E;

        &:last-child {
          color: #FFCA95;
        }
      }
    }

    &-left {
      position: absolute;
      height: 100%;
      width: 50%;
      background: #FFCA95;

      .cat {
        height: 182px;
        width: 200px;
        position: absolute;
        top: 50%;
        right: 145px;
        transform: translate(0, -50%);

        .ears1 {
          height: 0;
          width: 0;
          position: relative;
          left: 90px;
          border-bottom: 27px solid #475881;
          border-left: 10px solid transparent;
          border-right: 23px solid transparent;

          &::before {
            display: block;
            content: "";
            height: 0;
            width: 0;
            position: relative;
            left: 24px;
            border-bottom: 27px solid #475881;
            border-left: 10px solid transparent;
            border-right: 23px solid transparent;
          }

          &::before {
            display: block;
            content: "";
            height: 0;
            width: 0;
            position: relative;
            left: 24px;
            border-bottom: 27px solid #475881;
            border-left: 10px solid transparent;
            border-right: 23px solid transparent;
          }
        }

        .head1 {
          height: 74px;
          width: 135px;
          position: relative;
          left: 65px;
          z-index: 2;
          box-shadow: -8px 0 0 #475881;
          border-radius: 37px;
          background: #7C85AB;

          .eyes1 {
            height: 12px;
            width: 12px;
            position: relative;
            top: 37px;
            left: 64px;
            border-radius: 100%;
            animation: 9s catRead infinite;
            background: black;

            &::before {
              display: block;
              content: "";
              height: 12px;
              width: 12px;
              position: relative;
              left: 18px;
              border-radius: 100%;
              background: black;
            }
          }

          .nose1 {
            height: 22px;
            width: 22px;
            position: relative;
            top: 40px;
            left: 60px;
            border-radius: 20px;
            background: #FBF1D8;

            &::before {
              display: block;
              content: "";
              height: 22px;
              width: 22px;
              position: relative;
              left: 22px;
              border-radius: 20px;
              background: #FBF1D8;
            }

            &::after {
              display: block;
              content: "";
              height: 0;
              width: 0;
              position: relative;
              top: -22px;
              left: 12px;
              border-radius: 10px;
              border-top: 10px solid #FFA5C0;
              border-left: 10px solid transparent;
              border-right: 10px solid transparent;
            }
          }
        }

        .body1 {
          height: 110px;
          width: 200px;
          position: relative;
          top: -30px;
          z-index: 1;
          border-radius: 55px;
          background: #7C85AB;

          .left-paw1 {
            height: 25px;
            width: 37px;
            position: relative;
            top: 70px;
            left: 95px;
            border-radius: 12px;
            animation: 9s catLeftType infinite;
            background: #FBF1D8;
          }

          .right-paw1 {
            height: 25px;
            width: 37px;
            position: relative;
            top: 45px;
            left: 142px;
            border-radius: 12px;
            animation: 9s catRightType infinite;
            background: #FBF1D8;
          }
        }

        .tail1 {
          height: 24px;
          width: 80px;
          position: relative;
          top: -54px;
          left: -31px;
          z-index: 0;
          border-radius: 17px 0 0 17px;
          background: #475881;
        }

        .PRlaptop {
          position: relative;
          top: -151px;
          left: 170px;
          z-index: 2;

          .PRscreen {
            height: 85px;
            width: 130px;
            border-radius: 8px;
            transform: skew(-18deg);
            background: #20314E;

            &::before {
              display: block;
              content: "";
              height: 17px;
              width: 10px;
              position: relative;
              top: 38px;
              left: 56px;
              border-radius: 6px;
              background: #475881;
            }

            &::after {
              display: block;
              content: "";
              height: 17px;
              width: 10px;
              position: relative;
              top: 21px;
              left: 70px;
              border-radius: 6px;
              background: #475881;
            }
          }

          .PRkeyboard {
            height: 12px;
            width: 132px;
            position: relative;
            left: -14px;
            border-radius: 0 6px 6px 0;
            background: #475881;

            &::before {
              display: block;
              content: "";
              height: 12px;
              width: 72px;
              position: relative;
              left: -68px;
              border-radius: 6px;
              background: #20314E;
            }
          }
        }
      }
    }

    &-right {
      position: absolute;
      left: 50%;
      height: 100%;
      width: 50%;
      background: #20314E;

      .dog {
        height: 182px;
        position: absolute;
        top: 50%;
        left: 145px;
        transform: translate(0, -50%);

        .ears2 {
          height: 0;
          width: 0;
          position: relative;
          left: 30px;
          border-bottom: 27px solid #F07E42;
          border-left: 23px solid transparent;
          border-right: 10px solid transparent;

          &::before {
            display: block;
            content: "";
            height: 0;
            width: 0;
            position: relative;
            left: 33px;
            border-bottom: 27px solid #F07E42;
            border-left: 10px solid transparent;
            border-right: 23px solid transparent;
          }
        }

        .head2 {
          height: 74px;
          width: 140px;
          position: relative;
          z-index: 2;
          box-shadow: 8px 0 0 #F07E42;
          border-radius: 35px;
          background: #FFA852;

          .eyes2 {
            height: 12px;
            width: 12px;
            position: relative;
            top: 37px;
            left: 50px;
            border-radius: 100%;
            animation: 9s dogRead infinite;
            background: black;

            &::before {
              display: block;
              content: "";
              height: 12px;
              width: 12px;
              position: relative;
              left: 18px;
              border-radius: 100%;
              background: black;
            }
          }

          .nose2 {
            height: 30px;
            width: 45px;
            position: relative;
            top: 40px;
            left: 37px;
            border-radius: 20px;
            background: #FBF1D8;

            &::before {
              display: block;
              content: "";
              height: 0;
              width: 0;
              position: relative;
              top: 3px;
              left: 9px;
              border-radius: 10px;
              border-top: 10px solid black;
              border-left: 10px solid transparent;
              border-right: 10px solid transparent;
            }
          }
        }

        .body2 {
          height: 110px;
          width: 200px;
          position: relative;
          top: -30px;
          z-index: 1;
          border-radius: 55px;
          background: #FFA852;

          .left-paw2 {
            height: 25px;
            width: 37px;
            position: relative;
            top: 70px;
            left: 15px;
            border-radius: 12px;
            animation: 9s dogLeftType infinite;
            background: #FBF1D8;
          }

          .right-paw2 {
            height: 25px;
            width: 37px;
            position: relative;
            top: 45px;
            left: 60px;
            border-radius: 12px;
            animation: 9s dogRightType infinite;
            background: #FBF1D8;
          }
        }

        .tail2 {
          height: 34px;
          width: 70px;
          position: relative;
          top: -64px;
          left: 150px;
          z-index: 0;
          border-radius: 0 17px 17px 0;
          background: #F07E42;
        }

        .ORlaptop {
          position: relative;
          top: -161px;
          left: -103px;
          z-index: 2;

          .ORscreen {
            height: 85px;
            width: 130px;
            border-radius: 8px;
            transform: skew(18deg);
            background: #FFCA95;

            &::before {
              display: block;
              content: "";
              height: 17px;
              width: 10px;
              position: relative;
              top: 38px;
              left: 50px;
              border-radius: 6px;
              background: #F07E42;
            }

            &::after {
              display: block;
              content: "";
              height: 17px;
              width: 10px;
              position: relative;
              top: 21px;
              left: 64px;
              border-radius: 6px;
              background: #F07E42;
            }
          }

          .ORkeyboard {
            height: 12px;
            width: 132px;
            position: relative;
            left: 14px;
            border-radius: 6px 0 0 6px;
            background: #F07E42;

            &::before {
              display: block;
              content: "";
              height: 12px;
              width: 72px;
              position: relative;
              left: 128px;
              border-radius: 6px;
              background: #FFCA95;
            }
          }
        }
      }
    }

    @keyframes catLeftType {
      2% {
        transform: translateY(-8px);
      }
      6% {
        transform: none;
      }
      8% {
        transform: translateY(-8px);
      }
      10% {
        transform: none;
      }
      14% {
        transform: translateY(-8px);
      }
      16% {
        transform: none;
      }
      18% {
        transform: translateY(-8px);
      }
      20% {
        transform: none;
      }
      22% {
        transform: translateY(-8px);
      }
      26% {
        transform: none;
      }
    }
    @keyframes catRightType {
      6% {
        transform: translateY(-8px);
      }
      8% {
        transform: none;
      }
      10% {
        transform: translateY(-8px);
      }
      12% {
        transform: none;
      }
      16% {
        transform: translateY(-8px);
      }
      18% {
        transform: none;
      }
      20% {
        transform: translateY(-8px);
      }
      22% {
        transform: none;
      }
      24% {
        transform: translateY(-8px);
      }
      28% {
        transform: none;
      }
    }
    @keyframes catRead {
      55% {
        transform: none;
      }
      62% {
        transform: translateX(-2px);
      }
      70% {
        transition-timing-function: ease-out;
        transform: translateX(3px);
      }
      82% {
        transform: translateX(-2px);
      }
      90% {
        transition-timing-function: ease-out;
        transform: translateX(3px);
      }
      100% {
        transform: none;
      }
    }
    @keyframes dogLeftType {
      50% {
        transform: none;
      }
      52% {
        transform: translateY(-8px);
      }
      56% {
        transform: none;
      }
      58% {
        transform: translateY(-8px);
      }
      60% {
        transform: none;
      }
      64% {
        transform: translateY(-8px);
      }
      66% {
        transform: none;
      }
      68% {
        transform: translateY(-8px);
      }
      70% {
        transform: none;
      }
      72% {
        transform: translateY(-8px);
      }
      76% {
        transform: none;
      }
    }
    @keyframes dogRightType {
      54% {
        transform: none;
      }
      56% {
        transform: translateY(-8px);
      }
      58% {
        transform: none;
      }
      60% {
        transform: translateY(-8px);
      }
      62% {
        transform: none;
      }
      66% {
        transform: translateY(-8px);
      }
      68% {
        transform: none;
      }
      70% {
        transform: translateY(-8px);
      }
      72% {
        transform: none;
      }
      74% {
        transform: translateY(-8px);
      }
      78% {
        transform: none;
      }
    }
    @keyframes dogRead {
      5% {
        transform: none;
      }
      17% {
        transition-timing-function: ease-out;
        transform: translateX(-5px);
      }
      25% {
        transform: none;
      }
      37% {
        transition-timing-function: ease-out;
        transform: translateX(-5px);
      }
      45% {
        transform: none;
      }
    }
  }
</style>
