// pages/index/index.js
var network = require("../../utils/req.js")
var dataTest = require("./data.js")


Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000,
    Movies:[],
    params:{},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.reqestList();
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
 processSubject:function (subject){
    var title = subject.title;
    var directors= subject.directors;
    var directorStr= "";
    for(var index in directors){
  directorStr = directorStr + directors[index].name + " / ";
}
if (directorStr != "") {
  directorStr = directorStr.substring(0, directorStr.length - 2);
}
var casts = subject.casts;
var castStr = "";
for (var index in casts) {
  castStr = castStr + casts[index].name + " / ";
}
if (castStr != "") {
  castStr = castStr.substring(0, castStr.length - 2);
}
var genres = subject.genres;
var genresStr = "";
for (var index in genres) {
  genresStr = genresStr + genres[index] + " / ";
}
if (genresStr != "") {
  genresStr = genresStr.substring(0, genresStr.length - 2);
}
var year = subject.year;
var text = "名称: " + title + "\n导演: " + directorStr + "\n主演：" + castStr + "\n类型: " + genresStr + "\n 上映年份:" + year + "(中国大陆)";
subject.text = text;      
  },
  
processSubjects:function (subjects) {
  for (var i = 0; i < subjects.length; i++) {
    var subject = subjects[i];
    this.processSubject(subject);
  }
},



  reqestList:function(){
    var that = this;
   // console.log(dataTest.data.subjects);

    this.processSubjects(dataTest.data.subjects);

    console.log(dataTest.data.subjects);

    that.setData({ Movies: dataTest.data.subjects });

 
    // var that = this;
    // network.requestLoading('v2/movie/in_theaters', this.data.params, '正在加载数据', function (res) {
    //   //res就是我们请求接口返回的数据
    //   console.log(res.subjects);
    

    // that.setData({ Movies: res.subjects});

    // }, function () {
    //   wx.showToast({
    //     title: '加载数据失败',
    //   })
    // })
  }


})