var config = require('config.js')
module.exports = {
    doGet: function doGet(url, data, callback) {
        wx.showLoading({
            title: '加载中',
        });
        data.ak = config.ak;
        wx.request({
            url: config.baseUri + url,
            method: 'get',
            header: { //请求头
                "Content-Type": "applciation/json"
            },
            data: data,
            success: function(res) {
                wx.hideLoading();
                typeof callback == "function" && callback(res.data, "");
            },
            fail: function(err) {
                wx.hideLoading();
                typeof callback == "function" && callback(null, err.errMsg);
            }
        });
    },
    doPost: function doPost(url, data, callback) {
        wx.showLoading({
            title: '加载中',
        });
        data.ak = config.ak;
        wx.request({
            url: config.baseUri + url,
            method: 'post',
            header: {
                "Content-Type": "applciation/json"
            },
            data: data,
            success: function(res) {
                wx.hideLoading();
                typeof callback == "function" && callback(res.data, "");
            },
            fail: function(res) {
                wx.hideLoading();
                typeof callback == "function" && callback(null, err.errMsg);
            }
        })
    }
};