// index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners: [],
    skillProducts: [],
    categories: [],
    currentCat: 0,
    products:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.setData({
      currentCat:0,
      banners: [{
        id: 0,
        image: 'https://img.alicdn.com/imgextra/i2/2508158775/TB2dqVEX0AmyKJjSZFKXXXCQXXa_!!2508158775.jpg'
      }, {
        id: 1,
        image: 'https://img.alicdn.com/imgextra/i3/2508158775/TB2RLnraNolyKJjSZPfXXawNpXa_!!2508158775.jpg'
      }, {
        id: 2,
        image: 'https://img.alicdn.com/imgextra/i3/2508158775/TB2TJ1CXVokyKJjy1zbXXXZfVXa_!!2508158775.jpg'
      }],
      skillProducts: [{
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
      }],
      categories: [{
        id: 0,
        name: "全部"
      }, {
        id: 1,
        name: "女装"
      }, {
        id: 9,
        name: "男装"
      }, {
        id: 10,
        name: "内衣"
      }, {
        id: 2,
        name: "母婴"
      }, {
        id: 3,
        name: "化妆品"
      }, {
        id: 4,
        name: "居家"
      }, {
        id: 5,
        name: "鞋包配饰"
      }, {
        id: 6,
        name: "美食"
      }, {
        id: 7,
        name: "文体车品"
      }, {
        id: 8,
        name: "数码家电"
      }]
    });
    that.loadMoreData();
  },
  /**
   * 
   */
  loadMoreData(){
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
        }];
    console.log(this.data.currentCat);
    if (this.data.currentCat == 0) {
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
 * tab导航切换
 */
  tabClick: function (e) {
    this.setData({
      currentCat:e.currentTarget.id
    });
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