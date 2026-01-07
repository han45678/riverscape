<template>
  <div>
    <!-- <div class="contact-info-img"></div> -->
    <div
      class="contact-info mx-auto flex flex-col items-center justify-between"
    >
      <!--  <div class="logo" data-aos="zoom-in" data-aos-delay="600">
      <img src="@/section/s2/logobg.webp"><img src="@/section/s2/logo.svg"></div> -->
      <div class="flex justify-between w-full contact-item-box">
        <div
          class="flex contact-item justify-center items-center"
          @click="
            modalOpen = true;
            modalType = 'phone';
            onPhoneClick();
          "
          v-if="info.phone"
        >
          <img
            src="//h35.banner.tw/img//form/phone.svg"
            alt="電話"
            srcset=""
          />
          <div>{{ info.phone }}</div>
        </div>
        <div
          class="flex contact-item justify-center items-center"
          @click="
            modalOpen = true;
            modalType = 'fb';
            onMsgClick();
          "
        >
          <img
            src="//h35.banner.tw/img//form/messenger.svg"
            alt="Facebook 諮詢"
            srcset=""
          />
          <div>Facebook 諮詢</div>
        </div>
        <div
          class="flex contact-item justify-center items-center btfanpage"
          @click="
            open();
            onFBClick();
          "
        >
          <img
            src="//h35.banner.tw/img//form/fb.svg"
            alt="前往粉絲專頁"
            srcset=""
          />
          <div>前往粉絲專頁</div>
        </div>
      </div>
      <div
        class="flex justify-between w-full contact-item-box no-gap"
        v-if="info.address"
      >
        <div class="flex contact-item justify-center items-center address">
          <div>
            <span v-if="info.address1">{{ info.address1 }}：</span
            >{{ info.address }}
          </div>
        </div>
        <div
          class="flex contact-item justify-center items-center googlemap"
          @click="
            modalOpen = true;
            modalType = 'gmap';
            onMapClick();
          "
        >
          <img
            src="//h35.banner.tw/img//form/gmap.svg"
            alt="導航 GoogleMap"
            srcset=""
          />
          <div>導航 GoogleMap</div>
        </div>
      </div>
    </div>
  </div>

  <!-- Mobile contact info -->
  <div
    v-if="$isMobile()"
    class="bg-white mo-contact-info flex justify-between w-full contact-item-box items-center"
  >
    <div
      class="flex flex-1 flex-col contact-item justify-center items-center"
      @click="
        modalOpen = true;
        modalType = 'phone';
        onPhoneClick();
      "
      v-if="info.phone"
    >
      <img
        src="//h35.banner.tw/img//form/phone.svg"
        alt="撥打電話"
        srcset=""
      />
      <div>撥打電話</div>
    </div>
    <div
      class="flex flex-1 flex-col contact-item justify-center items-center"
      @click="
        modalOpen = true;
        modalType = 'fb';
        onMsgClick();
      "
    >
      <img
        src="//h35.banner.tw/img//form/messenger.svg"
        alt="FB 諮詢"
        srcset=""
      />
      <div>FB 諮詢</div>
    </div>
    <div
      class="flex flex-1 flex-col contact-item justify-center items-center"
      @click="scrollTo('.order')"
    >
      <img
        src="//h35.banner.tw/img//form/pen.svg"
        alt="預約賞屋"
        srcset=""
      />
      <div>預約賞屋</div>
    </div>
    <div
      class="flex flex-1 flex-col contact-item justify-center items-center"
      @click="
        modalOpen = true;
        modalType = 'gmap';
        onMapClick();
      "
      v-if="info.googleLink"
    >
      <img
        src="//h35.banner.tw/img//form/gmap.svg"
        alt="地圖導航"
        srcset=""
      />
      <div>地圖導航</div>
    </div>
  </div>

  <!-- Modal -->
  <input
    type="checkbox"
    v-model="modalOpen"
    id="contact-modal"
    class="modal-toggle"
  />
  <div class="modal -mt-20 md:-mt-72">
    <div
      class="modal-box py-12 relative flex flex-col items-center justify-center"
    >
      <label
        for="contact-modal"
        class="btn btn-sm btn-circle absolute right-4 top-4"
        >✕</label
      >
      <!-- icon -->
      <img
        class="h-12"
        v-if="modalType == 'phone'"
        src="//h35.banner.tw/img//form/phone.svg"
        alt="phone"
        srcset=""
      />
      <img
        class="h-12"
        v-else-if="modalType == 'fb'"
        src="//h35.banner.tw/img//form/messenger.svg"
        alt="fb"
        srcset=""
      />
      <img
        class="h-12"
        v-else-if="modalType == 'gmap'"
        src="//h35.banner.tw/img//form/gmap.svg"
        alt="gmap"
        srcset=""
      />
      <!-- title -->
      <div class="text-xl mt-4 font-bold">
        {{
          modalType == 'phone'
            ? '賞屋專線'
            : modalType == 'fb'
            ? 'Facebook Messenger'
            : `${info.address2 ? info.address2 : '導航地址'}`
        }}
      </div>
      <!-- content -->
      <div class="text-md mt-4">
        {{
          modalType == 'phone'
            ? info.phone
            : modalType == 'fb'
            ? '線上諮詢'
            : `${info.address}`
        }}
      </div>
      <!-- btn -->
      <div
        class="btn btn-lg bg-color1 border-0 text-white mt-12 hover:bg-color2"
        @click="go()"
        v-if="modalType != 'phone'"
        v-bind:class="{
          hidden: modalType == 'phone' && !$isMobile(),
          btlead: modalType == 'fb',
          btsearch: modalType == 'gmap',
          btcontac: modalType == 'phone'
        }"
      >
        {{
          modalType == 'phone'
            ? '撥打電話'
            : modalType == 'fb'
            ? '立即諮詢'
            : '開啟導航'
        }}
      </div>
      <!-- btn phone -->
      <div
        class="btn btn-lg bg-color1 border-0 text-white mt-12 hover:bg-color2"
        @click="go()"
        id="phonegtm"
        v-else
        v-bind:class="{
          hidden: modalType == 'phone' && !$isMobile(),
          btlead: modalType == 'fb',
          btsearch: modalType == 'gmap',
          btcontac: modalType == 'phone'
        }"
      >
        {{
          modalType == 'phone'
            ? '撥打電話'
            : modalType == 'fb'
            ? '立即諮詢'
            : '開啟導航'
        }}
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';

