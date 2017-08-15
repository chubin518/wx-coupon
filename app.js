//app.js

var httpUtil = require('utils/httpUtil.js');

App({
    onLaunch: function() {

    },
    onHide: function() {
        //去除缓存
    },
    utils: {
        doGet: httpUtil.doGet,
        doPost: httpUtil.doPost,
        showTbk: 0
    }
})