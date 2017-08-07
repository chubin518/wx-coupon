// index.js
var productbox = require("../templates/productbox/productbox.js");
var app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        products: [],
        currentTpye: 0,
        statusType: ["达人指数", "销量", "价格"],
        isShow: false,
        pageno: 1,
        ft: 0
    },
    /**
     * 
     */
    loadMoreData() {
        var that = this;
        app.utils.doGet('search/favorite', {
            sort: that.data.currentTpye,
            pageno: that.data.pageno,
            t: that.data.ft
        }, function(res) {
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
                    pageno: that.data.pageno + 1,
                    isShow: res.Datas.length <= 0
                });
            }
        });
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        productbox.init(this, []);
        this.setData({
            ft: options.ft
        });
        wx.setNavigationBarTitle({
            title: options.title,
        })
        this.loadMoreData();
    },

    statusTap: function(e) {
        var curType = e.currentTarget.dataset.index;
        this.data.currentTpye = curType
        this.setData({
            currentTpye: curType,
            pageno: 1,
            isShow: false,
            products: []
        });
        this.loadMoreData();
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {
        this.loadMoreData();
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})