
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
    console.log(that.data.searchParam);
  };
  that.hideInput = function () {
    tempData.inputShowed = false;
    tempData.inputVal = "";
    that.setData({
      searchParam: tempData
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
}

module.exports = {
  init: init
}