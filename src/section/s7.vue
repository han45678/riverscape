<script setup>
import { ref } from 'vue';

// 模擬 Logo 列表，使用 placehold.jp 產生佔位圖
// 根據設計稿約有 18 個 Logo
const logos = ref(Array.from({ length: 18 }).map((_, i) => ({
  id: i,
  name: `Brand ${i + 1}`,
  // 模擬 Logo 尺寸 (寬長比約 2:1 或 3:1)
  src: 'http://placehold.jp/150x60.png?text=LOGO' 
})));

</script>

<template>
  <section class="s7 font-['Noto_Serif_TC',serif]" id="s7">
    
    <div class="text-container">
      <div class="content-wrap" data-aos="fade-right">
        <h2 class="main-title">
          極致選品<br>
          <span>為生活注入國際規格的講究</span>
        </h2>
        
        <p class="desc">
          24項全球精選品牌，從裡到外皆是藝術<br>
          在鼎吉水岸，建材不是選配，而是一種<br>
          品味的基本標準。
        </p>
      </div>

      <div class="tag-label" data-aos="fade-right" data-aos-delay="200">
        Architecture Materials
      </div>
    </div>

    <div class="logo-container">
      <div class="logo-grid" data-aos="fade-up" data-aos-delay="300">
        <div 
          v-for="logo in logos" 
          :key="logo.id" 
          class="logo-item"
        >
          <img :src="logo.src" :alt="logo.name" />
        </div>
      </div>
    </div>

  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

// 顏色定義 (吸取自 S7 設計稿)
$color-green-bg: #8dba3b;    // 背景深綠
$color-green-tag: #cdef6f;   // 標籤淺綠
$color-white: #ffffff;
$color-text-white: #ffffff;

.s7 {
  @apply relative;
  width: 100%;
  // 手機版：上方綠色，下方白色 (由子元素撐開)
  background-color: $color-green-bg;
  
  // --- Mobile Base ---
  font-size: sizem(14);

  // --- Desktop Base ---
  @media screen and (min-width: 768px) {
    height: 100vh;
    min-height: size(900);
    max-height: size(1080);
    font-size: size(55);
    display: flex; // 左右佈局
    overflow: hidden;
  }

  // 1. 文字區域 (Green Zone)
  .text-container {
    position: relative;
    padding: sizem(60) sizem(30) sizem(80) sizem(30); // 手機版留白，下方多留給 tag
    color: $color-text-white;

    @media screen and (min-width: 768px) {
      width: 40%; // 電腦版佔左側 40%
      height: 100%;
      padding: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: size(100); // 左側縮排
    }

    .content-wrap {
      @media screen and (min-width: 768px) {
        margin-bottom: size(50); // 將內容稍微往上推
      }
    }

    .main-title {
      font-size:size(44);
      line-height: 1.3;
      margin-bottom: 0.8em;
      font-weight: 400;
      span{
        font-size:size(35);
      }
    }

    .desc {
      font-size:size(24);
      line-height: 1.8;
      font-weight: 300;
      opacity: 0.9;
    }

    // 淺綠色標籤
    .tag-label {
      position: absolute;
      background-color: $color-green-tag;
      color: #333; // 標籤文字深色
      
      // 手機版位置：掛在綠色區塊右下角，稍微凸出
      bottom: sizem(-20); 
      right: 0;
      padding: 0.8em 2em;
      font-size:size(20);
      z-index: 10;
      box-shadow: 0 4px 10px rgba(0,0,0,0.1);

      @media screen and (min-width: 768px) {
        // 電腦版位置：貼齊綠色區塊底部，寬度佔滿並延伸到白色區塊的感覺
        // 依照設計稿：它是一條長條，從左側文字區下方開始
        bottom: 18%; // 大約位置
        right: 0; // 貼齊右側邊界 (連接白色區塊)
        width: 120%; // 故意加寬讓它看起來連到右邊
        text-align: right; // 文字靠右
        padding: 0.6em 2em; // 調整內距
        font-size: 0.45em;
        
        // 使用 transform 微調位置，讓文字剛好落在白色區塊起始處附近
        // 實際開發可依視覺微調
        transform: translateX(15%); 
      }
    }
  }

  // 2. Logo 區域 (White Zone)
  .logo-container {
    background-color: $color-white;
    width: 100%;
    padding: sizem(60) sizem(20);

    @media screen and (min-width: 768px) {
      width: 60%; // 電腦版佔右側 60%
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 size(50);
    }

    .logo-grid {
      display: grid;
      width: 100%;
      
      // 手機版：3 欄
      grid-template-columns: repeat(3, 1fr);
      gap: sizem(20);
      
      @media screen and (min-width: 768px) {
        // 電腦版：6 欄 (依照設計圖 6x3)
        grid-template-columns: repeat(6, 1fr);
        gap: size(30);
        max-width: size(900); // 限制最大寬度
      }

      .logo-item {
        display: flex;
        align-items: center;
        justify-content: center;
        aspect-ratio: 3/1; // 保持長寬比
        
        img {
          max-width: 100%;
          height: auto;
          // 加上一點灰度濾鏡讓 LOGO 看起來比較統一 (可選)
          filter: grayscale(100%); 
          opacity: 0.7;
          transition: all 0.3s;

          &:hover {
            filter: grayscale(0%);
            opacity: 1;
          }
        }
      }
    }
  }
}
</style>