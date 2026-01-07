<template>
  <article class="s1" id="s1">
    <div class="bg">
      <img src="./s1/bg.jpg" alt="bg" class="bg0" />
      <img src="./s1/gif.gif" alt="gif" class="gif" />
    </div>
    <div class="txt">
      <div class="t1" data-aos="zoom-in" data-aos-duration="2500">
        <img src="./s1/t1.svg" alt="t1" />
      </div>
    </div>

    <div class="footer">
      <div class="logo-box" data-aos="zoom-in" data-aos-delay="600">
        <img src="./s1/logo.svg" alt="logo" />
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
// 引入您的全域 function (確保路徑正確)
@import '@/assets/style/function.scss';

.s1 {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100dvh - sizem(63));
  color: #fff;
  font-size: sizem(16);
  min-height: sizem(604);
  max-height: sizem(750);

  @media screen and (min-width: 768px) {
    height: 100dvh;
    min-height: size(900);
    max-height: size(1080);
    font-size: size(16); // 基礎字體大小基準 (電腦)
  }

  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: calc(100% - #{sizem(93)});//sizem(547);
    overflow: hidden;
    z-index: 0;
    border-bottom: sizem(10) solid #C7FF69;

    @media screen and (min-width: 768px) {
      height: size(798);
      border-bottom: size(14) solid #C7FF69;
    }

    img {
      vertical-align: middle;
      width: auto;
      height: 100%;

      @media screen and (min-width: 768px) {
        width: 100%;
      }

      &.gif {
        position: absolute;
        top: 0;
        left: -100%;
        width: 300%;
        height: 100%;
        z-index: 1;
        opacity: 0.5;
        mix-blend-mode: overlay;
        filter: blur(2.9px);

        @media screen and (min-width: 768px) {
          width: 100%;
          left: 0;
        }
      }
    }
  }

  .txt {
    position: relative;
    z-index: 2;
    width: calc(100% - sizem(100));

    @media screen and (min-width: 768px) {
      width: auto;
      text-align: center;
    }
  }

  .t1 {
    img {
      width: sizem(245);

      @media screen and (min-width: 768px) {
        width: size(320);
      }
    }
  }

  .footer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    // background-color: #ccc;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height:sizem(93);

    @media screen and (min-width: 768px) {
      height: calc(100% - #{size(798)});
    }

    .deco-line {
      width: 100%;
      height: sizem(4);
      background: linear-gradient(to right, #8bc34a, #4dd0e1);
      margin-bottom: sizem(15);

      @media screen and (min-width: 768px) {
        height: size(5);
        margin-bottom: size(20);
      }
    }

    .logo-box {
      display: flex;
      align-items: baseline;
      justify-content: center;
      color: #5a5a5a;
      gap: sizem(10);

      @media screen and (min-width: 768px) {
        gap: size(15);
      }

      img {
        width: sizem(200);

        @media screen and (min-width: 768px) {
          width: size(315);
        }
      }
    }
  }
}
</style>
