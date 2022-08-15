
 /**
  * 接口请求
  * @param {String} method [请求方式]
  * @param {String} name [接口地址]
  * @param {Object} data [参数]
  * @param {String} header [请求头]
  * @param {Boolean} isLoad [是否显示加载]
  */
 
const { ENV ,API_URL } = require('./env')

 function request(data = {}, name, method, type="application/json", isLoad = true) {
  if (isLoad) {
    wx.showLoading({title: "努力加载中..", mask: true});
  }
  //console.log("API_URL",API_URL + name);
  return new Promise((succ, error) => {
    wx.request({
          url: API_URL + name,	// 域名 + 接口
          data: data,
          method: method,
          header: {
              "content-type": type
          },
          success: result=> {
            if (isLoad) wx.hideLoading();
            if(result.data.code == 200)
              succ.call(self,result.data);
            else{
              wx.showToast({ title: result.data.message })
              error.call(self, result.data.message);
            }	
          },
          fail: e=> {
            if (isLoad) wx.hideLoading();
            wx.showToast({ title: e.errMsg,icon:"none" })
            error.call(self, e.errMsg);
          }
      })
  })
}
export {request}
