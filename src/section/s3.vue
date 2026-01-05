<template>
  <div class="s3 font-['Noto_Serif_TC',serif]">
    <div class="s3_1">
      <div class="text">
        <h2 data-aos="zoom-in">
          城南生活
          <span>最會呼吸的地段</span>
        </h2>
        <h3 data-aos="zoom-in">從植物園到青年公園，住進台北最Chill的一公里</h3>
        <p data-aos="zoom-in">
          在台北，想過一種不被催促的日子，就住進城南。這裡，是台北最有生活韻味的區域：從紀州庵的詩意午后、植物園的綠意清晨，到中正紀念堂的藝文展演，每一站，都是生活的風景。鼎吉水岸，以水岸純住的姿態，落址在城市最豐饒的節奏中。
        </p>
      </div>
      <div class="pic">
        <div class="life">life</div>
        <div class="pic_content">
          <img
            data-aos="zoom-in"
            src="./s3/pic01.png"
            alt="pic"
          />
          <p class="directions font-['Noto_Sans_TC',serif]">植物園</p>
        </div>
      </div>
    </div>
    <div class="s3_2">
      <div class="text">
        <h2 data-aos="zoom-in">
          勝過大安森林
          <span>城南真正的綠生活</span>
        </h2>
        <h3 data-aos="zoom-in">被17萬坪綠地環繞的日常，才叫台北的高級自由</h3>
        <p data-aos="zoom-in">
          青年公園24.6公頃 ×
          中正河濱34公頃，總量超越大安森林的綠意，早晨慢跑、晨泳，午後野餐、網球到傍晚散步，公園不再是目的地，而是生活的延伸。
        </p>
      </div>
      <div class="pic">
        <img
        data-aos="zoom-in"
          src="./s3/pic02.png"
          alt="pic"
        />
        <p class="directions font-['Noto_Sans_TC',serif]">青年公園</p>
        <div class="green">Green</div>
      </div>
    </div>
    <div class="s3_3">
      <div class="text">
        <h2 data-aos="zoom-in">
          <data> 靜中有動 </data>
          <span><data>三線交會的</data>從容節奏</span>
        </h2>
        <h3 data-aos="zoom-in">古亭＋植物園雙站串聯，新蘆＋新店＋萬大線三軌通勤日常</h3>
        <p data-aos="zoom-in">
          城南生活，安靜卻不偏遠。騎車五分鐘古亭雙捷運站+未來萬大線植物園站，三線雙站盡在咫尺，無論是通勤北市、串聯雙北，還是週末藝文走跳，交通節奏恰到好處。
        </p>
      </div>
      <div class="pic">
        <img
        data-aos="zoom-in"
          src="./s3/pic03.png"
          alt="pic03"
        />
        <!-- <p class="directions font-['Noto_Sans_TC',serif]">捷運古亭站 </p>
        <div class="transportation">Transportation</div> -->
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s3 {
  h2 {
    font-weight: 600;
    font-size: sizem(28);
    @media screen and (min-width: 768px) {
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

  h3 {
    font-weight: 500;
    line-height: 1.7;
    font-size: sizem(14);
    padding-top: sizem(20);
    padding-bottom: sizem(10);
    @media screen and (min-width: 768px) {
      font-size: size(24);
      padding-top: size(30);
      padding-bottom: size(15);
    }
  }

  p {
    text-align: justify;
    font-size: sizem(12);
    font-weight: 500;
    line-height: 2.1;

    @media screen and (min-width: 768px) {
      font-size: size(20);
    }
  }

  .s3_1 {
    @media screen and (min-width: 768px) {
      margin-top: size(185);
      display: flex;
      align-items: flex-start;
    }

    .text {
      background-color: #fff;
      padding: sizem(50) sizem(50) sizem(20) sizem(50);
      @media screen and (min-width: 768px) {
        width: 54%;
        margin-top: size(50);

        border-left: solid size(215) #8fb538;
        padding-left: size(150);
        padding-right: size(135);
        padding-top: size(90);
        padding-bottom: size(230);
        order: 1;
      }

      h2 {
        color: #8fb538;
      }

      h3 {
        color: #333;
      }

      p {
        color: #808080;
      }
    }
    .pic {
      position: relative;
      border-right: solid sizem(10) #8fb538;
      @media screen and (min-width: 768px) {
        width: 46%;
        border-right: solid size(15) #8fb538;
        margin-bottom: size(135);
        order: 2;
      }
      .life {
        color: #808080;
        font-weight: 500;
        line-height: 1.7;
        margin-left: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #e6e6e6;
        width: sizem(80);
        height: sizem(37);
        font-size: sizem(10);

        @media screen and (min-width: 768px) {
          width: size(185);
          height: size(50);
          font-size: size(20);
        }
      }

      img {
        width: 100%;
      }

      .directions {
        position: absolute;
        bottom: sizem(10);
        right: sizem(10);
        font-size: sizem(8);
        color: #fff;
        line-height: 1;
        @media screen and (min-width: 768px) {
          bottom: size(10);
          right: size(10);
          font-size: size(14);
        }
      }
    }
  }
  .s3_2 {
    @media screen and (min-width: 768px) {
      display: flex;
      align-items: flex-start;
      padding-bottom: size(150);
    }
    .pic {
      position: relative;
      padding-right: sizem(10);
      img {
        width: 100%;
      }

      &::before {
        content: '';
        background: #8fb538;
        position: absolute;
        width: sizem(10);
        height: sizem(125);
        right: 0;
        top: 0;
        @media screen and (min-width: 768px) {
          width: size(215);
          height: size(35);
          bottom: 0;
          top: unset;
        }
      }

      @media screen and (min-width: 768px) {
        order: 1;
        width: 48%;
        padding-bottom: size(35);
        padding-right: 0;
      }

      .directions {
        position: absolute;
        bottom: sizem(10);
        right: sizem(20);
        font-size: sizem(8);
        color: #fff;
        line-height: 1;
        @media screen and (min-width: 768px) {
          top: size(10);
          right: size(10);
          font-size: size(14);
        }
      }

      .green {
        color: #8fb538;
        font-weight: 500;
        line-height: 1.7;
        margin-left: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fff;
        width: sizem(80);
        height: sizem(37);
        font-size: sizem(10);
        position: absolute;
        right: sizem(10);
        top: 0;

        @media screen and (min-width: 768px) {
          width: size(185);
          height: size(50);
          font-size: size(20);
          top: unset;
          right: 0;
          bottom: size(35);
        }
      }
    }
    .text {
      color: #fff;
      background: #8fb538;
      padding: sizem(50);
      @media screen and (min-width: 768px) {
        order: 2;
        width: 52%;
        margin-top: size(160);
        padding: size(160) size(260) size(101) size(225);
      }
    }
  }
  .s3_3 {
    overflow: hidden;
    @media screen and (min-width: 768px) {
      display: flex;
      align-items: flex-start;
    }

    .text {
      margin-top: sizem(100);
      padding-left: sizem(50);
      padding-right: sizem(50);
      margin-bottom: sizem(20);
      @media screen and (min-width: 768px) {
        width: 48%;
        margin-top: size(280);
        padding-left: size(280);
        padding-right: size(225);
      }

      h2 {
        color: #8fb538;
        position: relative;
        data {
          color: #fff;
          position: relative;
          z-index: 1;
        }
        &::after {
          content: '';
          position: absolute;
          background: #8fb538;
          width: 50dvw;
          height: 50dvh;
          bottom: sizem(-2.5);
            right: sizem(164);
          @media screen and (min-width: 768px) {
            bottom: size(-10);
            right: size(235);
          }
        }
      }

      h3 {
        color: #333;
      }

      p {
        color: #808080;
      }
    }

    .pic {
      @media screen and (min-width: 768px) {
        margin-bottom: size(130);
        margin-top: size(170);
        width: 52%;
      }
      img{
        width: 100%;
      }
    }
  }
}
</style>