// --- 變數定義 (Variables) ---
$color-primary: #8FB538;
$color-primary-hover: #6c8f1c;
$color-dark-blue: #E6E6E6;
$color-bg-gray: #e6e6e6;
$color-text-white: #fff;
$color-border-light: #0006;

// --- 通用/工具類 (Utilities) ---
.bg-color1 {
  background-color: $color-primary;
}

.hover\:bg-color2:hover {
  background-color: $color-primary-hover;
}

// --- 主要區塊樣式 ---
.contact-info {
  padding: size(55) size(0);
  min-width: 680px;
  position: relative;
  z-index: 50;
  background-color: $color-bg-gray;

  @media screen and (min-width: 769px) {
    margin-top: size(65);
  }

  // Mobile RWD for container
  @media screen and (max-width: 768px) {
    width: 100%;
    min-width: 0;
    padding: sizem(80) 0 sizem(40) 0;
    margin-top: sizem(0);
    justify-content: space-between;
    background-size: sizem(450) auto;
  }

  // --- LOGO 區域 ---
  .logo {
    width: size(400);
    margin: auto;
    position: relative;

    img {
      width: 100%;

      &:first-child {
        position: relative;
        transform: rotate(-10deg);
        animation: logo-sway 5s linear infinite alternate;
      }

      &:last-child {
        margin: auto;
        width: 63.5%;
        position: absolute;
        top: 24%;
        left: 0;
        right: 0;
      }
    }

    // Mobile RWD for Logo
    @media screen and (max-width: 768px) {
      width: sizem(257);
      margin: sizem(40) auto sizem(30) auto;
    }
  }

  // --- 選單項目容器 ---
  .contact-item-box {
    position: relative;
    margin-top: size(20);
    gap: size(20);
    width: size(1100);
    min-width: 680px;

    &.no-gap {
      gap: 0 !important;
    }

    // Mobile RWD for Item Box
    @media screen and (max-width: 768px) {
      margin-top: sizem(0);
      gap: sizem(15);
      flex-direction: column;
      width: sizem(310);
      min-width: 0;
    }

    // --- 單個項目樣式 ---
    .contact-item {
      background: #8FB538;
      border: 1px solid #8FB538;
      color: $color-text-white;
      width: 100%;
      flex: 1;
      padding: 1.1em 0;
      line-height: 1.6;
      letter-spacing: 0em;
      z-index: 1;
      transition: all 0.3s;
      cursor: pointer;
      gap: 1em;

      // Icon style
      img {
        max-width: 1.69em;
        height: auto;
        max-height: 1.69em;
        filter: brightness(0) invert(1);
        transition: all 0.5s;
        margin: 0;
      }

      // Hover effect
      &:hover {
        background: $color-primary-hover;
        color: $color-text-white;
        img {
          filter: brightness(0) invert(1);
        }
      }

      // Specific Style: Address
      &.address {
        background-color: $color-text-white;
        background-image: none;
        color: #000;
        z-index: 0;
        position: relative;
        flex: 2.17;
        justify-content: center;
        // border-radius: 0.5em 0 0 0.5em;

        &::before {
          content: '';
          position: absolute;
          width: 8em;
          height: 100%;
          background-color: transparent;
          left: calc(100% - 4em);
          z-index: -1;
        }

        div {
          text-indent: 0em;
          white-space: normal;
          padding: 0 1em;
        }
      }

      // Specific Style: Google Map
      &.googlemap {
        flex: 1;
        border-left-width: 0;
      }

      // --- Mobile RWD for Items ---
      @media screen and (max-width: 768px) {
        padding: 1.1em sizem(80);
        max-width: 100%;
        white-space: nowrap;
        margin: 0;

        img {
          height: auto;
          margin: unset;
          position: absolute;
          left: calc(50% - 5em);
          transform: translateX(-50%);
        }

        div {
          text-indent: 2em;
        }

        &.address {
          // border-radius: 0.5em 0.5em 0 0;
          padding: 1.1em 0;
          margin-top: sizem(25);

          &::before {
            width: 100%;
            height: 100%;
            bottom: -50%;
            left: 0;
          }
        }

        &.address + div {
         // border-radius: 0 0 0.5em 0.5em;
        }

        &.googlemap {
          border-top-width: 0;
          border-left-width: 0;
        }
      }
    }
  }
}

