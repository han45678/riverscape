<script setup>
// 假設 Swiper 已經全域註冊，這裡直接使用
// 如果需要特定設定 (如 Autoplay)，可透過 props 傳入或在全域設定
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

      <swiper
        class="my-swiper"
        :autoplay="{ delay: 3000, disableOnInteraction: false }"
        :loop="true"
        :speed="1000"
      >
        <swiper-slide>
          <img
            src="./s5/pic01.webp"
            alt="pic"
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
        鷹吉建設，不只是建造房子，而是在策劃一種對未來城市的實踐。從選址開始，回應城市脈動與生活趨勢；從規劃之初，即以國際思維對話地景、文化與居住者的生活期待。<br />
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
    margin-bottom: 1.5em;
    text-align: left;
margin-bottom:sizem(15);
    @media screen and (min-width: 768px) {
      grid-column: 2;
      grid-row: 1;
      align-self: end;
      margin-bottom:size(15);
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

    .my-swiper {
      width: 100%;
      height: 100%;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }
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
