<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';

// Splide 設定
const splideOptions = {
  type: 'loop',        // ✅ 修改這裡：設定為 'loop' 即可達成無窮循環
  autoplay: true,      // 開啟自動播放
  interval: 5000,      // 每 5 秒切換
  speed: 1000,         // 切換速度 1 秒
  arrows: false,       // 隱藏左右箭頭
  pagination: false,   // 隱藏下方分頁點
  drag: true,          // 允許拖曳
  perPage: 1,          // 每頁顯示一張
};

// 輪播資料
const slideData = [
  {
    src: new URL('./s5/pic01.webp', import.meta.url).href,
    alt: '鼎吉中山',
    text: '鼎吉中山'
  },
  {
    src: new URL('./s5/pic01.webp', import.meta.url).href,
    alt: '鼎吉中山',
    text: '鼎吉中山'
  }
];
</script>

<template>
  <article
    class="s5 font-['Noto_Serif_TC',serif]"
    id="s5"
  >
    <div
      class="txt-header"
      data-aos="fade-up"
      data-aos-delay="0"
    >
      <h2 class="main-title">
        以城市遠見<br />
        <span>打造未來的生活藝術</span>
      </h2>
      <div class="sub-title">國際眼界 × 都會地景 × 建築生活的策展者</div>
    </div>

    <div
      class="img-box"
      data-aos="fade-right"
      data-aos-delay="200"
    >
      <div class="brand-tag">Brand</div>

      <Splide
        class="my-splide"
        :options="splideOptions"
      >
        <SplideSlide
          v-for="(item, index) in slideData"
          :key="index"
          class="slide"
        >
          <div class="slide_item">
            <div class="item_pic">
              <img
                :src="item.src"
                :alt="item.alt"
              />
              <span class="caption font-['Noto_Sans_TC']">
                {{ item.text }}
              </span>
            </div>
          </div>
        </SplideSlide>
      </Splide>
    </div>

    <div
      class="txt-body"
      data-aos="fade-up"
      data-aos-delay="400"
    >
      <p>
        鷹吉建設，不只是建造房子，而是在策劃一種對未來城市的實踐。從選址開始，回應城市脈動與生活趨勢；從規劃之初，即以國際思維對話地景、文化與居住者的生活期待。<br />
        我們相信，一座建築，不只是所在，更是揭幕未來城市生活風貌。
      </p>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

// 顏色變數
$color-bg: #2b2b2b;
$color-green: #9cbd46;
$color-white: #ffffff;
$tag-bg: #ffffff;
$tag-text: #9cbd46;

.s5 {
  @apply relative;
  width: 100%;
  background-color: $color-bg;
  color: $color-white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: sizem(60) sizem(50) sizem(20) sizem(50);
  font-size: sizem(14);

  @media screen and (min-width: 768px) {
    height: 100vh;
    padding: 0 size(115);
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    align-content: center;
    column-gap: size(220);
    font-size: size(55);
  }

  .txt-header {
    width: 100%;
    margin-bottom: sizem(15);
    text-align: left;

    @media screen and (min-width: 768px) {
      grid-column: 2;
      grid-row: 1;
      align-self: end;
      margin-bottom: size(15);
    }

    .main-title {
      font-size: sizem(28);
      color: $color-green;
      margin-bottom: sizem(20);
      font-weight: 400;

      @media screen and (min-width: 768px) {
        font-size: size(45);
        margin-bottom: size(30);
      }
      span {
        @media screen and (min-width: 768px) {
          font-size: size(34);
        }
      }
    }

    .sub-title {
      font-size: sizem(14);
      color: #ccc;
      @media screen and (min-width: 768px) {
        font-size: size(24);
      }
    }
  }

  .img-box {
    position: relative;
    width: 100%;
    aspect-ratio: 4/5;
    margin-bottom: 1.5em;

    @media screen and (min-width: 768px) {
      grid-column: 1;
      grid-row: 1 / span 2;
      margin-bottom: 0;
      height: 100%;
      max-height: size(700);
      align-self: center;
    }

    .brand-tag {
      position: absolute;
      top: 0;
      left: 100%;
      z-index: 10;
      background: $tag-bg;
      color: $tag-text;
      font-weight: 500;
      font-size: sizem(10);
      writing-mode: vertical-rl;
      width: sizem(40);
      height: sizem(80);
      display: flex;
      justify-content: center;
      align-items: center;

      @media screen and (min-width: 768px) {
        font-size: size(20);
        width: size(50);
        height: size(145);
      }
    }

    // Splide 樣式調整
    .my-splide {
      width: 100%;
      height: 100%;

      // 強制 Splide track 撐滿高度
      :deep(.splide__track) {
        height: 100%;
      }

      :deep(.splide__slide) {
        height: 100%;
      }
    }

    .slide_item {
      width: 100%;
      height: 100%;
    }

    .item_pic {
      position: relative;
      width: 100%;
      height: 100%;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover; // 保持原本的裁切效果
        display: block;
      }

      // 圖片上的文字
      .caption {
        position: absolute;
        top: sizem(10);
        right: sizem(10);
        color: #fff;
        z-index: 2;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
        font-size: sizem(8);
        @media screen and (min-width: 768px) {
          font-size: size(14);
          top: size(10);
          right: size(10);
        }
      }
    }
  }

  .txt-body {
    width: 100%;

    @media screen and (min-width: 768px) {
      grid-column: 2;
      grid-row: 2;
      align-self: start;
      padding-top: size(15);
    }

    p {
      font-size: sizem(12);
      line-height: 2.1;
      color: #ddd;
      text-align: justify;
      @media screen and (min-width: 768px) {
        font-size: size(20);
      }
    }
  }
}
</style>
