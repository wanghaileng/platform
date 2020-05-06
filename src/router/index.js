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
        path: 'device_list',
        component: () => import('../views/Equipment/Device_list.vue'),
        meta: [
          { name: '设备管理' },
          { name: '型号管理' }
        ]
      },
      {
        path: 'models',
        component: () => import('../views/Equipment/Models.vue'),
        meta: [
          { name: '设备管理' },
          { name: '型号管理' }
        ]
      },
      {
        path: 'alarms_list',
        component: () => import('../views/Equipment/Alarms_list.vue'),
        meta: [
          { name: '设备管理' },
          { name: '警报列表' }
        ]
      },
      {
        path: 'hisdatas',
        component: () => import('../views/Equipment/Hisdatas.vue'),
        meta: [
          { name: '设备管理' },
          { name: '历史数据' }
        ]
      },
      {
        path: 'tags',
        component: () => import('../views/Equipment/Tags.vue'),
        meta: [
          { name: '设备管理' },
          { name: '标签列表' }
        ]
      },
      {
        path: 'triggers',
        component: () => import('../views/Equipment/Triggers.vue'),
        meta: [
          { name: '设备管理' },
          { name: '警报触发器' }
        ]
      },
      {
        path: 'hisdownex',
        component: () => import('../views/Equipment/Hisdownex.vue'),
        meta: [
          { name: '设备管理' },
          { name: '下载申请审核' }
        ]
      },
      {
        path: 'upload',
        component: () => import('../views/Equipment/Upload.vue'),
        meta: [
          { name: '设备管理' },
          { name: '数据上传' }
        ]
      },
      {
        path: 'datadownload',
        component: () => import('../views/Equipment/Datadownload.vue'),
        meta: [
          { name: '设备管理' },
          { name: '数据下载' }
        ]
      },
      {
        path: 'genreindex',
        component: () => import('../views/Equipment/Genreindex.vue'),
        meta: [
          { name: '设备管理' },
          { name: '型号分组' }
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
      },
      //平台系统
      {
        path: 'menu',
        component: () => import('../views/Manage/Menu.vue'),
        meta: [
          { name: '数据统计' },
          { name: '成果列表' }
        ]
      },
      //成果管理                                                                                                                                                                                                                                                                                                                                                                                                                                  
      {
        path: 'allgains',
        component: () => import('../views/Gains/Allgains.vue'),
        meta: [
          { name: '数据统计' },
          { name: '成果列表' }
        ]
      },
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
