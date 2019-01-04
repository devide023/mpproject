// components/add_clients_component/add_client_component.js
const app=getApp();
Component({
  options:{
    addGlobalClass: true,
  },
  /**
   * 组件的属性列表
   */
  properties: {
    clientInfo:Object
  },

  /**
   * 组件的初始数据
   */
  data: {
    sex: app.globalData.sex,
    sexindex: 0,
    cer_types: app.globalData.cer_types,
    cer_types_index: 0,
    birth_date: ""
  },

  /**
   * 组件的方法列表
   */
  methods: {
    cer_type_change: function (e) {
      console.log(e);
      this.setData({
        cer_types_index: e.detail.value
      });
    },
    sex_change: function (e) {
      console.log(e);
      this.setData({
        sexindex: e.detail.value
      });
    },
    bind_birthdayChange: function (e) {
      console.log(e);
      this.setData({
        birth_date: e.detail.value
      });
    },
    /**保存数据，并触发事件 */
    formSubmit: function (e) {
      wx.removeStorageSync("client_list");
      const myEventDetail = {}; // detail对象，提供给事件监听函数
      myEventDetail["client_name"] = e.detail.value.client_name;
      myEventDetail["client_cer_number"] = e.detail.value.client_cer_number;
      myEventDetail["client_tel"] = e.detail.value.client_tel;
      myEventDetail["client_certype"] = this.data.cer_types[this.data.cer_types_index];
      myEventDetail["client_sex"] = this.data.sex[this.data.sexindex];
      myEventDetail["client_birthday"] = this.data.birth_date;
      myEventDetail["sexindex"] = this.data.sexindex;
      myEventDetail["cer_types_index"] = this.data.cer_types_index;
      wx.setStorageSync("client_list", myEventDetail);
      let pages = getCurrentPages();
      wx.navigateBack({
        delta: pages.length - 2
      });
    },
    /**
     * 取消事件
     */
    cancel_client: function (e) {
      wx.removeStorageSync("client_list");
      let pages = getCurrentPages();
      wx.navigateBack({
        delta: pages.length-2
      });
    },
    lifetimes:{
      created: function (e) {
        console.log(this.data);
      },
      attached: function () {
        console.log(this.data);
      },
      ready: function () {
        
      }

    }
  }
})
