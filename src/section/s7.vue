<script setup>
import { ref, onMounted } from 'vue'
const isMobile = ref(false)
onMounted(() => {
  isMobile.value = window.innerWidth <= 768
})
</script>

<template>
  <section
    class="s7"
    id="s7"
  >
    <div class="text">
      <div class="text_content">
        <h2 
        data-aos="fade-up">
          極致選品
          <span>為生活注入國際規格的講究</span>
        </h2>
        <p data-aos="fade-up" data-aos-delay="200">
          24項全球精選品牌，從裡到外皆是藝術<br />
          在鼎吉水岸，建材不是選配，而是一種品味的基本標準。
        </p>
      </div>
      <div class="materials" data-aos="fade-left" data-aos-delay="200">Architecture Materials</div>
    </div>
      <img src="./s7/logosm.png" class="logo" alt="logo" v-if="isMobile" data-aos="fade-left">
      <img src="./s7/logos.png" class="logo" alt="logo" v-else data-aos="fade-left">
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

// 顏色定義 (吸取自 S7 設計稿)
$color-green-bg: #8fb538; // 背景深綠
$color-green-tag: #cdef6f; // 標籤淺綠
$color-white: #ffffff;
$color-text-white: #ffffff;

.s7 {
  @apply relative;
  width: 100%;
  background-color: $color-green-bg;

  padding-top: sizem(65);
  padding-left: sizem(50);
  padding-bottom: sizem(20);

  @media screen and (min-width: 768px) {
    padding-top: size(370);
    padding-left: size(140);
    padding-bottom: size(140);
    display: flex;
  }

  .text {
    color: #fff;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    @media screen and (min-width: 768px) {
      width: 30%;
    }
    .text_content {
      padding-right: sizem(50);
      margin-bottom: sizem(15);
      @media screen and (min-width: 768px) {
        margin-bottom: 0;
        padding-right: size(100);
      }

      h2 {
        font-weight: 600;
        font-size: sizem(28);
        margin-bottom: sizem(20);

        @media screen and (min-width: 768px) {
          margin-bottom: size(30);
          font-size: size(44);
        }
        span {
          display: block;
          font-size: sizem(22);

          @media screen and (min-width: 768px) {
            font-size: size(34);
          }
        }
      }

      p {
        text-align: justify;
        line-height: 1.6;
        @media screen and (min-width: 768px) {
          font-size: size(24);
        }
      }
    }

    .materials {
      margin-top: auto;
      background-color: #c7ff69;
      color: #000;
      text-align: center;
      font-weight: 500;
      line-height: 1.7;
      display: flex;
      justify-content: center;
      align-items: center;
      width: sizem(160);
      height: sizem(37);
      position: absolute;
      bottom:-1.9em;
      right: 0;
      font-size: sizem(10);
      z-index: 3;
      @media screen and (min-width: 768px) {
        width: 100%;
        height: size(50);
        font-size: size(20);
        position: static;
      }
    }
  }
  .logo {
    background-color: #fff;
   
    height: sizem(405);
    @media screen and (min-width: 768px) {
      width: 70%;
      height: size(455);
      display: flex;
    }
    img{
      height: auto;
      width: 100%;
      @media screen and (min-width: 768px) {
      width: 50%;
      }
    }
  }
}
</style>
