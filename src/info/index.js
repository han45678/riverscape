const caseName = '鼎吉水岸';
export default {
  caseid: '20c8665b-1c05-4b43-8961-3ed360ea1de5',
  address1: '接待會館', //按鈕區的--- 如空白會只呈現地址
  address2: '接待會館', //map點下確認的--- 如空白會顯示"導航地址"
  address: '台北市中正區和平西路一段126號',
  googleSrc: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3615.2849943033348!2d121.51373079618811!3d25.02440059248692!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a992b61df5cd%3A0xd768b9b4d62f3deb!2z6byO5ZCJ5rC05bK4!5e0!3m2!1szh-TW!2stw!4v1767775625453!5m2!1szh-TW!2stw',
  googleLink: 'https://maps.app.goo.gl/JKKSVBipvGHEgJcg8',
  phone: '(02)2367-9198',
  fbLink: 'https://www.facebook.com/riverscape.H/',
  fbMessage: 'https://m.me/riverscape.H/',
  caseName: caseName,
  houseInfos: [
    ['投資興建', '鼎吉建設股份有限公司'],
    ['建築設計', '以兆聯合建築師事務所'],
    ['公設設計', '如榆建築及設計事務所'],
    ['營造工程', '華林營造股份有限公司'],
    ['建照號碼', '112建字第0277號'],
    ['基地地址', '台北市中正區水源路163號'],
    ['接待中心', '台北市中正區和平西路一段126號'],
    ['企劃銷售', '賦盈廣告行銷股份有限公司']
  ],
  gtmCode: ['GTM-00000000'], // 可放置多個
  //recaptcha_site_key_v2: "6LfGUjEaAAAAANYvhZQx5imGm23pRt0V-rOvkpNC", //主2
  recaptcha_site_key_v2: "6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz", //主1
  //recaptcha_site_key_v2: '6LdbrqAmAAAAAPj2D_6cBbflea1livK9Uud4FGmN', //主3
  recaptcha_site_key: '6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s', // recaptcha v3
  recaptcha_user_token: '6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa',
  order: {
    title: '立即預約',
    subTitle: '歡迎預約，將有專人與您聯絡，我們將竭誠為您服務'
  },
  // 底下2個 沒項目就會隱藏
  // 控制固定板的新欄位
  // room_type: ["兩房","三房"],
  selectFields: {
    gender: {
      title: '性別',
      hold: '請選擇性別',
      option: ['男', '女'], // 選項放在這裡
      bypass: false // 假設性別也是必填或非略過項目
    },
    room_type: {
      title: '需求房型',
      hold: '請選擇房型',
      option: ['兩房', '三房'],
      bypass: false
    }
    //budget: {
    //  title: "購屋預算",
    //  hold: "請選擇區間",
    //  option: ["1600-2000萬", "2000-2500萬", "2500萬以上"],
    //  bypass:false, //必填開啟使用
    //},
    /*
        use_type: {
          title: "使用用途",
          hold: "請選擇用途",
          option: ["自住", "投資", "租賃"]
      },
        */
  },

  navList: [
    /*
        {
            name: "雙核心地段",
            target: ".s3",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "交通中軸",
            target: ".s4",
            offset: "-60",
            offsetmo: "0",
        }
    */
  ]
};
