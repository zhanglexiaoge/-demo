var baseurl = 'http://t.yushu.im/';
//Get 请求
function requestLoading(url, params, message, success, fail) {
  console.log(params);
  wx.showNavigationBarLoading()
  if (message != "") {
    wx.showLoading({
      title: message,
    })
  }
  var URL = baseurl + url;

  wx.request({
    url: URL,
     data: params,
    header: {
      'Content-Type': 'application/json'
    },
    method: 'get',
    success: function (res) {
      
      wx.hideNavigationBarLoading()
      if (message != "") {
        wx.hideLoading()
      }
      if (res.statusCode == 200) {
        success(res.data)
      } else {
        fail()
      }

    },
    fail: function (res) {
      wx.hideNavigationBarLoading()
      if (message != "") {
        wx.hideLoading()
      }
      fail()
    },
    complete: function (res) {

    },
  })
}


module.exports = {

  requestLoading: requestLoading
}