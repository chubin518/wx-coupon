//app.js

var httpUtil = require('utils/httpUtil.js');

App({
    onLaunch: function() {

    },
    utils: {
        doGet: httpUtil.doGet,
        doPost: httpUtil.doPost
    }
})