<script setup>
import { ref } from 'vue';
</script>

<template>
  <section
    class="s7 font-['Noto_Serif_TC',serif]"
    id="s7"
  >
    <div class="text">
      <div class="text_content">
        <h2>
          極致選品
          <span>為生活注入國際規格的講究</span>
        </h2>
        <p>
          24項全球精選品牌，從裡到外皆是藝術<br />
          在鼎吉水岸，建材不是選配，而是一種品味的基本標準。
        </p>
      </div>
      <div class="materials">Architecture Materials</div>
    </div>
    <div class="logo"></div>
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
  font-size: sizem(14);

  @media screen and (min-width: 768px) {
    padding-top: size(370);
    padding-left: size(140);
    padding-bottom: size(140);
    display: flex;
  }

  .text {
    width: 30%;
    color: #fff;
    display: flex;
    flex-wrap: wrap;
    
    .text_content {
      padding-right: size(100);

      h2 {
        font-size: size(44);
        font-weight: 600;
        margin-bottom: size(30);
        span {
          display: block;
          font-size: size(34);
        }
      }

      p {
        text-align: justify;
        font-size: size(24);
        font-weight: 500;
        line-height: 1.6;
      }
    }

    .materials {
      margin-top: auto;
      background-color: #c7ff69;
      width: 100%;
      height: size(50);

      color: #000;
      text-align: center;
      font-size: size(20);
      font-weight: 500;
      line-height: 1.7;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .logo {
    width: 70%;
    height: 455px;
    background-color: #fff;
  }
}
</style>
