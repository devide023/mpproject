// components/edit_clientinfo_component/edit_clientinfo_component.js
const app = getApp();
Component({
  options: {
    addGlobalClass: true,
  },
  /**
   * 组件的属性列表
   */
  properties: {
    clientInfo: {
      type: Object,
      observer(newVal, oldVal, changedPath) {
        let arr = Object.keys(newVal);
        if (arr.length > 0) {
          this.setData({
            client_name: newVal.client_name,
            cer_types_index: newVal.cer_types_index,
            client_cer_number: newVal.client_cer_number,
            sexindex: newVal.sexindex,
            client_tel: newVal.client_tel,
            client_birthday: newVal.client_birthday
          });
        }
      }
    },
    clientIndex: {
      type: Number,
      observer(newVal, oldVal) {
        this.setData({
          client_index: newVal
        });
      }
    },

  },

  /**
   * 组件的初始数据
   */
  data: {
    sex: app.globalData.sex,
    cer_types: app.globalData.cer_types,
    client_name: "",
    cer_types_index: 0,
    client_cer_number: "",
    sexindex: 0,
    client_tel: "",
    client_birthday: "",
    client_index: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    cer_type_change: function(e) {
      console.log(e);
      this.setData({
        cer_types_index: e.detail.value
      });
    },
    sex_change: function(e) {
      console.log(e);
      this.setData({
        sexindex: e.detail.value
      });
    },
    bind_birthdayChange: function(e) {
      console.log(e);
      this.setData({
        client_birthday: e.detail.value
      });
    },
    formSubmit: function(e) {
      console.log(e);
      const myEventDetail = {};
      myEventDetail["client_name"] = e.detail.value.client_name;
      myEventDetail["client_cer_number"] = e.detail.value.client_cer_number;
      myEventDetail["client_tel"] = e.detail.value.client_tel;
      myEventDetail["client_certype"] = this.data.cer_types[this.data.cer_types_index];
      myEventDetail["client_sex"] = this.data.sex[this.data.sexindex];
      myEventDetail["client_birthday"] = this.data.client_birthday;
      myEventDetail["sexindex"] = this.data.sexindex;
      myEventDetail["cer_types_index"] = this.data.cer_types_index;
      myEventDetail["client_index"] = this.data.client_index;
      wx.setStorageSync("client_info_changed", myEventDetail);
      let pages = getCurrentPages();
      wx.navigateBack({
        delta: pages.length - 2
      });
    },
    cancel_client: function(e) {
      let pages = getCurrentPages();
      wx.navigateBack({
        delta: pages.length - 2
      });
    },
    remove_client(e) {
      var _this = this;
      wx.showModal({
        title: '提示',
        content: "你确定要删除该人员信息？",
        showCancel: true,
        success: function(res) {
          if (res.confirm) {
            _this.triggerEvent("remove_client_event", {});
          } else if (res.cancel) {

          }
        }
      });
    }
  }

})