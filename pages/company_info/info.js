const { request } = require("../../request/index");

// pages/company_info/info.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      companyDetail:{}
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        const companyId = options;
        this.getCompanyDetail(companyId.id);
    },
    async getCompanyDetail(companyId){
        const detailList = await request({url:"/getCompanyDetailById",data:{"companyId":companyId}});
        this.setData({
            companyDetail:detailList.data.data
        })
    } ,

    freeTell: function(){
        console.log('进入拨打电话')
        wx.makePhoneCall({
          phoneNumber: '13407937436',
        })
      },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})