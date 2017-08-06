//app.js

var httpUtil = require('utils/httpUtil.js');

App({
  onLaunch: function () {
    // httpUtil.doGet('search/config', {}, function (res) {
    //   wx.setStorage({
    //     key: 'home_common',
    //     data: res,
    //   });
    // });
  },
  utils: {
    doGet: httpUtil.doGet,
    doPost: httpUtil.doPost
  }
})
