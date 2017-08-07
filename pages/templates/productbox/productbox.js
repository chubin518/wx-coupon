module.exports = {
    init: function init(page) {
        page.RedirectToDetail = function(e) {
            var pro = JSON.stringify(e.currentTarget.dataset.item);
            var key = "product_" + e.currentTarget.id + "_" + e.currentTarget.dataset.index;

            wx.setStorage({
                key: key,
                data: pro,
            });
            wx.navigateTo({
                url: '/pages/detail/index?pro=' + key,
                success: function(e) {},
                fail: function(e) {
                    console.log(e);
                }
            })
        }
    }
};