import axios from 'axios'
import { Loading } from 'element-ui'

const options = {
  lock: true,
  text: 'Loading',
  spinner: 'el-icon-loading',
  background: 'rgba(0, 0, 0, 0.5)'
}

const http = {
  /** get 请求
   * @param  {接口地址} url
   * @param  {请求参数} params
   */
  get: function(url, params) {
    let loadingInstance = Loading.service(options)
    return new Promise((resolve, reject) => {
      axios.get(url, {
        params: params
      })
        .then((response) => {
          // 根据具体字段再进行完善
          resolve(response.data)
          window.wm.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
            loadingInstance.close()
          })
        })
        .catch((err) => {
          reject(err)
          setTimeout(() => {
            window.wm.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
              loadingInstance.close()
              window.wm.$message('这是一条消息提示')
            })
          }, 2000)
        })
    })
  },
  /** post 请求
   * @param  {接口地址} url
   * @param  {请求参数} params
   */
  post: function(url, params, isShowLonding) {
    let loadingInstance = isShowLonding ? Loading.service(options) : ''
    return new Promise((resolve, reject) => {
      axios.post(url, params)
        .then((response) => {
          console.log(response)
          // if (response.data.errorcode !== '0000') {
          //   if (response.data.errorcode === '11111') {
          //     window.wm.$alert(response.data.errordesc, '提示', {
          //       confirmButtonText: '确定',
          //       callback: action => {
          //         window.wm.$router.push('/Login')
          //       }
          //     })
          //     window.wm.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
          //       if (isShowLonding) {
          //         loadingInstance.close()
          //       }
          //     })
          //   } else {
          //     window.wm.$message.warning(response.data.errordesc)
          //     window.wm.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
          //       if (isShowLonding) {
          //         loadingInstance.close()
          //       }
          //     })
          //   }
          // } else {
          //   resolve(response.data)
          //   window.wm.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
          //     if (isShowLonding) {
          //       loadingInstance.close()
          //     }
          //   })
          // }
        })
        .catch((err) => {
          window.wm.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
            if (isShowLonding) {
              loadingInstance.close()
            }
            window.wm.$message.error(err)
          })
          reject(err)
        })
    })
  },
  // 查询
  postQuery: function(url, params) {
    let loadingInstance = Loading.service(options)
    return new Promise((resolve, reject) => {
      axios.post(url, {
        mode: 'query', ...params
      })
        .then((response) => {
          if (response.data.errorcode !== '0000') {
            if (response.data.errorcode === '11111') {
              window.wm.$alert(response.data.errordesc, '提示', {
                confirmButtonText: '确定',
                callback: action => {
                  window.wm.$router.push('/Login')
                }
              })
              window.wm.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
                loadingInstance.close()
              })
            } else {
              window.wm.$message.warning(response.data.errordesc)
              window.wm.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
                loadingInstance.close()
              })
            }
          } else {
            resolve(response.data)
            window.wm.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
              loadingInstance.close()
            })
          }
        })
        .catch((err) => {
          window.wm.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
            loadingInstance.close()
            window.wm.$message.error(err)
          })
          reject(err)
        })
    })
  },
  postMode: function(url, params, mode) {
    let loadingInstance = Loading.service(options)
    return new Promise((resolve, reject) => {
      axios.post(url, {
        mode: mode, ...params
      })
        .then((response) => {
          if (response.data.errorcode !== '0000') {
            if (response.data.errorcode === '11111') {
              window.wm.$alert(response.data.errordesc, '提示', {
                confirmButtonText: '确定',
                callback: action => {
                  window.wm.$router.push('/Login')
                }
              })
              window.wm.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
                loadingInstance.close()
              })
            } else {
              window.wm.$message.warning(response.data.errordesc)
              window.wm.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
                loadingInstance.close()
              })
            }
          } else {
            resolve(response.data)
            window.wm.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
              loadingInstance.close()
            })
          }
        })
        .catch((err) => {
          window.wm.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
            loadingInstance.close()
            window.wm.$message.error(err)
          })
          reject(err)
        })
    })
  },
  // 新增
  postAdd: function(url, params) {
    let loadingInstance = Loading.service(options)
    return new Promise((resolve, reject) => {
      axios.post(url, {
        mode: 'add', ...params
      })
        .then((response) => {
          if (response.data.errorcode !== '0000') {
            if (response.data.errorcode === '11111') {
              window.wm.$alert(response.data.errordesc, '提示', {
                confirmButtonText: '确定',
                callback: action => {
                  window.wm.$router.push('/Login')
                }
              })
              window.wm.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
                loadingInstance.close()
              })
            } else {
              window.wm.$message.warning(response.data.errordesc)
              window.wm.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
                loadingInstance.close()
              })
            }
          } else {
            window.wm.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
              loadingInstance.close()
            })
            resolve(response.data)
          }
        })
        .catch((err) => {
          window.wm.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
            loadingInstance.close()
            window.wm.$message.error(err)
          })
          reject(err)
        })
    })
  },
  // 修改
  postModify: function(url, params) {
    let loadingInstance = Loading.service(options)
    return new Promise((resolve, reject) => {
      axios.post(url, {
        mode: 'modify', ...params
      })
        .then((response) => {
          if (response.data.errorcode !== '0000') {
            if (response.data.errorcode === '11111') {
              window.wm.$alert(response.data.errordesc, '提示', {
                confirmButtonText: '确定',
                callback: action => {
                  window.wm.$router.push('/Login')
                }
              })
              window.wm.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
                loadingInstance.close()
              })
            } else {
              window.wm.$message.warning(response.data.errordesc)
              window.wm.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
                loadingInstance.close()
              })
            }
          } else {
            resolve(response.data)
            window.wm.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
              loadingInstance.close()
            })
          }
        })
        .catch((err) => {
          window.wm.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
            loadingInstance.close()
            window.wm.$message.error(err)
          })
          reject(err)
        })
    })
  },
  // 删除
  postRemove: function(url, params) {
    let loadingInstance = Loading.service(options)
    return new Promise((resolve, reject) => {
      axios.post(url, {
        mode: 'delete', ...params
      })
        .then((response) => {
          if (response.data.errorcode !== '0000') {
            if (response.data.errorcode === '11111') {
              window.wm.$alert(response.data.errordesc, '提示', {
                confirmButtonText: '确定',
                callback: action => {
                  window.wm.$router.push('/Login')
                }
              })
              window.wm.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
                loadingInstance.close()
              })
            } else {
              window.wm.$message.warning(response.data.errordesc)
              window.wm.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
                loadingInstance.close()
              })
            }
          } else {
            window.wm.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
              loadingInstance.close()
            })
            resolve(response.data)
          }
        })
        .catch((err) => {
          window.wm.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
            loadingInstance.close()
            window.wm.$message.error(err)
          })
          reject(err)
        })
    })
  },
  // 详情
  postView: function(url, params) {
    let loadingInstance = Loading.service(options)
    return new Promise((resolve, reject) => {
      axios.post(url, {
        mode: 'view', ...params
      })
        .then((response) => {
          if (response.data.errorcode !== '0000') {
            if (response.data.errorcode === '11111') {
              window.wm.$alert(response.data.errordesc, '提示', {
                confirmButtonText: '确定',
                callback: action => {
                  window.wm.$router.push('/Login')
                }
              })
              window.wm.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
                loadingInstance.close()
              })
            } else {
              window.wm.$message.warning(response.data.errordesc)
              window.wm.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
                loadingInstance.close()
              })
            }
          } else {
            window.wm.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
              loadingInstance.close()
            })
            resolve(response.data)
          }
        })
        .catch((err) => {
          window.wm.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
            loadingInstance.close()
            window.wm.$message.error(err)
          })
          reject(err)
        })
    })
  },
  // 详情
  postShow: function(url, params) {
    let loadingInstance = Loading.service(options)
    return new Promise((resolve, reject) => {
      axios.post(url, {
        mode: 'show', ...params
      })
        .then((response) => {
          if (response.data.errorcode !== '0000') {
            if (response.data.errorcode === '11111') {
              window.wm.$alert(response.data.errordesc, '提示', {
                confirmButtonText: '确定',
                callback: action => {
                  window.wm.$router.push('/Login')
                }
              })
              window.wm.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
                loadingInstance.close()
              })
            } else {
              window.wm.$message.warning(response.data.errordesc)
              window.wm.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
                loadingInstance.close()
              })
            }
          } else {
            window.wm.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
              loadingInstance.close()
            })
            resolve(response.data)
          }
        })
        .catch((err) => {
          window.wm.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
            loadingInstance.close()
            window.wm.$message.error(err)
          })
          reject(err)
        })
    })
  }

}

// async textRequest(){
//   var data = await http.get('url');
//   console.log(data);
// }
export default http
