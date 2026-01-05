<template>
  <article
    class="s1 font-['Noto_Serif_TC',serif]"
    id="s1"
  >
    <div class="txt">
      <div
        class="t1"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <img
          src="./s1/t1.svg"
          alt="t1"
        />
      </div>
    </div>

    <div class="footer">
      <div class="deco-line"></div>
      <div
        class="logo-box"
        data-aos="zoom-in"
        data-aos-delay="600"
      >
        <img
          src="./s1/logo.svg"
          alt="logo"
        />
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

  height: 100dvh;
  background-image: url('./s1/bg.jpg');
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff;

  font-size: sizem(16);

  @media screen and (min-width: 768px) {
    min-height: size(900);
    background-image: url('./s1/bg.jpg');
    background-position: center;
    font-size: size(16); // 基礎字體大小基準 (電腦)
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
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: sizem(30);

    @media screen and (min-width: 768px) {
      padding-bottom: size(40);
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
