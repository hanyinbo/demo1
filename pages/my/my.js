// pages/my/my.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        userInfo: {},
        hasUserInfo: false,
        canIUseGetUserProfile: false,
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        if (wx.getUserProfile) {
            this.setData({
                canIUseGetUserProfile: true
            })
        }
    },
    getUserProfile(e) {
        wx.getUserProfile({
            desc: '用于完善会员资料',
            success: (res) => {
                console.log('获取用户信息：' + JSON.stringify(res))
                this.setData({
                    userInfo: res.userInfo,
                    hasUserInfo: true
                })
            }
        })
    },

})