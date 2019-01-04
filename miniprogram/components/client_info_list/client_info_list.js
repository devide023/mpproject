Component({
  options:{
    addGlobalClass: true,
  },
  /**
   * 组件的属性列表
   */
  properties: {
    clientData:Array
  },

  /**
   * 组件的初始数据
   */
  data: {
    eidt_clientUrl:"/pages/edit_client_info/edit_client_info",
    edit_index:0,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    modify_clients:function(){

    },
    remove_client(e){
      console.log(e);
      let _this = this;
      let id = e.target.dataset.id;
      wx.showModal({
        title: '提示',
        content: "你确定要删除该人员信息？",
        showCancel: true,
        success: function (res) {
          if (res.confirm) {
            _this.triggerEvent("remove_client_event", {client_id:id});
          } else if (res.cancel) {

          }
        }
      });
    },
    getdata(e)
    {
      console.log(e);
      let index = e.currentTarget.dataset.index;
      let parm = JSON.stringify(this.data.clientData[index]);
      this.setData({
        edit_index:index
      });
      wx.navigateTo({
        url: this.data.eidt_clientUrl+"?index="+index+"&data="+parm,
      });
    }
  },
  attached: function () {
    console.log(this);
  },
  lifetimes:{
    detached:function(){

    },
    created:function(){

    },
    ready(){
    }
  },
  pageLifetimes:{
    show(){
    },
    hide(){

    }
  }
})