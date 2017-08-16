// index.js
var productbox = require("../templates/productbox/productbox.js");
var app = getApp();

Page({
    /**
     * 页面的初始数据
     */
    data: {
        productInfo: {},
        isSuc: false,
        content: "我要领券",
        tpwd: "￥xNm40aCaJDR￥",
        showTbk: 0,
        curIndex: 0,
        products: [], //推荐
        couponInfo: {}
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        productbox.init(this, []);
        var that = this;
        var key = options.pro;
        wx.getStorage({
            key: key,
            success: function(res) {
                var coupon = JSON.parse(res.data);
                that.getProductImages(coupon.SPID);

                that.setData({
                    couponInfo: coupon,
                    showTbk: app.utils.showTbk
                });

                //去除缓存
                wx.removeStorage({
                    key: key,
                    success: function(res) {},
                })
            },
            fail: function(res) {
                wx.removeStorage({
                    key: key,
                    success: function(res) {},
                })
                wx.navigateBack({});
            }
        });
    },
    getProductImages: function(pid) {
        var that = this;
        app.utils.doGet('detail/get', { id: pid }, function(res) {
            if (res) {
                that.setData({
                    productInfo: res
                });

                //设置产品名称
                wx.setNavigationBarTitle({
                    title: res.SPMC,
                });
            }
        });
    },
    tobuy: function() {
        var that = this;
        var reqParams = {
            url: this.data.couponInfo.SPYHQTGLJ,
            title: this.data.couponInfo.SPMC,
            picurl: this.data.couponInfo.SPZT
        };
        app.utils.doGet('tpwd/Create', reqParams, function(resp) {
            if (resp) {
                that.setData({
                    tpwd: resp
                });
            }
            that.copyTpwd();
        });
    },
    copyTpwd: function() {
        var that = this;
        wx.setClipboardData({
            data: that.data.tpwd,
            success: function(res) {
                that.setData({
                    isSuc: true,
                    content: "领取成功，请打开【手机淘宝】客户端领券购买"
                });
            },
            fail: function(res) {
                that.setData({
                    isSuc: false,
                    content: "领取失败请重试"
                });
            }
        });
    },
    bindTap(e) {
        var that = this;
        var cindex = e.currentTarget.dataset.index;
        this.setData({
            curIndex: cindex
        });
        if (cindex == 1 && that.data.products.length <= 0) {
            var reqParams = {
                cat: this.data.productInfo.SPLM,
            };
            app.utils.doGet('detail/Similar', reqParams, function(resp) {
                if (resp) {
                    that.setData({
                        products: resp.Datas
                    });
                }
            });
        }
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

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})