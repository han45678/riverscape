<template>
  <article
    class="lifestyle font-['Noto_Serif_TC',serif]"
    id="lifestyle"
  >
    <div class="grid-box">
      <div
        class="img-item"
        data-aos="fade-up"
      >
        <img
          src="http://placehold.jp/320x320.png"
          alt="pic"
        />
      </div>
      <div
        class="img-item"
        data-aos="fade-up"
      >
        <img
          src="http://placehold.jp/320x320.png"
          alt="pic"
        />
      </div>
      <div
        class="img-item"
        data-aos="fade-up"
      >
        <img
          src="http://placehold.jp/320x320.png"
          alt="pic"
        />
      </div>
      <div
        class="img-item"
        data-aos="fade-up"
      >
        <img
          src="http://placehold.jp/320x320.png"
          alt="pic"
        />
      </div>
      <div
        class="img-item"
        data-aos="fade-up"
      >
        <img
          src="http://placehold.jp/320x320.png"
          alt="pic"
        />
      </div>
      <div
        class="img-item"
        data-aos="fade-up"
      >
        <img
          src="http://placehold.jp/320x320.png"
          alt="pic"
        />
      </div>
    </div>

    <div class="txt-content">
      <h3
        class="sub-title"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        發現台北城南的生活
      </h3>
      <h2
        class="main-title"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        一種講究的態度
      </h2>

      <div class="en-group">
        <p
          data-aos="fade-up"
          data-aos-delay="600"
        >
          The New Way to Live in South Taipei —
        </p>
        <p
          data-aos="fade-up"
          data-aos-delay="800"
        >
          Chill, Classy, and Just Right
        </p>
      </div>

      <span
        class="caption"
        data-aos="fade-in"
        data-aos-delay="800"
        >實景圖及情境示意圖</span
      >
    </div>

    <div class="grid-box">
      <div
        class="img-item"
        data-aos="fade-up"
      >
        <img
          src="http://placehold.jp/320x320.png"
          alt="pic"
        />
      </div>
      <div
        class="img-item"
        data-aos="fade-up"
      >
        <img
          src="http://placehold.jp/320x320.png"
          alt="pic"
        />
      </div>
      <div
        class="img-item"
        data-aos="fade-up"
      >
        <img
          src="http://placehold.jp/320x320.png"
          alt="pic"
        />
      </div>
      <div
        class="img-item"
        data-aos="fade-up"
      >
        <img
          src="http://placehold.jp/320x320.png"
          alt="pic"
        />
      </div>
      <div
        class="img-item"
        data-aos="fade-up"
      >
        <img
          src="http://placehold.jp/320x320.png"
          alt="pic"
        />
      </div>
      <div
        class="img-item"
        data-aos="fade-up"
      >
        <img
          src="http://placehold.jp/320x320.png"
          alt="pic"
        />
      </div>
    </div>
  </article>
</template>

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
  grid-template-columns: 1fr 1fr 1fr;
  padding: 0;
  gap: sizem(2.5);
  @media screen and (min-width: 768px) {
    gap: size(5);
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  }

  .img-item {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;

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
}

// 文字內容區塊
.txt-content {
  position: relative;
  padding: sizem(15) sizem(50) sizem(50) sizem(50);
  color: #8dbf43;

  @media screen and (min-width: 768px) {
    padding: size(70) 0;
  }

  .sub-title {
    font-size: sizem(18);
    letter-spacing: 0.1em;
    margin-bottom: sizem(10);
    font-weight: 600;

    @media screen and (min-width: 768px) {
      margin-bottom: size(20);
      width: size(500);
      margin-left: auto;
      margin-right: auto;
      font-size: size(38);
      &::after {
        content: '＿';
        display: inline-block;
        margin-left: size(-15);
      }
    }
  }

  .main-title {
    font-size: sizem(32);
    font-weight: 600;
    letter-spacing: 0.05em;

    @media screen and (min-width: 768px) {
      font-size: size(64);
      width: size(500);
      margin-left: auto;
      margin-right: auto;
    }
  }

  .en-group {
    color: #808080;
    font-size: sizem(12);
    line-height: 1.6;
    font-weight: 500;
    padding-left: sizem(50);
    padding-right: sizem(50);
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    transform: translateY(50%);
    z-index: 1;
    p {
      &:nth-child(2) {
        color: #fff;
      }
    }

    @media screen and (min-width: 768px) {
      font-size: size(24);
      width: size(500);
      margin-left: auto;
      margin-right: auto;
      padding-left: 0;
      padding-right: 0;
    }
  }

  .caption {
    display: block;
    font-size: sizem(10);
    color: #808080;
    text-align: center;
    position: absolute;
    top: sizem(5);
    right: sizem(5);
    font-size: sizem(8);

    @media screen and (min-width: 768px) {
      right: size(20);
      top: size(10);
      font-size: size(12);
    }
  }
}
</style>
