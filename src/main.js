import Vue from 'vue'
// import Antd from 'ant-design-vue'
import App from './App.vue'
// import 'ant-design-vue/dist/antd.css'
import router from './router'
import './assets/css/base.css'
import axios from 'axios'
import ElementUI from 'element-ui';                    
import 'element-ui/lib/theme-chalk/index.css'; 

// 全局注册
Vue.prototype.$http=axios

Vue.use(ElementUI);  
// Vue.use(Antd)

// const app =createApp(App);
// app.use(Antd);
// Antd.mount('#app')

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
