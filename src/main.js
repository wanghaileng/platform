import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false


//引入ui框架
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

//引入重置样式
import 'normalize.css'
//引入全局样式
import '@/assets/styles/common.less'
//引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
