// index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.setData({
      banners: [{
        id: 0,
        image: 'https://img.alicdn.com/imgextra/i2/2508158775/TB2dqVEX0AmyKJjSZFKXXXCQXXa_!!2508158775.jpg'
      }, {
        id: 1,
        image: 'https://img.alicdn.com/imgextra/i3/2508158775/TB2RLnraNolyKJjSZPfXXawNpXa_!!2508158775.jpg'
      }, {
        id: 2,
        image: 'https://img.alicdn.com/imgextra/i3/2508158775/TB2TJ1CXVokyKJjy1zbXXXZfVXa_!!2508158775.jpg'
      }]
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