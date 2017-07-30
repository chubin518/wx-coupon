// index.js

var searchbar = require("../templates/searchbar/searchbar.js");
var productbox = require("../templates/productbox/productbox.js");
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageno:1,
    isShow:false,
    products: [],
    kw:""
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    searchbar.init(this, []);
    productbox.init(this,[]);
    var kw=options.kw;
    this.setData({
      kw: kw
    });
    wx.setNavigationBarTitle({
      title: kw
    })
    this.loadMoreData();
  },

  loadMoreData() {
    var that = this;
    var reqParams = {
      k: that.data.kw,
      pageno: that.data.pageno
    };
    app.utils.doGet('search/Product', reqParams, function (res) {
      if (res) {
        var datas = that.data.products;
        if (!datas) {
          datas = [];
        }
        for (var i = 0; i < res.Datas.length; i++) {
          datas.push(res.Datas[i]);
        }
        that.setData({
          products: datas,
          pageno: reqParams.pageno + 1,
          isShow: res.Datas.length <= 0
        });
      }
    });
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
    this.loadMoreData();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})