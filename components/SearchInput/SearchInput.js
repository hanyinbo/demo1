import { request } from '../../request/index';
import { regeneratorRuntime } from '../../lib/runtime/runtime'
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
      
  },
  TimeId:-1,

  /**
   * 组件的方法列表
   */
  methods: {
     companyName:'',
    handleInput(options){
      const {value} = options.detail;
      console.log("输入框的值："+value);
      // this.companyName=value
      this.triggerEvent("queryCompany",{'companyName':value});
  
      // if(!value.trim()){
      //      return;
      // }
      // clearTimeout(this.TimeId);
      // this.TimeId=setTimeout(()=>{
      //   this.qSearch(value);
      // },1000);
    },
    async qSearch(query){
      console.log('参数：'+query)
       const res= await request({url:"/getCompanyDetailByName",data:{'companyName':query}})
       console.log("查询公司："+JSON.stringify(res));
    },
    // this.triggerEvent(queryCompany,{})
  }
})
