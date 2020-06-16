export const getWeatherInfo = (param) => {
  var querytoUrl = function(data) {
    let arrs = []
    for (var key in data) {
      let value = data[key]
      arrs.push(key + '=' + value)
    }
    return arrs.join('&')
  }

  return new Promise((resolve, reject) => {
    (window as any).weatherCallback = (result) => {
      resolve(result)
    }

    var url = 'https://www.tianqiapi.com/api/'
    var jsonp = document.createElement('script')
    jsonp.type = 'text/javascript'
    jsonp.src = `${url}?${querytoUrl(param)}&callback=weatherCallback`
    let header = document.getElementsByTagName('head')[0]
    header.appendChild(jsonp)
    setTimeout(() => {
      header.removeChild(jsonp)
    }, 100)
  })
}

export const getIpInfo = () => {
  return new Promise((resolve, reject) => {
    let info = (window as any).returnCitySN
    if (info) {
      resolve(info)
      return
    }

    let callback = function() {
      let info = (window as any).returnCitySN
      if (info) {
        resolve(info)
        return
      }
      setTimeout(() => {
        callback()
      }, 200)
    }
    var url = 'http://pv.sohu.com/cityjson?ie=utf-8'
    var javascript = document.createElement('script')
    javascript.type = 'text/javascript'
    javascript.src = `${url}?&ran=` + Math.random()
    let header = document.getElementsByTagName('head')[0]
    header.appendChild(javascript)
    setTimeout(() => {
      header.removeChild(javascript)
    }, 5000)
    setTimeout(() => {
      callback()
    }, 200)
  })
}
