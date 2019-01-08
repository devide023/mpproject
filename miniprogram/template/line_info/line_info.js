/**
 * that:页面中的this对象
 */
function InitFn(that)
{
  //选择出团日期改变事件
  that["goTimePickerChange"]=function(e){
    let product = that.data.line.products[e.detail.value];
    that.setData({
      'line.gotimeIndex': e.detail.value,
      'line.product': product
    });
  };

}
//module.exports = temp;

export default InitFn