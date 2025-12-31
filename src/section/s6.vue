<script setup>
// s6 為單張靜態圖，不需 Swiper
// 請替換為您的實際圖片路徑
const buildingImg = 'http://placehold.jp/730x730.jpg'; 
</script>

<template>
  <section class="s6 font-['Times_New_Roman',serif]" id="s6">
    <div class="layout-grid">
      
      <div class="bar-area"></div>

      <div class="img-area" :style="{ backgroundImage: `url(${buildingImg})` }" data-aos="fade-in">
        <div class="disclaimer">外觀3D示意圖</div>
      </div>

      <div class="txt-area" data-aos="fade-up" data-aos-delay="200">
        <div class="content-box">
          
          <h2 class="main-title">
            <span class="block">以水為靈感</span>
            <span class="block">雕塑流動的城市線條</span>
          </h2>

          <div class="sub-title">
            新店溪首排 × 低檯度 × 大開窗 <br class="mobile-only"> × 建築即風景
          </div>

          <p class="desc">
            從新店溪水岸的波光律動汲取靈感，鼎吉水岸外觀以「流動」為設計語彙，描繪自然與建築的交融關係。採用低檯度設計，延伸水平視野；搭配大面寬玻璃與簡潔垂直線條，勾勒出極簡而具韻律感的立面藝術。建築不再是冰冷的量體，而是一座與風景共鳴的藝術作品。
          </p>

          <div class="tag">
            Architecture
          </div>
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
      "bar"
      "img"
      "txt";

    // 電腦版 Grid 設定
    @media screen and (min-width: 768px) {
      grid-template-columns: size(80) 1fr 1.2fr; // Bar寬度, 文字區, 圖片區
      grid-template-rows: 1fr;
      grid-template-areas: "bar txt img";
    }
  }

  // 1. 綠色裝飾條
  .bar-area {
    grid-area: bar;
    background-color: $color-green;
    
    // 手機版：橫條在頂部
    width: 100%;
    height: sizem(20);

    // 電腦版：直條在左側 (滿高)
    @media screen and (min-width: 768px) {
      width: 100%;
      height: 100%;
    }
  }

  // 2. 圖片區域
  .img-area {
    grid-area: img;
    position: relative;
    width: 100%;
    // 手機版高度，可依圖片比例微調
    height: sizem(500); 
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    @media screen and (min-width: 768px) {
      height: 100%; // 電腦版滿高
    }

    .disclaimer {
      position: absolute;
      bottom: 10px;
      right: 10px;
      color: rgba(255,255,255,0.8);
      font-size: 0.8em;
      text-shadow: 0 0 4px rgba(0,0,0,0.5);
      font-family: sans-serif;
      
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
    padding: sizem(40) sizem(30);
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
      font-size: 2em;
      line-height: 1.3;
      margin-bottom: 0.8em;
      font-weight: 400;

      .block {
        display: block; // 強制換行
      }
    }

    .sub-title {
      color: $color-text-dark;
      font-size: 1.1em;
      margin-bottom: 2em;
      font-family: sans-serif;
      line-height: 1.6;

      .mobile-only {
        display: block;
        @media screen and (min-width: 768px) {
          display: none; // 電腦版不換行
        }
      }
    }

    .desc {
      color: $color-text-gray;
      font-size: 1em;
      line-height: 1.8;
      margin-bottom: 2.5em;
      text-align: justify; // 內文左右對齊 (包含手機與電腦)
      
      @media screen and (min-width: 768px) {
        font-size: 0.36em; // 電腦版內文字級
      }
    }

    .tag {
      display: inline-block;
      background-color: $color-green;
      color: $color-white;
      padding: 0.8em 2.5em;
      font-size: 1em;
      font-family: serif; // 標籤使用襯線體
      
      @media screen and (min-width: 768px) {
        float: left; // 電腦版標籤靠左 (依照圖示)
        font-size: 0.4em;
        padding: 0.8em 3em;
      }
    }
  }
}
</style>