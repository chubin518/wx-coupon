// index.js

var searchbar = require("../templates/searchbar/searchbar.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    products: [],
    currentTpye: 0,
    statusType: ["达人指数", "销量", "价格"],
  },
  statusTap: function (e) {
    var curType = e.currentTarget.dataset.index;
    this.data.currentTpye = curType
    this.setData({
      currentTpye: curType
    });
    this.loadMoreData();
  },
  /**
   * 
   */
  loadMoreData() {
    var datas = [{
      id: 0,
      image: "https://img.alicdn.com/imgextra/i2/1872722147/TB2rWGCvrFkpuFjy1XcXXclapXa_!!1872722147.jpg_240x240.jpg",
      coupon: 200,
      price: 50,
      sold: 123,
      title: "壁灯床头卧室灯简约现代客厅过道灯"
    }, {
      id: 1,
      image: "https://img.alicdn.com/imgextra/i1/1733862031/TB2JKTUaxolyKJjSZFDXXbNfpXa_!!1733862031.jpg_240x240.jpg",
      coupon: 10,
      price: 20,
      sold: 123,
      title: "叶罗丽儿童帐篷室内游戏屋梦幻城堡"
    }, {
      id: 2,
      image: "https://img.alicdn.com/imgextra/i3/TB1XEjTRpXXXXb5apXXYXGcGpXX_M2.SS2_240x240.jpg",
      coupon: 10,
      price: 20,
      sold: 123,
      title: "强力透明无痕胶防水耐高温双面胶"
    }, {
      id: 3,
      image: "https://img.alicdn.com/imgextra/i2/2931349135/TB2s2uMaJAmyKJjSZFKXXXCQXXa_!!2931349135.jpg_240x240.jpg",
      coupon: 10,
      price: 20,
      sold: 123,
      title: "好伊贝婴儿棉签新生儿耳鼻清洁棒"
    }, {
      id: 4,
      image: "https://img.alicdn.com/imgextra/i3/TB1XEjTRpXXXXb5apXXYXGcGpXX_M2.SS2_240x240.jpg",
      coupon: 10,
      price: 20,
      sold: 123,
      title: "强力透明无痕胶防水耐高温双面胶"
    }, {
      id: 5,
      image: "https://img.alicdn.com/imgextra/i2/2931349135/TB2s2uMaJAmyKJjSZFKXXXCQXXa_!!2931349135.jpg_240x240.jpg",
      coupon: 10,
      price: 20,
      sold: 123,
      title: "好伊贝婴儿棉签新生儿耳鼻清洁棒"
    }, {
      id: 6,
      image: "https://img.alicdn.com/imgextra/i3/TB1XEjTRpXXXXb5apXXYXGcGpXX_M2.SS2_240x240.jpg",
      coupon: 10,
      price: 20,
      sold: 123,
      title: "强力透明无痕胶防水耐高温双面胶"
    }, {
      id: 7,
      image: "https://img.alicdn.com/imgextra/i2/2931349135/TB2s2uMaJAmyKJjSZFKXXXCQXXa_!!2931349135.jpg_240x240.jpg",
      coupon: 10,
      price: 20,
      sold: 123,
      title: "好伊贝婴儿棉签新生儿耳鼻清洁棒"
    }];
    if (this.data.currentTpye == 0) {
      this.setData({
        products: datas
      });
    } else {
      this.setData({
        products: []
      });
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    searchbar.init(this, []);

    this.loadMoreData();
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