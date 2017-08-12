//app.js

var httpUtil = require('utils/httpUtil.js');

App({
  onLaunch: function () {

  },
  onHide: function () {
    //去除缓存
    wx.removeStorage({
      key: 'home_common',
      success: function (res) {

      },
    });
    wx.removeStorage({
      key: 'home_v',
      success: function (res) {

      }
    });
  },
  utils: {
    doGet: httpUtil.doGet,
    doPost: httpUtil.doPost
  }
})