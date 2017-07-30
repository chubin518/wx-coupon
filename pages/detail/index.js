// index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    product: {},
    banners: []
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