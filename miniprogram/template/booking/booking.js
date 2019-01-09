const app = getApp();
function Init_productbooking(that)
{
  /**
   * 出发日期选择事件
   */
  that["pickerchange_goTime"]=function(e){
    const idx = e.detail.value;
    const product_id = that.data.line.products[idx].id;
    that.setData({
      'line.gotimeIndex':e.detail.value
    });
    wx.showLoading({
      title: '数据加载中',
    });
    wx.request({
      url: app.globalData.config.productPriceTypeUrl,
      data: { productid: product_id},
      method: "POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success:function(json){
        console.log(json.data.pricetypes);
        wx.hideLoading();
        if (json.data.state == 1)
        {
          that.setData({
            'line.pricetypes': json.data.pricetypes,
            'line.pricetypeIndex':0
          });
        }
      }
    });
  };
  that["pickerchange_pricetype"]=function(e){
    that.setData({
      'line.pricetypeIndex':e.detail.value
    });
  };
  /**
   * 编辑客人信息
   */
  that["edit_client_info"]=function(e){
    console.log(e);
    let client_index = e.currentTarget.dataset.index;
    let client = that.data.clients[client_index];
    console.log(client);
    let parm = JSON.stringify(client);
    wx.navigateTo({
      url: "/pages/edit_client_info/edit_client_info?index=" + client_index + "&data=" + parm,
    });
  };

}

export default Init_productbooking