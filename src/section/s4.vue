<script setup>
import { computed, getCurrentInstance } from 'vue';

// 假設你的環境有 mixin 或 global properties，若無可移除這段
const globals = getCurrentInstance()?.appContext.config.globalProperties;
const isMobile = computed(() => globals?.$isMobile ? globals.$isMobile() : false);
</script>

<template>
  <section class="hero-section font-['Noto_Serif_TC',serif]" id="hero">
    
    <div class="txt-group">
      <h1 class="main-title" data-aos="fade-up" data-aos-delay="0">
        <span class="accent">Casual</span>
        <span class="white">life</span>
      </h1>
      
      <div class="sub-title" data-aos="fade-up" data-aos-delay="200">
        The New Way to Live in South Taipei —<br />
        Chill, Classy, and Just Right
      </div>
    </div>

    <div class="location-tag" data-aos="fade-right" data-aos-delay="400">
      Location
    </div>

    <div class="disclaimer">
      空拍外觀3D合成示意圖
    </div>

  </section>
</template>

<style lang="scss" scoped>
// 引入你的 function.scss 以使用 size() 和 sizem()
@import '@/assets/style/function.scss';

// 定義顏色變數
$color-green: #a8d664; 
$color-white: #ffffff;

.hero-section {
  @apply relative;
  display: flex;
  flex-direction: column;
  justify-content: center; // 垂直置中
  align-items: center;     // 水平置中
  
  // --- Mobile 設定 (參照 s4 邏輯) ---
  width: 100%;
  height: sizem(750); // 手機版高度，可依圖片比例調整
  background: url("./images/image_74494c.png") bottom center no-repeat; // 手機版直圖
  background-size: cover;
  color: $color-white;
  
  // 手機版基準字體大小 (控制整體縮放)
  font-size: sizem(14); 

  // --- Desktop 設定 (參照 s4 邏輯) ---
  @media screen and (min-width: 768px) {
    background-image: url("./images/image_744915.jpg"); // 電腦版橫圖
    background-position: center;
    height: 100vh;           // 電腦版全螢幕
    max-height: size(1080);
    min-height: size(900);
    
    // 電腦版基準字體大小 (控制整體縮放)
    font-size: size(55);
  }

  // --- 內部元素樣式 (單位皆為 em，隨父層縮放) ---

  .txt-group {
    position: relative;
    text-align: left; // 或是 center，看你喜歡哪種排版
    z-index: 10;
    // 稍微往上移一點，避開建築物
    margin-bottom: 2em; 
    
    @media screen and (min-width: 768px) {
      margin-bottom: 1em;
      margin-right: 15em; // 依照圖示，文字偏左，讓出右邊建築
    }
  }

  .main-title {
    font-weight: 400;
    line-height: 1;
    margin-bottom: 0.3em;
    font-style: italic; // 斜體
    
    span {
      display: inline-block;
    }

    .accent {
      color: $color-green;
      font-size: 3.5em; // 調整 Casual 的大小
      margin-right: 0.1em;
    }

    .white {
      color: $color-white;
      font-size: 2.2em; // 調整 life 的大小
      font-weight: 300;
    }
  }

  .sub-title {
    font-size: 0.6em;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.9);
    padding-left: 0.5em; // 稍微對齊 Casual 文字
  }

  // 左下角 Location
  .location-tag {
    position: absolute;
    left: 0;
    bottom: sizem(60); // 手機版位置
    background: #fff;
    color: #6a8c45; // 深綠色文字
    padding: 0.8em 2em;
    font-size: 1.2em;
    letter-spacing: 0.05em;
    font-style: italic;
    
    @media screen and (min-width: 768px) {
      bottom: size(0); // 電腦版貼底
      left: size(180); // 依照設計稿調整左邊距
      font-size: 0.45em; // 在 size(55) 的基準下縮小
      padding: 1em 3em;
    }
  }

  // 右下角 Disclaimer
  .disclaimer {
    position: absolute;
    right: 1em;
    bottom: 0.5em;
    font-size: 0.6em; // 手機版
    opacity: 0.7;
    font-style: normal;

    @media screen and (min-width: 768px) {
      font-size: 0.25em; // 電腦版
      right: size(30);
      bottom: size(15);
    }
  }
}
</style>