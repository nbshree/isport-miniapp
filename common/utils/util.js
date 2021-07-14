const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const compareVersion = (v1, v2) => {
  v1 = v1.split('.')
  v2 = v2.split('.')
  var len = Math.max(v1.length, v2.length)

  while (v1.length < len) {
    v1.push('0')
  }
  while (v2.length < len) {
    v2.push('0')
  }

  for (var i = 0; i < len; i++) {
    var num1 = parseInt(v1[i])
    var num2 = parseInt(v2[i])

    if (num1 > num2) {
      return 1
    } else if (num1 < num2) {
      return -1
    }
  }
  return 0
}

const URL_OPEN_METHOD = {
  navigateTo:   'navigateTo',   //保留当前页面，跳转到应用内的某个页面
  navigateBack: 'navigateBack', //关闭当前页面，返回上一页面或多级页面
  redirectTo:   'redirectTo',   //关闭当前页面，跳转到应用内的某个页面
  reLaunch:     'reLaunch',     //关闭所有页面，打开到应用内的某个页面
  switchTab:    'switchTab',    //跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
  default:      'navigateTo',
  get: (type, def = (URL_OPEN_METHOD.default)) => {
    Object.keys(URL_OPEN_METHOD).forEach((key) => {
      if(type === key) return key;
    })
    return def
  },
  hashNavigateTo: (type) => { return (URL_OPEN_METHOD.navigateTo === type) },
  hashNavigateBack: (type) => { return (URL_OPEN_METHOD.navigateBack === type) },
  hashRedirectTo: (type) => { return (URL_OPEN_METHOD.redirectTo === type) },
  hashReLaunch: (type) => { return (URL_OPEN_METHOD.reLaunch === type) },
  hashSwitchTab: (type) => { return (URL_OPEN_METHOD.switchTab === type) }
}

const openUrl = (e, data=undefined) => {
  //默认的类型
  let type = URL_OPEN_METHOD.default

  const URI = Object.assign({ url: null})
  if(data !== undefined) {
    type = URL_OPEN_METHOD.get(data.type)
    if (data.url !== undefined) URI.url = data.url
    if (data.success !== undefined) URI.success = data.success
    if (data.fail !== undefined) URI.fail = data.fail
    if (data.complete !== undefined) URI.complete = data.complete

    if (URL_OPEN_METHOD.hashNavigateTo(type)) {
      if (data.events !== undefined) URI.events = data.events
    } else if (URL_OPEN_METHOD.hashNavigateBack(type)){
      if (data.delta !== undefined) URI.delta = data.delta
    }
  } 
  else {
    URI.url = e.target.dataset.url
    if (URI.url === undefined) {
      URI.url = e.currentTarget.dataset.url
      type = URL_OPEN_METHOD.get(e.currentTarget.dataset.type)
    } 
    else type = URL_OPEN_METHOD.get(e.target.dataset.type)
  }

  if(URI.url === undefined || URI.url === null || URI.url.length === 0){
    wx.showToast({ title: "您必须为即将打开的地址指定url", icon: 'none', duration: 3000 })
    return
  }
  if (typeof(URI.fail) !== 'function') {
    URI.fail = (res) =>{
      wx.showToast({ title: res.errMsg, icon: 'none', duration: 3000 })
    }
  }
  
  //url, success, fail, complete
  if (URL_OPEN_METHOD.hashNavigateTo(type)) {
    //events 页面间通信接口，用于监听被打开页面发送到当前页面的数据。基础库 2.7.3 开始支持。
    wx.navigateTo(URI)
  } 
  else if (URL_OPEN_METHOD.hashNavigateBack(type)) {
    //delta 返回的页面数，如果 delta 大于现有页面数，则返回到首页。
    wx.navigateBack(URI)
  } 
  else if (URL_OPEN_METHOD.hashRedirectTo(type)){
    wx.redirectTo(URI)
  } 
  else if (URL_OPEN_METHOD.hashReLaunch(type)) {
    wx.reLaunch(URI)
  } 
  else if (URL_OPEN_METHOD.hashSwitchTab(type)) {
    wx.switchTab(URI)
  }
}

const word = {
  _data: [],
  _parse: (str) => {
    word._data = [];//每次都初始化成空数组
    if (str === undefined || str === null || str.length === 0) return;

    const delimiter = "\n";
    str = str.replace(/[\r]/g, '');//去掉widowns回车符
    let index = str.indexOf(delimiter);

    if(index === -1) {
      word._data.push(str)
      return
    }
    
    while (index > -1) {
      word._data.push(str.substr(0, index + 1))
      str = str.substr(index + 1)
      index = str.indexOf(delimiter);
      if (index == -1) {
        word._data.push(str)
        break;
      }
    }
  },
  parse: (str) => {
    word._parse(str);
    return word._data;
  }
}

module.exports = {
  formatTime: formatTime,
  compareVersion: compareVersion,
  openUrl: openUrl,
  word: word
}
