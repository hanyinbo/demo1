export const request=(params)=>{
    return new Promise((resolve,rejecct)=>{
        wx.request({
        ...params,
        success:(result)=>{
            resolve(result);
        },
        fail:(err)=>{
            rejecct(err);
        }
        })
    })
}