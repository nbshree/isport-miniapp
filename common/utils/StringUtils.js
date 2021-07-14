const StringUtils = {
  isEmpty: (str)=>{
    return (typeof(str)=="undefined" || str==null) 
  },
  isNotEmpty: (str)=>{
    return !StringUtils.isEmpty(str)
  },
  isBlank: (str)=>{
    return (typeof (str) == "undefined" || str == null || str=="") 
  },
  isNotBlank: (str) => {
    //console.log(!StringUtils.isBlank(str))
    return !StringUtils.isBlank(str)
  },
  bindToVar: (obj, keyName, val)=>{
    if (keyName.indexOf(".") == -1) obj[keyName] = val
    else{
      let keys = keyName.split(".")
      let isArray = false
      let res = obj

      for(var i=0; i<keys.length-1;i++){
        isArray = (Number.parseInt(keys[i + 1]) == '' + keys[i + 1])
        if (!res[keys[i]]) res[keys[i]] = isArray ? [] : Object.assign({})
        res = res[keys[i]]
      }
      res[keys[i]] = val
    }
    return obj
  }
}

module.exports = {
  ...StringUtils
}