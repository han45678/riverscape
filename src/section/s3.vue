<template>
  <div class="landing-page font-['Noto_Serif_TC',serif]">
    <section class="sec-life">
      <div class="content">
        <div
          class="txt"
          data-aos="fade-up"
        >
          <div class="deco-bar"></div>
          <div class="t1">城南生活<br />最會呼吸的地段</div>
          <div class="t2">從植物園到青年公園，住進台北最Chill的一公里</div>
          <div class="t3">
            在台北，想過一種不被催促的日子，就住進城南。這裡是台北最有生活韻味的區域；從五點鐘的詩意午後，植物園的綠意清晨，到中正紀念堂的藝文展演，每一站，都是生活的風景。無需遠求，以水岸純住的姿態，深居在城市最豐饒的綠帶中。
          </div>
        </div>
        <div
          class="img-box"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div class="tag">Life</div>
          <img
            src="http://placehold.jp/885x590.png"
            class="img"
          />
        </div>
      </div>
    </section>

    <section class="sec-green">
      <div class="content">
        <div
          class="txt"
          data-aos="fade-up"
        >
          <div class="t1">勝過大安森林<br />城南真正的綠生活</div>
          <div class="t2">被17萬坪綠地環繞的日常，才叫台北的高級自由</div>
          <div class="t3">
            青年公園24.4公頃 ×
            中正河濱34公頃，總量超越大安森林的綠意。早晨慢跑、晨泳，午後野餐，揮球到傍晚散步，公園不再是目的地，而是生活的延伸。
          </div>
        </div>
        <div
          class="img-box"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div class="tag white">Green</div>
          <img
            src="http://placehold.jp/920x760.png"
            class="img"
          />
        </div>
      </div>
    </section>

    <section class="sec-transport">
      <div class="content">
        <div
          class="txt"
          data-aos="fade-up"
        >
          <div class="deco-bar big"></div>
          <div class="t1">靜中有動<br />三線交會的從容節奏</div>
          <div class="t2">
            古亭+植物園雙站串聯，新蘆+新店+萬大線三軌通勤日常
          </div>
          <div class="t3">
            城南生活，安靜卻不偏遠。騎車五分鐘古亭雙捷運站，未來萬大線植物園站。三線雙站盡在咫尺，無論是通勤北市，串聯雙北，還是週末藝文走跳，交通節奏恰到好處。
          </div>
        </div>
        <div
          class="img-box"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div class="tag bottom">Transportation</div>
          <img
            src="http://placehold.jp/990x660.png"
            class="img"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

// 如果需要 ScrollTrigger 或其他 JS 邏輯可在此撰寫
// 圖片請替換為實際專案路徑，例如: new URL('./assets/img.jpg', import.meta.url).href
</script>

<style lang="scss" scoped>
// 依照你的要求引入 function.scss
@import '@/assets/style/function.scss';

// 定義變數
$color-green: #8ab83e;
$color-dark: #333333;
$color-gray: #666666;
$color-white: #ffffff;

.landing-page {
  width: 100%;
  overflow-x: hidden;
  background: $color-white;
}

// 共用 Mixin 或樣式
section {
  width: 100%;
  position: relative;
  // 手機版間距
  margin-bottom: sizem(60);

  @media screen and (min-width: 768px) {
    // 電腦版間距
    margin-bottom: size(120);
    display: flex;
    justify-content: center;
  }
}

.content {
  display: flex;
  flex-direction: column; // 手機預設垂直排列
  width: 100%;

  @media screen and (min-width: 768px) {
    flex-direction: row; // 電腦版水平排列
    align-items: center;
    max-width: size(1600); // 限制最大寬
    margin: 0 auto;
    padding: 0 size(50);
  }
}

// --- 通用文字樣式 (Mobile First) ---
.txt {
  position: relative;
  padding: sizem(40) sizem(25);
  box-sizing: border-box;

  .t1 {
    color: $color-green;
    font-size: sizem(28);
    font-weight: bold;
    line-height: 1.3;
    margin-bottom: sizem(15);
  }

  .t2 {
    color: $color-dark;
    font-size: sizem(18);
    font-weight: bold;
    line-height: 1.4;
    margin-bottom: sizem(20);
  }

  .t3 {
    color: $color-gray;
    font-size: sizem(14);
    line-height: 1.8;
    text-align: justify;
  }

  // 電腦版文字調整
  @media screen and (min-width: 768px) {
    padding: 0;
    flex: 1;

    .t1 {
      font-size: size(48);
      margin-bottom: size(30);
    }
    .t2 {
      font-size: size(24);
      margin-bottom: size(35);
    }
    .t3 {
      font-size: size(18);
      max-width: size(600); // 限制文字寬度增強閱讀性
    }
  }
}

// --- 通用圖片樣式 ---
.img-box {
  width: 100%;
  position: relative;
  height: sizem(300); // 手機版圖片高度

  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .tag {
    position: absolute;
    top: sizem(-15);
    right: 0;
    background: #f0f0f0;
    padding: sizem(5) sizem(15);
    font-size: sizem(12);
    color: $color-gray;
    letter-spacing: 0.1em;
    z-index: 2;
  }

  @media screen and (min-width: 768px) {
    flex: 1.2; // 圖片佔比較大
    height: size(600); // 電腦版圖片高度

    .tag {
      top: size(40);
      right: auto;
      left: size(-20); // 標籤稍微突出去
      padding: size(8) size(30);
      font-size: size(16);
    }
  }
}

// --- 個別 Section 微調 ---

// 1. Life & 3. Transport (結構相似)
.sec-life,
.sec-transport {
  .deco-bar {
    position: absolute;
    background: $color-green;
    // 手機版裝飾條
    width: sizem(5);
    height: sizem(60);
    left: sizem(10);
    top: sizem(45);

    &.big {
      height: sizem(100); // Transport 的條比較長
    }

    @media screen and (min-width: 768px) {
      width: size(60);
      height: 120%; // 拉長
      left: size(-80);
      top: size(-20);
      opacity: 1;

      &.big {
        width: size(140);
        left: size(-160);
        top: size(0);
      }
    }
  }

  @media screen and (min-width: 768px) {
    .content {
      gap: size(80);
    }
  }
}

// 3. Transport 特別調整
.sec-transport {
  .img-box .tag {
    @media screen and (min-width: 768px) {
      top: auto;
      bottom: 0;
      left: auto;
      right: 0;
      background: $color-green;
      color: #fff;
    }
  }
}

// 2. Green (特殊版型：手機綠底在上，電腦綠底在右)
.sec-green {
  .content {
    // 讓內容滿版
    max-width: 100%;
    padding: 0;

    @media screen and (min-width: 768px) {
      // 電腦版反轉順序：圖片左、文字右
      flex-direction: row-reverse;
    }
  }

  .txt {
    background: $color-green;

    // 手機版文字顏色覆蓋為白色
    .t1,
    .t2,
    .t3 {
      color: $color-white;
    }
    .t2 {
      opacity: 0.9;
    }
    .t3 {
      opacity: 0.8;
    }

    @media screen and (min-width: 768px) {
      height: size(700); // 電腦版高度
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: size(80);
      padding-right: size(150); // 右邊留白多一點
    }
  }

  .img-box {
    @media screen and (min-width: 768px) {
      height: size(700); // 與文字區等高
    }

    .tag {
      &.white {
        background: $color-white;
        color: $color-green;
      }
      @media screen and (min-width: 768px) {
        left: auto;
        right: size(20);
        top: auto;
        bottom: size(40);
      }
    }
  }
}
</style>
