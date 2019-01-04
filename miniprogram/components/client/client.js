// components/client/client.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    addUrl:{
      type:String,
      value:""
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    _add_client:function(){
      var _this = this;
      wx.navigateTo({
        url: _this.data.addUrl,
        success:function(json){

        }
      });
    },
    _get_formdata:function(e){
      console.log(e);
    }
  }
})
