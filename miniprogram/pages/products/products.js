var app = getApp();
Page({
  data: {
    host: "http://www.yzlcq.com",
    inputShowed: false,
    inputVal: "",
    line_list:[],
    product_category: [{
        title: "签证服务",
        url: "",
        icon: "fa-id-card-o"
      },
      {
        title: "出境定制旅游",
        url: "",
        icon: "fa-flask"
      },
      {
        title: "公商务出行",
        url: "",
        icon: "fa-suitcase"
      },
      {
        title: "研学教育",
        url: "",
        icon: "fa-university"
      },
      {
        title: "当季热推",
        url: "",
        icon: "fa-thermometer-full"
      }
    ]
  },
  onLoad: function() {
    var _this = this;
    wx.showNavigationBarLoading();
    wx.showLoading({
      title: '加载中',
    });
      wx.request({
        url: app.globalData.config.lineUrl,
        method:"POST",
        data:{},
        header: {
          'content-type': 'application/x-www-form-urlencoded' // 默认值
        },
        success(json){
          wx.hideNavigationBarLoading();
          wx.hideLoading();
          console.log(json.data);
          _this.setData({
            line_list:json.data.list
          })
        }
      });
  },
  showInput: function() {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function() {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function() {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function(e) {
    this.setData({
      inputVal: e.detail.value
    });
  }
});