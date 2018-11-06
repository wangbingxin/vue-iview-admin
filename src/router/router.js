import Main from '../views/Main.vue'

export const Routes=[
  {
    path: '/',
    name: 'main',
    component: Main
  },
  {
    path: '/login',
    name: 'login',
    meta: {title:'登录'},
    component: ()=>import('@/views/Login.vue')
  },
  {
    path: '/404',
    name: '404',
    meta: {title:'404'},
    component: ()=>import('@/views/err_page/404.vue')
  }
]
