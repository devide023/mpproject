var temp = {
  initFn(that) {
    that["goTimePickerChange"] = function(e) {
      console.log(e);
      console.log(that.data.line.products);
      let product = that.data.line.products[e.detail.value];
      console.log(product);
      that.setData({
        'line.gotimeIndex': e.detail.value,
        'line.product': product
      });
    }
  }
}
//module.exports = temp;

export default temp