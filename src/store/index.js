// 提供操作用户信息的
// 设置用户信息
// 获取用户信息
// 删除用户信息
// sessionStorage.setItem('数据名称'，'具体数据')
const KEY = 'hm-toutiao-user'

export default {
  setUser (user) {
    window.sessionStorage.setItem(KEY, JSON.stringify(user))
  },
  getUser () {
    return JSON.parse(window.sessionStorage.getItem(KEY) || '{}')
  },
  delUser () {
    window.sessionStorage.removeItem(KEY)
  }
}
