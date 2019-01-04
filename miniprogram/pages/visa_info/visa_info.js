const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    add_clientUrl: "/pages/add_client_info/add_client_info",
    visa_id: 0,
    visa_entry: {},
    client_list: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      visa_id: options.visa_id
    });
    wx.removeStorageSync("client_list");
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function(e) {
    let value = wx.getStorageSync("client_list");
    let client_index = wx.getStorageSync("client_index");
    let client_modify = wx.getStorageSync("client_info_changed");
    //添加客人
    if (typeof(value) == "object") {
      let pos = this.data.client_list.length;
      let key = "client_list[" + pos + "]";
      this.setData({
        [key]: value
      });
      wx.removeStorageSync("client_list");
    }
    //删除客人
    if (typeof(client_index)=="string" && client_index!="" && client_index!="NaN")
    {
      let newlist = this.data.client_list;
      newlist.splice(client_index,1);
      this.setData({
        client_list: newlist
      });
      wx.removeStorageSync("client_index");
    }
    //修改客人信息
    if (typeof (client_modify)=="object")
    {
      var i = client_modify.client_index;
      this.setData({
        ["client_list["+i+"]"]:{
          client_name:client_modify.client_name,
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

  remove_client(e){
    console.log(e);
    let client_id = e.detail.client_id;
    let newlist = this.data.client_list;
    newlist.splice(client_id, 1);
    this.setData({
      client_list: newlist
    });
  }

})