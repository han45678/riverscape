<script setup>
// 假設 Swiper 已經全域註冊，這裡直接使用
// 如果需要特定設定 (如 Autoplay)，可透過 props 傳入或在全域設定
</script>

<template>
  <article
    class="s5 font-['Times_New_Roman',serif]"
    id="s5"
  >
    <div
      class="txt-header"
      data-aos="fade-up"
      data-aos-delay="0"
    >
      <h2 class="main-title">
        以城市遠見<br />
        打造未來的生活藝術
      </h2>
      <div class="sub-title">國際眼界 × 都會地景 × 建築生活的策展者</div>
    </div>

    <div
      class="img-box"
      data-aos="fade-right"
      data-aos-delay="200"
    >
      <div class="brand-tag">Brand</div>

      <swiper
        class="my-swiper"
        :autoplay="{ delay: 3000, disableOnInteraction: false }"
        :loop="true"
        :speed="1000"
      >
        <swiper-slide>
          <img
            src="http://placehold.jp/730x730.jpg"
            alt="Building View 1"
          />
        </swiper-slide>
        <swiper-slide>
          <img
            src="http://placehold.jp/730x730.jpg"
            alt="Building View 2"
          />
        </swiper-slide>
      </swiper>
    </div>

    <div
      class="txt-body"
      data-aos="fade-up"
      data-aos-delay="400"
    >
      <p>
        鷹吉建設，不只是建造房子，而是在策劃一種對未來城市的實踐。從選址開始，回應城市脈動與生活趨勢；從規劃之初，即以國際思維對話地景、文化與居住者的生活期待。<br /><br />
        我們相信，一座建築，不只是所在，更是揭幕未來城市生活風貌。
      </p>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

// 顏色變數
$color-bg: #2b2b2b; // 深灰背景
$color-green: #9cbd46; // 標題綠色
$color-white: #ffffff;
$tag-bg: #ffffff;
$tag-text: #9cbd46;

.s5 {
  @apply relative;
  width: 100%;
  background-color: $color-bg;
  color: $color-white;

  // --- Mobile 基礎設定 ---
  // 使用 Flex 讓內容垂直排列：標題 -> 圖片 -> 內文
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: sizem(50) sizem(30); // 上下左右留白

  // Mobile 基準字體 (控制整體比例)
  font-size: sizem(14);

  // --- Desktop 設定 ---
  @media screen and (min-width: 768px) {
    height: 100vh;
    max-height: size(1080);
    min-height: size(900);
    padding: 0 size(100); // 電腦版左右留白

    // 電腦版轉為 Grid 佈局
    display: grid;
    // 定義兩欄：左(圖片) 右(文字)
    grid-template-columns: 0.9fr 1.1fr;
    // 定義兩列：上(標題) 下(內文)
    grid-template-rows: auto auto;
    align-content: center; // 內容垂直置中
    column-gap: size(80); // 欄間距

    // Desktop 基準字體
    font-size: size(55);
  }

  // === 區塊樣式 (單位皆為 em) ===

  // 1. 標題區塊
  .txt-header {
    width: 100%;
    margin-bottom: 1.5em;
    text-align: left;

    @media screen and (min-width: 768px) {
      // Grid 定位：第2欄，第1列
      grid-column: 2;
      grid-row: 1;
      align-self: end; // 靠下對齊 (接近圖片中心線)
      margin-bottom: 0.8em;
    }

    .main-title {
      font-size: 1.8em;
      line-height: 1.3;
      color: $color-green;
      margin-bottom: 0.4em;
      font-weight: 400; // 襯線體通常不用太粗
    }

    .sub-title {
      font-size: 0.85em;
      color: #ccc;
      letter-spacing: 0.05em;
      font-family: sans-serif; // 副標題可用無襯線體
    }
  }

  // 2. 圖片區塊 (Swiper 外框)
  .img-box {
    position: relative; // 為了 Brand 標籤定位
    width: 100%;
    aspect-ratio: 4/5; // 保持圖片比例
    margin-bottom: 1.5em;

    @media screen and (min-width: 768px) {
      // Grid 定位：第1欄，跨越2列
      grid-column: 1;
      grid-row: 1 / span 2;
      margin-bottom: 0;
      height: 100%;
      max-height: size(700); // 限制最大高度
      align-self: center;
    }

    // Swiper 本體
    .my-swiper {
      width: 100%;
      height: 100%;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover; // 填滿不變形
        display: block;
      }
    }

    // Brand 標籤
    .brand-tag {
      position: absolute;
      top: size(40); // 稍微有點距離
      right: 0; // 貼齊右邊
      z-index: 10; // 蓋在 Swiper 上

      background: $tag-bg;
      color: $tag-text;
      writing-mode: vertical-rl; // 直書
      text-orientation: mixed;
      padding: 0.8em 0.3em;
      font-size: 0.8em;
      letter-spacing: 0.2em;
      font-family: 'Times New Roman', serif;
      box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.2);

      @media (max-width: 768px) {
        top: sizem(30);
        right: 0; // 手機版貼齊右緣
        transform: translate(50%, 0); // 讓它有一半露在外面，或依照需求對齊
        right: sizem(0);
      }
    }
  }

  // 3. 內文區塊
  .txt-body {
    width: 100%;

    @media screen and (min-width: 768px) {
      // Grid 定位：第2欄，第2列
      grid-column: 2;
      grid-row: 2;
      align-self: start; // 靠上對齊
      padding-right: 2em; // 右側留白避免貼邊
    }

    p {
      font-size: 0.7em; // 相對於 font-size: 55/14
      line-height: 1.8;
      color: #ddd;
      text-align: justify; // 左右對齊
      font-family: sans-serif;
      letter-spacing: 0.05em;
    }
  }
}
</style>
