// index.js
import { request } from '../../request/index.js';
Page({
    data:{
        swiperList:[],
        navigationList:[],
        companyList:[]
    }, 
    onLoad: function(options){
        console.log('测试');
        this.getSwiperList();

        this.getNavigationList();

        this.getCompanyList();

        this.getLocation();
    },
    // 获取轮播图
    getSwiperList(){
        request({url:"/getSwiperImgList"})
        .then(result=>{
            this.setData({
                swiperList:result.data.data
            })
        })
    },
    // 获取导航栏
    getNavigationList(){
        request({url:"/getNavigationImgList"})
        .then(result=>{
            this.setData({
                navigationList:result.data.data
            })
        })
    },
    //获取公司列表
    getCompanyList(){
        request({url:"/getCompanyList"})
        .then(result=>{
            this.setData({
                companyList:result.data.data
            })
        })
    },
    getLocation(){
        wx.getLocation({
          success: (res)=>{
              var latitude = res.latitude;
              var longitude = res.longitude;
              console.log('获取latitude：'+latitude +'获取longitude'+longitude);
          }
        })
    }

})
