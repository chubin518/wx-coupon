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
    content:"我要领券",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var key = options.pro;
    var images = [];
    wx.getStorage({
      key: key,
      success: function (res) {
        var product = JSON.parse(res.data);
        images.push({ id: 0, title: product.SPZT });
        wx.setNavigationBarTitle({
          title: product.SPMC,
        })
        that.setData({
          product: product,
          banners: images
        });
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
  tobuy: function () {
    var that = this;
    var reqParams = {
      url: this.data.product.SPYHQTGLJ,
      title: this.data.product.SPMC,
      picurl: this.data.product.SPZT
    };
    app.utils.doGet('tpwd/Create', reqParams, function (resp) {
      var tpwd = '￥xNm40aCaJDR￥';
      if (resp) {
        tpwd = resp
      }
      wx.setClipboardData({
        data: tpwd,
        success: function (res) {
          that.setData({
            isSuc: true,
            content:"领取成功,请打开【手机淘宝】客户端领券购买"
          });
          wx.showModal({
            title: '领取成功',
            content: '请打开【手机淘宝】客户端领券购买',
            showCancel: false
          });
        },
        fail: function (res) {
          that.setData({
            isSuc: false,
            content:"领取失败请重试"
          });
          wx.showToast({
            title: '领取失败请重试',
            icon: 'warn',
            duration: 3000
          });
        }
      });
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