// index.js
import { request } from '../../request/index.js';
Page({
    data:{
        swiperList:[],
        navigationList:[]
    }, 
    onLoad: function(options){
        console.log('测试');
        this.getSwiperList();

        this.getNavigationList();
    },
    // 获取轮播图
    getSwiperList(){
        request({url:"http://localhost:8080/mini/getSwiperImgList"})
        .then(result=>{
            this.setData({
                swiperList:result.data.data
            })
        })
    },
    // 获取导航栏
    getNavigationList(){
        request({url:"http://localhost:8080/mini/getNavigationImgList"})
        .then(result=>{
            this.setData({
                navigationList:result.data.data
            })
        })
    }

})
