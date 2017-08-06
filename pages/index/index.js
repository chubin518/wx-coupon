// index.js
var searchbar = require("../templates/searchbar/searchbar.js");
var productbox = require("../templates/productbox/productbox.js");
var config = require('../../utils/config.js');
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners: [],
    skillProducts: [],
    categories: [{ "ID": 1, "Name": "综合", "Icon": "" }, { "ID": 2, "Name": "女人", "Icon": "" }, { "ID": 3, "Name": "母婴", "Icon": "" }, { "ID": 4, "Name": "男人", "Icon": "" }, { "ID": 5, "Name": "运动", "Icon": "" }, { "ID": 6, "Name": "家居", "Icon": "" }, { "ID": 7, "Name": "美食", "Icon": "" }, { "ID": 8, "Name": "美妆", "Icon": "" }, { "ID": 9, "Name": "数码", "Icon": "" }, { "ID": 10, "Name": "配饰", "Icon": "" }],
    products: [],
    favoriteNavbars: [{ "ID": 1, "Name": "超值9块9", "Icon": "https://www.51hui.xin/images/9k9.jpg" }, { "ID": 2, "Name": "20元封顶", "Icon": "https://www.51hui.xin/images/20yuan.jpg" }, { "ID": 5, "Name": "母婴热推", "Icon": "https://www.51hui.xin/images/muying.jpg" }, { "ID": 3, "Name": "特价好货", "Icon": "https://www.51hui.xin/images/tejia.jpg" }],
    currentCat: 1,
    pageno: 1,
    isShow: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    searchbar.init(this, true, null, []);
    productbox.init(this, []);
    var that = this;

    app.utils.doGet('search/config', {}, function (res) {
      that.initData(res);
      wx.setStorage({
        key: 'home_common',
        data: res,
      });
    });
    that.loadMoreData();
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

  },
  favoriteClick: function (e) {
    var id = e.currentTarget.id;
    var title = e.currentTarget.dataset.title;
    wx.navigateTo({
      url: '/pages/favorite/index?ft=' + id + "&title=" + title,
      success: function (res) {
        // console.log(res)
      },
      fail: function (res) {
        // console.log(res)
      }
    });
  },
  /**
   * 
   */
  loadMoreData() {
    var that = this;
    var reqParams = {
      cat: that.data.currentCat,
      pageno: that.data.pageno
    };
    app.utils.doGet('search/Cats', reqParams, function (res) {
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
   * tab导航切换
   */
  tabClick: function (e) {
    this.setData({
      currentCat: e.currentTarget.id,
      pageno: 1,
      products: [],
      isShow: false
    });
    this.loadMoreData();
  },
  initCurrentSkills: function () {
    var products = [{
      id: 0,
      image: "https://img.alicdn.com/imgextra/i2/1872722147/TB2rWGCvrFkpuFjy1XcXXclapXa_!!1872722147.jpg_240x240.jpg",
      coupon: 200,
      price: 50,
      title: "壁灯床头卧室灯简约现代客厅过道灯"
    }, {
      id: 1,
      image: "https://img.alicdn.com/imgextra/i1/1733862031/TB2JKTUaxolyKJjSZFDXXbNfpXa_!!1733862031.jpg_240x240.jpg",
      coupon: 10,
      price: 20,
      title: "叶罗丽儿童帐篷室内游戏屋梦幻城堡"
    }, {
      id: 2,
      image: "https://img.alicdn.com/imgextra/i3/TB1XEjTRpXXXXb5apXXYXGcGpXX_M2.SS2_240x240.jpg",
      coupon: 10,
      price: 20,
      title: "强力透明无痕胶防水耐高温双面胶"
    }, {
      id: 3,
      image: "https://img.alicdn.com/imgextra/i2/2931349135/TB2s2uMaJAmyKJjSZFKXXXCQXXa_!!2931349135.jpg_240x240.jpg",
      coupon: 10,
      price: 20,
      title: "好伊贝婴儿棉签新生儿耳鼻清洁棒"
    }];
    this.setData({
      skillProducts: products
    });
  },
  initData: function (res) {
    var that = this;
    wx.setNavigationBarTitle({
      title: res.Title,
    });
    that.setData({
      categories: res.Cats,
      favoriteNavbars: res.Favorites,
      banners: res.Banners
    });
  }
})