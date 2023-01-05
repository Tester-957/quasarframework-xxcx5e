const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayoutView.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
  {
    path: '/chatgpt',
    component: () => import('layouts/MainLayoutView.vue'),
    children: [{ path: '', component: () => import('pages/ChatGPT.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
