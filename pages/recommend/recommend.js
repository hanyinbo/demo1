// pages/recommend/recommend.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        tabs: [
            {
              id:0,
              value:"未面试",
              isActive:true
            },
            {
                id:1,
                value:"未面试",
                isActive:false
              },
              {
                id:2,
                value:"入职",
                isActive:false
              },
              {
                id:3,
                value:"离职",
                isActive:false
              }]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },
    //推荐标签，监听事件
    handleTabsItemChange(e){
        console.log("推荐标签"+e);
        //获取子组件传递的参数
        const {index} = e.detail;
        console.log("idex:"+index);
        //修改源数组
        let {tabs} = this.data;
        tabs.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false);
        //赋值到data
        this.setData({
            tabs
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