import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  }
  , {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    children: [
      //实时监控
      {
        path: 'monitormap',
        component: () => import('../views/Monitor/MonitorMap.vue'),
        meta: [
          { name: '实时监控' },
          { name: '实时地图' }
        ]
      },
      {
        path: 'monitordev',
        component: () => import('../views/Monitor/MonitorDev.vue'),
        meta: [
          { name: '实时监控' },
          { name: '实时列表' }
        ]
      },
      //个人信息
      {
        path: 'messages',
        component: () => import('../views/Personal/Messages.vue'),
        meta: [
          { name: '个人信息' },
          { name: '我的消息' }
        ]
      },
      {
        path: 'profile',
        component: () => import('../views/Personal/Profile.vue'),
        meta: [
          { name: '个人信息' },
          { name: '个人资料' }
        ]
      },

      //用户管理
      {
        path: 'users',
        component: () => import('../views//Users/Users.vue'),
        meta: [
          { name: '用户管理' },
          { name: '分管理员' }
        ]
      },
      {
        path: 'admins',
        component: () => import('../views/Users/Admins.vue'),
        meta: [
          { name: '用户管理' },
          { name: '系统管理员' }
        ]
      },
      {
        path: 'addusers',
        component: () => import('../views/Users/Addusers.vue'),
        meta: [
          { name: '用户管理' },
          { name: '添加用户' }
        ]
      },
      {
        path: 'menuper',
        component: () => import('../views/Users/Menuper.vue'),
        meta: [
          { name: '用户管理' },
          { name: '管理员权限' }
        ]
      },
      //设备管理
      {
        path:'device_list',
        component:()=> import('../views/Equipment/Device_list.vue'),
        meta: [
          { name: '设备管理' },
          { name: '型号管理' }
        ]
      },
      {
        path:'models',
        component:()=> import('../views/Equipment/Models.vue'),
        meta: [
          { name: '设备管理' },
          { name: '型号管理' }
        ]
      },
      //数据统计
      {
        path: 'user_statistics',
        component: () => import('../views/Statistics/User_statistics.vue'),
        meta: [
          { name: '数据统计' },
          { name: '设备统计' }
        ]
      },
      {
        path: 'device_statistics',
        component: () => import('../views/Statistics/Device_statistics.vue'),
        meta: [
          { name: '数据统计' },
          { name: '用户统计' }
        ]
      }
      //平台系统
      //成果管理
      //设备借用
    ]
  }

  //错误地址重定向
  , {
    path: '*',
    redirect: '/'
  }

]

const router = new VueRouter({
  routes
})

// router.beforeEach((to, from, next) => {
//   if (to.meta.requiresAuth) {
//     const token = localStorage.getItem('token');
//     if (token) {
//       next();
//     } else {
//       next('/')
//     }
//   } else {
//     next()
//   }
// })

export default router
