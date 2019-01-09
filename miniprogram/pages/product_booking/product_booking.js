import temp_booking_fn from '../../template/booking/booking.js';
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    line_id: 0,
    line: {},
    clients: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let line_id = options.line_id;
    let temp_booking = new temp_booking_fn(this);
    this.setData({
      line_id: line_id
    });
    this._get_line();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    let clients = wx.getStorageSync("client_list");
    let client_modify = wx.getStorageSync("client_info_changed");
    let client_index = wx.getStorageSync("client_index");
    //添加客人
    if (typeof(clients) == "object") {
      let pos = this.data.clients.length;
      this.setData({
        ["clients[" + pos + "]"]: clients
      });
      wx.removeStorageSync("client_list");
    }
    //修改客人信息
    if (typeof(client_modify) == "object") {
      var i = client_modify.client_index;
      this.setData({
        ["clients[" + i + "]"]: {
          client_name: client_modify.client_name,
          client_cer_number: client_modify.client_cer_number,
          client_tel: client_modify.client_tel,
          client_certype: client_modify.client_certype,
          client_sex: client_modify.client_sex,
          client_birthday: client_modify.client_birthday,
          cer_types_index: client_modify.cer_types_index,
          sexindex: client_modify.sexindex
        }
      });
      wx.removeStorageSync("client_info_changed");
    }
    //删除客人
    if (typeof(client_index) == "string" && client_index != "" && client_index != "NaN") {
      let newlist = this.data.clients;
      newlist.splice(client_index, 1);
      this.setData({
        clients: newlist
      });
      wx.removeStorageSync("client_index");
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  /**
   * 线路信息
   */
  _get_line() {
    let _this = this;
    wx.showLoading({
      title: '数据加载中',
    });
    wx.request({
      url: app.globalData.config.lineInforUrl,
      data: {
        lineid: _this.data.line_id
      },
      method: "POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success: function(json) {
        wx.hideLoading();
        if (json.data.state == 1) {
          _this.setData({
            'line.product_name': json.data.line_name,
            'line.line_no': json.data.line_no,
            'line.days': json.data.days,
            'line.go_times': json.data.products.map(i => i.departure_time),
            'line.gotimeIndex': 0,
            'line.products': json.data.products,
            'line.pricetypeIndex': 0,
            'line.pricetypes': json.data.pricetypes
          });
        }
      }
    });
  },
  add_order(e) {
    console.log(e);
  },
  add_client(e) {
    console.log(e);
  }
})