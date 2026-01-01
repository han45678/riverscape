<template>
  <article
    class="s1 font-['Noto_Serif_TC',serif]"
    id="s1"
  >
    <div class="txt">
      <div
        class="t1"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        Chill Style
      </div>

      <div
        class="t2"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <div class="row">台北城南</div>
        <div class="row">美式生活</div>
      </div>

      <div
        class="t3"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="400"
      >
        純住2房・3房
      </div>
    </div>

    <div
      class="footer"
      data-aos="fade-in"
      data-aos-delay="600"
    >
      <div class="deco-line"></div>
      <div class="logo-box">
        <span class="zh">鼎吉水岸</span>
        <span class="en">THE RIVERSCAPE</span>
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
    text-align: left;
    font-weight: 300;
    font-size: sizem(24);
    letter-spacing: sizem(1);
    margin-bottom: sizem(25);
    font-style: italic;

    @media screen and (min-width: 768px) {
      font-size: size(32);
      margin-bottom: size(35);
      letter-spacing: size(3);
    }
  }

  .t2 {
    font-weight: 500;
    line-height: 1.3;
    text-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    font-size: sizem(52);
    letter-spacing: sizem(2);

    .row {
      display: block; // 強制換行
    }

    @media screen and (min-width: 768px) {
      // 電腦版尺寸
      font-size: size(72);
      letter-spacing: size(5);
    }
  }

  // 副標題 (純住2房...)
  .t3 {
    font-weight: 400;
    opacity: 0.9;
    // 手機版尺寸
    font-size: sizem(20);
    letter-spacing: sizem(2);
    margin-top: sizem(170);

    @media screen and (min-width: 768px) {
      // 電腦版尺寸
      font-size: size(28);
      letter-spacing: size(3);
      margin-top: size(250);
    }
  }

  // --- 底部 Footer ---
  .footer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    // 手機版 Footer 高度與內距
    padding-bottom: sizem(30);

    @media screen and (min-width: 768px) {
      // 電腦版 Footer 高度與內距
      padding-bottom: size(40);
    }

    .deco-line {
      width: 100%;
      // 漸層線高度
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

      .zh {
        font-weight: 600;
        letter-spacing: 0.1em;
        font-size: sizem(24);

        @media screen and (min-width: 768px) {
          font-size: size(32);
        }
      }

      .en {
        color: #999;
        font-weight: 400;
        font-size: sizem(10);
        letter-spacing: 0.05em;

        @media screen and (min-width: 768px) {
          font-size: size(12);
        }
      }
    }
  }
}
</style>
