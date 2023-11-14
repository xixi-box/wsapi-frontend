export default [
  {path: '/', name: '主页', icon: 'smile', component: './Index'},
  { path: '/interface_info/:id', name: '查看接口', icon: 'smile', component: './InterfaceInfo', hideInMenu: true },
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './User/Login',
      },
    ],
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      {
        name: '接口管理',
        icon: 'table',
        path: '/admin/interface_info',
        component: './Admin/interfaceInfo',
      },
    ],
  },
  // {
  //   path: '/',
  //   redirect: '/welcome',
  // },
  {
    path: '*',
    layout: false,
    component: './404',
  },
];
