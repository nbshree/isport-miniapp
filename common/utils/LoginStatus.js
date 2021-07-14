const LoginStatus = (flow_status) =>{
  flow_status = Number.parseInt(flow_status)
  let wxUser = wx.getStorageSync('_wxUserInfo')

  let res = {checked:true}
  if (flow_status === 0) return true
  else if (flow_status > 0 && !wxUser){
    res.content = "需要微信授权用户信息，授权后请重新尝试！"
    res.action = "立即授权"
    res.path = null
    res.flow_status = 1
  }
  else if (wxUser.flow_status == 5) return true
  else if (wxUser.status === 0) {
    res.content = "用户已经被管理员禁用"
    res.action = "闭关"
    res.checked = false
    res.path = null
    res.flow_status = 0
  }
  else if (flow_status === 2 && flow_status > wxUser.flow_status){
    res.content = "需要用户进行手机授权，授权后请重新尝试！"
    res.action = "立即授权"
    res.path = "/pages/my/cert/index"
    res.flow_status = 2
  }
  else if (flow_status === 3 && flow_status > wxUser.flow_status){
    res.content = "需要用户实名认证，认证后请重新尝试！"
    res.action = "立即认证"
    res.path = "/pages/my/cert/index"
    res.flow_status = 3
  }
  else if (flow_status == 5 && wxUser.flow_status == 9) {
    res.content = "认证实名审核通不过"
    res.action = "重新认证"
    res.path = "/pages/my/cert/index"
    res.checked = false
    res.flow_status = 3
  }
  else if (flow_status === 5 && flow_status > wxUser.flow_status){
    res.content = "需要用户实名认证，认证后请重新尝试！"
    res.action = "立即认证"
    res.path = "/pages/my/cert/index"
    res.flow_status = 3
  }
  else return true

  return res
}

const SportsTypeId = {
  data:[
    { id: 1, name:"乒乓球"},
    { id: 2, name: "羽毛球" },
    { id: 4, name: "排球" },
    { id: 8, name: "篮球" },
    { id: 16, name: "足球" },
    { id: 32, name: "网球" },
  ],
  getByTypeId: (typeId)=>{
    let index = Number.parseInt(typeId).toString(2).length - 1
    return SportsTypeId.getByIndex(index)
  },
  getByIndex: (index)=>{
    return SportsTypeId.data[index]
  }
}

module.exports = {
  LoginStatus: LoginStatus,
  SportsTypeId: SportsTypeId
}