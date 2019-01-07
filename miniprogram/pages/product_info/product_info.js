//const product_detail_fn = require('../../template/line_info/line_info.js')
import product_detail_fn from '../../template/line_info/line_info.js'
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    line_id:0,
    line:{}
  },
/**
 * 线路信息
 */
  _get_line(){
    let _this = this;
    wx.showLoading({
      title: '数据加载中',
    });
    wx.request({
      url: app.globalData.config.lineInforUrl,
      data: { lineid:_this.data.line_id},
      method: "POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success:function(json){
        console.log(json.data.list);
        wx.hideLoading();
        if(json.data.state==1)
        {
        _this.setData({
          'line.product_name': json.data.line_name,
          'line.line_no': json.data.line_no,
          'line.days': json.data.days,
          'line.go_time': json.data.products.map(i=>i.departure_time),
          'line.gotimeIndex':0,
          'line.products': json.data.products,
          'line.product': json.data.products[0]
          });
        }
      }
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    console.log(product_detail_fn);
    product_detail_fn.initFn(this);
    this.setData(
      {
        line_id:options.line_id
      }
    );
    this._get_line();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})