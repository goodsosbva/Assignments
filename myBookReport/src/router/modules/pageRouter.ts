const withPrefix = (prefix: any, routes: any) =>
  routes.map((route: any) => {
    route.path = prefix + route.path
    return route
  })

const pageRouter = {
  path: '/',
  name: 'layout',
  component: () => import('@/layout/index.vue'),
  children: [
    {
      path: '/main',
      name: 'main',
      component: () => import('@/views/main.vue')
    },
    ...withPrefix('/book', [
      {
        path: '/book',
        name: 'book',
        component: () => import('@/views/Books.vue')
      },
      {
        name: 'book',
        path: '/:tabId',
        component: () => import('@/views/Books.vue')
      }
    ])
  ]
}

export default pageRouter
