// index.js
var app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    product: {},
    banners: [],
    isSuc: false,
    content: "领取淘口令",
    tpwd: "￥xNm40aCaJDR￥",
    images: [],
    showTbk: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var images = [];
    var key = options.pro;
    wx.getStorage({
      key: key,
      success: function (res) {
        var product = JSON.parse(res.data);
        console.log(product.SPID);
        
        that.getProductImages(product.SPID);

        //设置产品名称
        wx.setNavigationBarTitle({
          title: product.SPMC,
        });
        images.push({ id: 0, title: product.SPZT });
        that.setData({
          product: product,
          banners: images
        });
        //去除缓存
        wx.removeStorage({
          key: key,
          success: function (res) { },
        })
      },
      fail: function (res) {
        wx.removeStorage({
          key: key,
          success: function (res) { },
        })
        wx.navigateBack({});
      }
    });
  },
  getProductImages: function (pid) {
    var that=this;
    app.utils.doGet('search/Images', { pid: pid }, function (res) {
      that.setData({
        images: res.Images,
        showTbk: res.Code
      });
    });
  },
  tobuy: function () {
    var that = this;
    var reqParams = {
      url: this.data.product.SPYHQTGLJ,
      title: this.data.product.SPMC,
      picurl: this.data.product.SPZT
    };
    app.utils.doGet('tpwd/Create', reqParams, function (resp) {
      if (resp) {
        that.setData({
          tpwd: resp
        });
      }
      that.copyTpwd();
    });
  },
  copyTpwd: function () {
    var that = this;
    wx.setClipboardData({
      data: that.data.tpwd,
      success: function (res) {
        that.setData({
          isSuc: true,
          content: "领取成功，请打开【手机淘宝】客户端领券购买"
        });
      },
      fail: function (res) {
        that.setData({
          isSuc: false,
          content: "领取失败请重试"
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})