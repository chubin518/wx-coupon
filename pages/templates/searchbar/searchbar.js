
function init(page) {
  var tempData = {
    inputShowed: false,
    inputVal: ""
  };
  var that = page;
  that.setData({
    searchParam: tempData
  });

  that.showInput = function () {
    tempData.inputShowed = true;
    that.setData({
      searchParam: tempData
    });
  };
  that.searchInput = function () {
    if (tempData.inputVal.length <= 0) {
      tempData.inputShowed = true;
      that.setData({
        searchParam: tempData
      });
      return;
    }
    wx.navigateTo({
      url: '/pages/list/index?kw=' + tempData.inputVal,
    });
  };
  that.clearInput = function () {
    tempData.inputVal = "";
    that.setData({
      searchParam: tempData
    });
  };
  that.inputTyping = function (e) {
    tempData.inputVal = e.detail.value;
    that.setData({
      searchParam: tempData
    });
  }
  that.inputConfirm = function (e) {
    if (e.detail.value.length <= 0) {
      tempData.inputShowed = true;
      that.setData({
        searchParam: tempData
      });
      return;
    }
    wx.navigateTo({
      url: '/pages/list/index?kw=' + e.detail.value,
    })
  }
}

module.exports = {
  init: init
}