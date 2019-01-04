// components/add_client_btncom/add_client_btncom.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    add_clientUrl: "/pages/add_client_info/add_client_info"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    add_client_infomaion:function(){
      var _this = this;
      wx.navigateTo({
        url: _this.data.add_clientUrl,
        success: function () {

        }
      });
    }
  }
})
