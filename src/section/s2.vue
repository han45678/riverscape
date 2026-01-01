<template>
  <article class="lifestyle font-['Noto_Serif_TC',serif]" id="lifestyle">
    
    <div class="grid-box top-grid">
      <div 
        v-for="(img, idx) in topImages" 
        :key="'top'+idx" 
        class="img-item"
        :class="`item-${idx+1}`"
        data-aos="fade-up" 
        :data-aos-delay="idx * 100"
      >
        <img :src="img" alt="Lifestyle Top">
      </div>
    </div>

    <div class="txt-content">
      <h3 class="sub-title" data-aos="fade-up" data-aos-delay="200">發現台北城南的生活__</h3>
      <h2 class="main-title" data-aos="fade-up" data-aos-delay="400">一種講究的態度</h2>
      
      <div class="en-group" data-aos="fade-up" data-aos-delay="600">
        <p>The New Way to Live in South Taipei —</p>
        <p>Chill, Classy, and Just Right</p>
      </div>

      <span class="caption" data-aos="fade-in" data-aos-delay="800">實景圖及情境示意圖</span>
    </div>

    <div class="grid-box bot-grid">
      <div 
        v-for="(img, idx) in botImages" 
        :key="'bot'+idx" 
        class="img-item"
        :class="`item-${idx+1}`"
        data-aos="fade-up" 
        :data-aos-delay="idx * 100"
        data-aos-offset="50"
      >
        <img :src="img" alt="Lifestyle Bottom">
      </div>
    </div>

  </article>
</template>

<script setup>
import { ref } from 'vue';

// 圖片路徑 (請替換為實際專案路徑)
// 為了符合電腦版5張，手機版3張的邏輯，這裡配置5張圖
const topImages = ref([
  'http://placehold.jp/320x320.png', // 1. 大圖 (手機左)
  'http://placehold.jp/320x320.png', // 2. 小圖 (手機右上)
  'http://placehold.jp/320x320.png', // 3. 小圖 (手機右下)
  'http://placehold.jp/320x320.png', // 4. 電腦版額外圖
  'http://placehold.jp/320x320.png', // 5. 電腦版額外圖
]);

const botImages = ref([
  'http://placehold.jp/320x320.png', // 1. 小圖 (手機左上)
  'http://placehold.jp/320x320.png', // 2. 小圖 (手機左下)
  'http://placehold.jp/320x320.png', // 3. 大圖 (手機右)
  'http://placehold.jp/320x320.png', // 4. 電腦版額外圖
  'http://placehold.jp/320x320.png', // 5. 電腦版額外圖
]);
</script>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.lifestyle {
  position: relative;
  width: 100%;
  background-color: #fff;
  overflow: hidden;
  
  // Mobile first padding
  padding-bottom: sizem(50);

  @media screen and (min-width: 768px) {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 0;
  }
}

// 圖片 Grid 區塊
.grid-box {
  display: grid;
  width: 100%;
  
  // --- 手機版佈局 (Mosaic Style) ---
  grid-template-columns: 1fr 1fr; // 兩欄
  gap: sizem(4); // 手機版間距
  padding: 0;

  .img-item {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
    
    // 預設比例，讓圖片在手機上撐開
    aspect-ratio: 1/1; 

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      transition: transform 1s ease;
    }

    &:hover img {
      transform: scale(1.1);
    }
  }

  // --- 手機版隱藏多餘圖片 (只顯示前3張) ---
  .item-4, .item-5 {
    display: none;
  }

  // --- 針對不同 Grid 做手機版拼貼 ---
  
  // 上方 Grid: 左大(跨兩列) / 右兩小
  &.top-grid {
    .item-1 {
      grid-row: 1 / 3; // 第一張圖跨兩列
      grid-column: 1 / 2;
    }
    // item-2, item-3 自動排在右邊
  }

  // 下方 Grid: 左兩小 / 右大(跨兩列)
  &.bot-grid {
    .item-1 {
       // 左上
    }
    .item-2 {
       // 左下
    }
    .item-3 {
      grid-row: 1 / 3; // 第三張圖跨兩列
      grid-column: 2 / 3;
    }
  }

  // --- 電腦版佈局 (5 Columns) ---
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(5, 1fr); // 五欄
    gap: 0; // 電腦版無間距

    // 恢復所有圖片顯示
    .item-4, .item-5 {
      display: block;
    }

    // 重置所有跨欄設定，變回一列
    &.top-grid .item-1,
    &.bot-grid .item-3 {
      grid-row: auto;
      grid-column: auto;
    }

    .img-item {
      aspect-ratio: 4/3; // 電腦版改為長方形比例
    }
  }
}

// 文字內容區塊
.txt-content {
  position: relative;
  text-align: center;
  padding: sizem(60) sizem(20);
  color: #8dbf43; // 主色調 (草綠)

  @media screen and (min-width: 768px) {
    padding: size(70) 0;
  }

  .sub-title {
    font-size: sizem(15);
    letter-spacing: 0.1em;
    margin-bottom: sizem(10);
    font-weight: 500;

    @media screen and (min-width: 768px) {
      font-size: size(24);
      margin-bottom: size(15);
    }
  }

  .main-title {
    font-size: sizem(32);
    margin-bottom: sizem(20);
    font-weight: 500; // 使用 serif 字體原本的粗度
    letter-spacing: 0.05em;

    @media screen and (min-width: 768px) {
      font-size: size(60);
      margin-bottom: size(25);
    }
  }

  .en-group {
    color: #999;
    font-size: sizem(13);
    line-height: 1.6;
    letter-spacing: 0.05em;
    font-weight: 400;

    @media screen and (min-width: 768px) {
      font-size: size(18);
    }
  }

  .caption {
    display: block;
    margin-top: sizem(40);
    font-size: sizem(10);
    color: #ccc;
    text-align: center;

    @media screen and (min-width: 768px) {
      position: absolute;
      right: size(20);
      bottom: size(10);
      margin-top: 0;
      font-size: size(12);
    }
  }
}
</style>