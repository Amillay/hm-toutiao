import Vue from 'vue'
import App from './App.vue'

// 日志的详细与否，生产环境  开发环境
// 是否生产环境提示：不开启就是开发环境
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
