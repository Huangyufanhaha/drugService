import Vue from 'vue'
import VueRouter from 'vue-router'
import drugHome from '../views/drugHome.vue'
import drugGuide from '../views/drugGuide.vue'
import drugService from '../views/drugService.vue'
import drugPublicity from '../views/drugPublicity.vue'
import drugLife from '../views/drugLife.vue'
import drugAppointment from '../views/drugAppointment.vue'
import drugInfo from '../components/drugInfo.vue'
import drugServiceDetail from '../components/drugServiceDetail.vue'
// 引入科普宣传里面的路由
import scienceArticles from '../views/scienceArticles.vue'
import onlineTeach from '../views/onlineTeach.vue'
import lookBack from '../views/lookBack.vue'
// 引入一键预约里面的路由
import intDrugsorting from '../views/intDrugsorting.vue'
import intPurchasing from '../views/intPurchasing.vue'
import intMedboxsort from '../views/intMedboxsort.vue'
import intIdentification from '../views/intIdentification.vue'



Vue.use(VueRouter)

const routes = [
  {path:'/',redirect:'/drugHome'},
  {path: '/drugHome',component: drugHome},
  {path: '/drugGuide',component: drugGuide},
  {path:'/drugService',component:drugService},
  {path:'/drugServiceDetail/:id',component:drugServiceDetail,},
  {path:'/drugPublicity',component:drugPublicity},
  {path:'/drugLife',component:drugLife},
  {path:'/drugAppointment',component:drugAppointment},
  {path:'/drugInfo',component:drugInfo},
  {path:'/scienceArticles',component:scienceArticles},
  {path:'/onlineTeach',component:onlineTeach},
  {path:'/lookBack',component:lookBack},
  // 药物整理
  {path:'/intDrugsorting',component:intDrugsorting},
  // 药品代购
  {path:'/intPurchasing',component:intPurchasing},
  // 药箱整理的路由
  {path:'/intMedboxsort',component:intMedboxsort},
  // 中药材鉴别
  {path:'/intIdentification',component:intIdentification}
  
,
  

 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
