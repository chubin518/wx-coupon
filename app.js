//app.js

var httpUtil = require('utils/httpUtil.js');

App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    // var logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)
  },
  utils: {
    doGet: httpUtil.doGet,
    doPost: httpUtil.doPost
  },

  globalData: {
    navTitle: '11'
  }
})
