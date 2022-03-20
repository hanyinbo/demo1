// pages/company/search.js
import regeneratorRuntime from '../../lib/runtime/runtime';
import { request } from '../../request/index.js';
Page({

    /**
     * 页面的初始数据
     */
    data: {
        companyList: [],
        searchForm: [],
        queryForm: {
            companyName: "一台特鲁尼控股有限公司"
        }
    },
    TimeId: -1,

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.getCompanypage();
    },
    //获取公司列表
    getCompanypage() {
        request({
            url: "/page/getCompanyPages",
            data: {
                // companyName:"一台特鲁尼控股有限公司",
                current: 1,
                size: 10
            },
        })
            .then(result => {
                this.setData({
                    companyList: result.data.data.records
                })
            })
    },
    // 根据公司名称查询  自定义事件
    handleItemChange(e) {
        console.log('父组件输出：' + JSON.stringify(e))
        const { companyName } = e.detail;
        if (!companyName.trim()) {
            return;
        }
        clearTimeout(this.TimeId);
        this.TimeId = setTimeout(() => {
            this.queryByName(companyName);
        }, 1000);
    },
    async queryByName(query) {
        console.log('参数：' + query)
        const res = await request({ url: "/getCompanyDetailByName", data: { 'companyName': query } })
        console.log("查询公司：" + JSON.stringify(res.data.data));
        this.setData({
            companyList: res.data.data
        })
    },
    // 上滑
    onReachBottom() {
        console.log('上滑')
    }

})