// --- 手機版置底選單 (Mobile Only Fixed Bar) ---
@media screen and (max-width: 768px) {
  .mo-contact-info {
    z-index: 99;
    position: fixed;
    bottom: 0;
    left: 0;
    width: sizem(375);
    height: sizem(63);
    gap: sizem(1);
    box-shadow: 0 0 sizem(50) rgba(0, 0, 0, 0.501);
    background: $color-dark-blue;

    .contact-item {
      height: 100%;
      font-size: sizem(16);
      font-weight: 400;
      color: #333;
      border-left: 1px solid $color-border-light;

      &:first-child {
        border-left: 0;
      }

      img {
        margin-bottom: sizem(5);
        max-width: sizem(16.5);
        height: auto;
        max-height: sizem(16.5);
        filter: brightness(0) invert(.3);
      }
    }
  }
}

// --- 動畫與 Modal ---
@keyframes logo-sway {
  to {
    transform: rotate(10deg);
  }
}

.modal-box {
  img {
    filter:  invert(64%) sepia(89%) saturate(336%) hue-rotate(35deg) brightness(88%) contrast(84%);
  }
}
</style>
<script setup>
import info from '@/info';
import { inject, ref } from 'vue';
const modalOpen = ref(false);
const modalType = ref('');

const go = () => {
  if (modalType.value == 'phone') {
    window.location.href = `tel:${info.phone.replace('-', '')}`;
    setTimeout(() => {
      window.location.href = 'phoneThanks';
    }, 1000);
  } else if (modalType.value == 'fb') {
    window.open(info.fbMessage);
  } else if (modalType.value == 'gmap') {
    window.open(info.googleLink);
  }
};

const open = () => {
  window.open(info.fbLink);
};

const smoothScroll = inject('smoothScroll');
const scrollTo = (el) => {
  smoothScroll({
    scrollTo: document.querySelector(el)
  });
};
</script>
