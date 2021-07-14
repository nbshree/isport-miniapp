const { _CONFIG } = require("common/config");
const qs = require("./qs/index");

const _success = (response) => {
  console.log(response)
} 
const _fail = (response) => {
  wx.showToast({
    icon: 'none',
    title: response.errMsg,
    duration: 2000
  })
} 
const getToken = () => {
  const _userInfo = wx.getStorageSync('_wxUserInfo')
  if (!_userInfo) return null
  if (_userInfo.unionId && _userInfo.unionId != null && _userInfo.unionId != '') return _userInfo.unionId

  return _userInfo.openId
}

const post = (data, loading, success, fail) => {
  if (typeof (loading) === 'string') wx.showLoading({ title: loading })
  else if (loading===true) wx.showLoading()

  wx.request({
    url: _CONFIG.API_URL,
    data: qs.stringify(data, { indices: true }),
    method: 'POST',
    success: (response) => {
      if (response.data && response.data.code){
        if (response.data.code === 10000) {
          if(typeof(success) === 'function') {
            success(response.data.data)
            return;
          }
        }else {
          wx.showToast({
            icon: 'none',
            title: response.data.sub_msg ? response.data.sub_msg : response.data.msg,
            duration:2000 
          })
          return;
        }
      }
      else _success(response) 
    },
    fail: typeof (fail) === 'function' ? fail : _fail,
    complete: (response) => { 
      if(response.header['Set-Cookie']){
        if(response.header['Set-Cookie'].indexOf("PHPSESSID=")>-1)
          wx.setStorageSync('phpsession', response.header['Set-Cookie']);
      }
      wx.hideLoading() 
    },
    header: {
      'content-type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json',
      'cookie': wx.getStorageSync('phpsession'),
      'x-token': getToken()
    },
  })
}

const uploadImages = (data, loading, success, fail) => {
  wx.chooseImage({
    success(res) {
      if (typeof (loading) === 'string') wx.showLoading({ title: loading })
      else if (loading === true) wx.showLoading()

      const tempFilePaths = res.tempFilePaths
      wx.uploadFile({
        url: _CONFIG.API_URL, //仅为示例，非真实的接口地址
        filePath: tempFilePaths[0],
        name: 'file',
        formData: data,
        success(httpResp) {
          if (httpResp.statusCode != 200) return
          const response = JSON.parse(httpResp.data)
          if (response && response.code === 10000){
            if (typeof (success) === 'function') {
              success(response.data)
              return;
            }
          } else {
            wx.showToast({
              icon:'none',
              title: response.sub_msg ? response.sub_msg : response.msg,
              duration: 2000
            })
            return;
          }
        },
        fail: typeof (fail) === 'function' ? fail : _fail,
        complete: (response) => {
          if (response.header['Set-Cookie']) {
            if (response.header['Set-Cookie'].indexOf("PHPSESSID=") > -1)
              wx.setStorageSync('phpsession', response.header['Set-Cookie']);
          }
          wx.hideLoading()
        },
        header: {
          'content-type': 'multipart/form-data',
          'Accept': 'application/json',
          'cookie': wx.getStorageSync('phpsession'),
          'x-token': getToken()
        },
      })
    }
  })
}

module.exports = {
  post: post,
  uploadImages: uploadImages
}