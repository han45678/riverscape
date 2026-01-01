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
  justify-content: center; // 垂直置中
  align-items: center; // 水平置中
  width: 100%;

  // --- Mobile First 設定 (參考範本邏輯) ---
  height: sizem(800); // 依據手機版設計稿高度設定，或設為 100vh
  background-image: url('./s1/bg.jpg');
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff;

  // 基礎字體大小基準 (手機)
  font-size: sizem(16);

  // --- Desktop 設定 ---
  @media screen and (min-width: 768px) {
    height: 100vh;
    min-height: size(900);
    background-image: url('./s1/bg.jpg');
    background-position: center;
    font-size: size(16); // 基礎字體大小基準 (電腦)
  }

  // --- 文字區塊結構 ---
  .txt {
    text-align: center;
    position: relative;
    z-index: 2;
    // 手機版位置微調 (往上提一點以避開下方留白)
    margin-bottom: sizem(100);

    @media screen and (min-width: 768px) {
      margin-bottom: size(80);
    }
  }

  // Chill Style
  .t1 {
    font-style: italic;
    font-weight: 300;
    // 手機版尺寸
    font-size: sizem(24);
    letter-spacing: 0.05em;
    margin-bottom: sizem(10);

    @media screen and (min-width: 768px) {
      // 電腦版尺寸
      font-size: size(32);
      margin-bottom: size(15);
    }
  }

  // 主標題 (台北城南...)
  .t2 {
    font-weight: 500;
    line-height: 1.3;
    text-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    // 手機版尺寸
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
    margin-top: sizem(30);

    @media screen and (min-width: 768px) {
      // 電腦版尺寸
      font-size: size(28);
      letter-spacing: size(3);
      margin-top: size(40);
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
