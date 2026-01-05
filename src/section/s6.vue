<template>
  <section
    class="s6 font-['Noto_Serif_TC',serif]"
    id="s6"
  >
    <div class="layout-grid">
      <div class="bar-area">
        <img
          src="./s6/bar-area.jpg"
          alt="bar-area"
        />
      </div>

      <div
        class="img-area"
        data-aos="zoom-in"
      >
        <img
          src="./s6/pic01.jpg"
          alt="pic"
        />
        <div class="disclaimer">外觀3D示意圖</div>
      </div>

      <div
        class="txt-area"
      >
        <div class="content-box">
          <h2 class="main-title" data-aos="zoom-in">
            <span class="block">以水為靈感</span>
            <span class="block">雕塑流動的城市線條</span>
          </h2>

          <div class="sub-title" data-aos="zoom-in">
            新店溪首排 × 低檯度 × 大開窗 <br class="mobile-only" />
            × 建築即風景
          </div>

          <p class="desc" data-aos="zoom-in">
            從新店溪水岸的波光律動汲取靈感，鼎吉水岸外觀以「流動」為設計語彙，描繪自然與建築的交融關係。採用低檯度設計，延伸水平視野；搭配大面寬玻璃與簡潔垂直線條，勾勒出極簡而具韻律感的立面藝術。建築不再是冰冷的量體，而是一座與風景共鳴的藝術作品。
          </p>

          <div class="tag">Architecture</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

// 顏色定義 (S6 的綠色偏草綠)
$color-green: #90b84c;
$color-text-dark: #595757;
$color-text-gray: #888888;
$color-white: #ffffff;

.s6 {
  @apply relative;
  width: 100%;
  background-color: $color-white;
  color: $color-text-dark;

  // --- Mobile Base ---
  font-size: sizem(14);

  // --- Desktop Base ---
  @media screen and (min-width: 768px) {
    height: 100vh;
    min-height: size(900);
    max-height: size(1080);
    font-size: size(55);
    overflow: hidden;
  }

  .layout-grid {
    width: 100%;
    height: 100%;
    display: grid;

    // 手機版 Grid 設定
    grid-template-columns: 1fr;
    grid-template-rows: auto auto 1fr; // Bar, Image, Text
    grid-template-areas:
      'bar'
      'img'
      'txt';

    // 電腦版 Grid 設定
    @media screen and (min-width: 768px) {
      grid-template-columns: size(80) calc(50% - size(80)) 50%; // Bar寬度, 文字區, 圖片區
      grid-template-rows: 1fr;
      grid-template-areas: 'bar txt img';
    }
  }

  // 1. 綠色裝飾條
  .bar-area {
    grid-area: bar;
    background-color: #8fb538;
    width: 100%;
    height: sizem(25);

    // 電腦版：直條在左側 (滿高)
    @media screen and (min-width: 768px) {
      width: 100%;
      height: 100%;
      background-color: $color-white;
    }

    img {
      width: 100%;
      height: 85%;
      object-fit: cover;
      display: none;
      @media screen and (min-width: 768px) {
        display: block;
      }
    }
  }

  // 2. 圖片區域
  .img-area {
    grid-area: img;
    position: relative;
    width: 100%;
    height: sizem(500);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    @media screen and (min-width: 768px) {
      height: 100%; // 電腦版滿高
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .disclaimer {
      position: absolute;
      bottom: 10px;
      right: 10px;
      color: rgba(255, 255, 255, 0.8);
      font-size: 0.8em;
      text-shadow: 0 0 4px rgba(0, 0, 0, 0.5);

      @media screen and (min-width: 768px) {
        font-size: 0.25em;
        bottom: size(15);
        right: size(20);
      }
    }
  }

  // 3. 文字區域
  .txt-area {
    grid-area: txt;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: sizem(30) sizem(50);
    text-align: center; // 手機版預設置中

    @media screen and (min-width: 768px) {
      padding: 0 size(60); // 電腦版左右留白
      align-items: flex-end; // 讓內容塊靠右(靠近圖片)或置中，視視覺平衡而定
    }

    .content-box {
      width: 100%;
      max-width: sizem(500); // 手機版限制寬度

      @media screen and (min-width: 768px) {
        max-width: 100%;
        text-align: center; // 電腦版標題區塊置中
        padding-right: 2em; // 與圖片保持一點距離
      }
    }

    .main-title {
      color: $color-green;
      font-size: sizem(28);
      line-height: 1.3;
      margin-bottom: 0.8em;
      font-weight: 400;
      text-align: right;
      @media screen and (min-width: 768px) {
        font-size: size(44);
        text-align: center;
      }
      .block {
        display: block; // 強制換行
        &:nth-child(2) {
          font-size: sizem(22);
          @media screen and (min-width: 768px) {
            font-size: size(36);
          }
        }
      }
    }

    .sub-title {
      color: $color-text-dark;
      font-size: sizem(15);
      margin-bottom: sizem(10);
      line-height: 1.7;
      text-align: right;
      @media screen and (min-width: 768px) {
        font-size: size(24);
        margin-bottom: size(14);
        text-align: center;
      }

      .mobile-only {
        display: block;
        @media screen and (min-width: 768px) {
          display: none; // 電腦版不換行
        }
      }
    }

    .desc {
      color: $color-text-gray;
      font-size: sizem(12);
      line-height: 1.8;
      margin-bottom: 2.5em;
      text-align: right;

      @media screen and (min-width: 768px) {
        font-size: size(20);
        text-align: justify;
      }
    }

    .tag {
      color: #fff;
      font-size: sizem(10);
      font-weight: 500;
      line-height: 1.7;

      width: sizem(85);
      height: sizem(37);

      display: flex;
      justify-content: center;
      align-items: center;

      background-color: #8fb538;

      transform: translateY(-100%);

      @media screen and (min-width: 768px) {
        font-size: size(20);
        width: size(233);
        height: size(50);
        margin-left: auto;

        transform: unset;
      }
    }
  }
}
</style>
