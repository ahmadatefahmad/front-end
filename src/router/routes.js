

let retrievedRoutesFromDB = [

  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },

  {
    path: '/chat',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/chat', component: () => import('pages/chat.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it

  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

const routes = [...retrievedRoutesFromDB]


export default routes
