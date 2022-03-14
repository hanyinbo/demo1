export const request=(params)=>{
    //公共URL
    const baseUrl = "http://localhost:8080/mini";
    return new Promise((resolve,rejecct)=>{
        wx.request({
        ...params,
        url:baseUrl+params.url,
        success:(result)=>{
            resolve(result);
        },
        fail:(err)=>{
            rejecct(err);
        }
        })
    })
}