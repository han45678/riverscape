<script setup>
import { computed, getCurrentInstance } from 'vue';

// 假設你的環境有 mixin 或 global properties，若無可移除這段
const globals = getCurrentInstance()?.appContext.config.globalProperties;
const isMobile = computed(() =>
  globals?.$isMobile ? globals.$isMobile() : false
);
</script>

<template>
  <section
    class="hero-section font-['Noto_Serif_TC',serif]"
    id="hero"
  >
    <div class="txt-group">
      <h1
        class="main-title"
        data-aos="zoom-in"
        data-aos-delay="0"
      >
        <span class="accent">Casual</span>
        <span class="white">life</span>
      </h1>

      <div
        class="sub-title"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        The New Way to Live in South Taipei —<br />
        Chill, Classy, and Just Right
      </div>
    </div>

    <div
      class="location-tag"
      data-aos="zoom-in"
      data-aos-delay="400"
    >
      Location
    </div>

    <div class="disclaimer font-['Noto_Sans_TC',serif]">
      空拍外觀3D合成示意圖
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

$color-green: #a8d664;
$color-white: #ffffff;

.hero-section {
  @apply relative;
  width: 100%;
  height: 100dvh;
  background:url("/src/section/s4/bg.webp") 30% center no-repeat;
  background-size: cover;
  color: $color-white;
  font-size: sizem(14);
  @media screen and (min-width: 768px) {
    background: url('./s4/bg.webp') bottom center no-repeat;
    background-position: center;
    max-height: size(1080);
    min-height: size(900);
    font-size: size(55);
  }


  .txt-group {
    position: absolute;
    text-align: left;
    z-index: 1;
    left: sizem(50);
      bottom: sizem(90);
    @media screen and (min-width: 768px) {
      left: size(420);
      bottom: size(215);
    }
  }

  .main-title {
    font-weight: 100;
    line-height: 1;
    margin-bottom: 0.3em;
    font-style: italic; // 斜體

    span {
      display: inline-block;
    }

    .accent {
      color: $color-green;
      font-size: 3.5em;
      margin-right: 0.1em;
      @media screen and (min-width: 768px) {
        font-size: size(124);
      }
    }

    .white {
      color: $color-green;
      font-size: 2.2em; // 調整 life 的大小
      font-weight: 300;
      @media screen and (min-width: 768px) {
        font-size: size(64);
      }
    }
  }

  .sub-title {
    font-size: 0.6em;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.9);
    // padding-left: 0.5em;
    @media screen and (min-width: 768px) {
      font-size: size(24);
    }
  }

  // 左下角 Location
  .location-tag {
    position: absolute;
    bottom: 0;
    left: 0;
    background: #fff;
    color: #8fb538;
    font-size: sizem(10);
    font-weight: 500;
    width: sizem(160);
    height: sizem(50);

    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (min-width: 768px) {
      font-size: size(20);
      width: size(435);
      height: size(50);
    }
  }

  // 右下角 Disclaimer
  .disclaimer {
    position: absolute;
    right: sizem(10);
    bottom: sizem(10);
    font-size: sizem(8);
    font-weight: 400;

    @media screen and (min-width: 768px) {
      font-size: size(14);
      right: size(10);
      bottom: size(10);
    }
  }
}
</style>
