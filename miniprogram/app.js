//app.js
const cng = require('./config.js');
App({
  onLaunch: function () {
    const sysinfo = wx.getSystemInfoSync();
    console.log(sysinfo);
    var _this = this;
    wx.checkSession({
      fail: function () {
        wx.login({
          success: function (res) {
            if (res.code)
            {
              wx.showLoading({
                mask:true
              });
              wx.request({
                url: cng.loginUrl,
                method:"POST",
                data:{
                  code:res.code
                },
                header: {
                  'content-type': 'application/x-www-form-urlencoded' // 默认值
                },
                success:function(json){
                  if(json.data.state==1)
                  {
                    wx.hideLoading();
                    _this.globalData.appid = json.data.openid;
                    _this.globalData.hasLogin=true;
                  };
                }
              })
            }
            else
            {
              console.log('登录失败！' + res.errMsg)
            }
          }
        });
      }
    })
  },
  globalData: {
    config: cng,
    sex: ["男", "女"],
    cer_types: ["身份证", "护照", "军官证", "港澳通行证", "驾驶证", "其它"],
    hasLogin: false,
    openid: null

  }
})