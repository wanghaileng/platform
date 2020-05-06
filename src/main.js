import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false


//引入ui框架
import ElementUI from 'element-ui';
Vue.use(ElementUI)

//引入重置样式
import 'normalize.css'
//引入全局样式
import '@/assets/styles/common.less'
//引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
//引入高德地图
import AMap from 'vue-amap';
Vue.use(AMap)
AMap.initAMapApiLoader({
  key: '3898759649cf11b731b38f1eac2645e0',
  plugin: ['AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PlaceSearch', 'AMap.Geolocation', 'AMap.Geocoder'],
  v: '1.4.4',
  uiVersion: '1.0'})
import 'element-ui/lib/theme-chalk/index.css'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
