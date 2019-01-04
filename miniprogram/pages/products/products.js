var app = getApp();
Page({
  data: {
    host: app.globalData.config.imghost,
    inputShowed: false,
    inputVal: "",
    line_list: [],
    product_category: []
  },
  onLoad: function(options) {
    console.log(options);
    let query={};
    if(Object.keys(options).length==0)
    {
      query["pid"]=0;
    }
    else
    {
      query["pid"] = options.pid
    }
    console.log(query);
    this._get_lines(query);
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
  },
  /**
   * 线路列表
   */
  _get_lines(querydata) {
    var _this = this;
    wx.showNavigationBarLoading();
    wx.showLoading({
      title: '加载中',
    });
    wx.request({
      url: app.globalData.config.lineUrl,
      method: "POST",
      data: querydata,
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success(json) {
        wx.hideNavigationBarLoading();
        wx.hideLoading();
        console.log(json.data);
        let newlist = _this.data.line_list.concat(json.data.list);
        _this.setData({
          line_list: newlist
        });
      }
    });
  }

});