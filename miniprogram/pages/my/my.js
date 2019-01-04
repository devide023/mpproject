const app = getApp();
Page({
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    myitems: [
      {
        name: "我的订单",
        icon: "fa-file",
        url: "",
        note: ""
      },
      {
        name: "电子合同",
        icon: "fa-edit",
        url: "",
        note: ""
      },
      {
        name: "优惠码申请",
        icon: "fa-tasks",
        url: "",
        note: ""
      },
      {
        name: "我的优惠码",
        icon: "fa-tags",
        url: "",
        note: ""
      },
      {
        name: "我的二维码",
        icon: "fa-qrcode",
        url: "",
        note: ""
      },
      {
        name: "我的推广",
        icon: "fa-users",
        url: "",
        note: "40"
      },
    ]
  },
  onLoad: function() {},
  bindGetUserInfo(e) {
    console.log(e.detail.userInfo)
  }
});