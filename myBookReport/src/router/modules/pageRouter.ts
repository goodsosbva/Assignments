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
        path: '/',
        component: () => import('@/views/Books/Books.vue')
      },
      {
        name: 'book',
        path: '/:tabId',
        component: () => import('@/views/Books/Books.vue')
      }
    ]),
    {
      path: '/reference',
      name: 'reference',
      component: () => import('@/views/Reference/reference.vue')
    },
    {
      path: '/movieclass',
      name: 'movieclass',
      component: () => import('@/views/MovieClass/movieclass.vue')
    },
    {
      path: '/classample',
      name: 'classample',
      component: () => import('@/views/ClassSample/classsample.vue')
    },
    {
      path: '/company',
      name: 'company',
      component: () => import('@/views/Company/company.vue')
    }
  ]
}

export default pageRouter
