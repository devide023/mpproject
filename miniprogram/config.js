const host = "http://192.168.0.207";
const imghost="http://www.yzlcq.com";
const config = {
  host:host,
  imghost: imghost,
  // 登录地址，用于建立会话
  loginUrl: `${host}/Ashx/DZZXChart/min_program.ashx?type=login`,
  // 获取用户信息
  userinfoUrl: `${host}/Ashx/DZZXChart/min_program.ashx?type=get_userinfo`,
  //线路列表
  lineUrl: `${host}/Ashx/DZZXChart/min_program.ashx?type=get_lines`,
  //线路信息
  lineInforUrl: `${host}/Ashx/DZZXChart/min_program.ashx?type=get_lineinfo`,
  // 产品列表
  productsUrl: `${host}/Ashx/DZZXChart/min_program.ashx?type=get_products`,
  //签证列表
  visaUrl: `${host}/Ashx/DZZXChart/dzzxchart.ashx?type=visalist`,
  //签证详情
  visainfoUrl: `${host}/Ashx/DZZXChart/dzzxchart.ashx?type=get_visa_info`
}

module.exports = config