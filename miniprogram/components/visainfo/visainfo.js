// components/visainfo/visainfo.js
const app = getApp();
Component({
  options:{
    addGlobalClass: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    visaId: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    visa_entry: {}
  },

  /**
   * 组件的方法列表
   */
  methods: {
    get_visainfo: function() {
      var _this = this;
      wx.request({
        url: app.globalData.config.visainfoUrl,
        method: "POST",
        data: {
          id: _this.data.visaId
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded' // 默认值
        },
        success(json) {
          if (json.data.state == 1 && json.data.list.length > 0) {
            _this.setData({
              visa_entry: json.data.list[0]
            });
          }
        }
      })
    }
  },
  lifetimes: {
    created: function(e) {
    },
    attached: function() {
    },
    ready:function(){
      this.get_visainfo();
    }
  },
  pageLifetimes: {
    show: function() {
      
    }
  }
})