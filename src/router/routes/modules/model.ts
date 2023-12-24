import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const LIST: AppRouteRecordRaw = {
  path: '/model',
  name: 'model',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: 'menu.model',
    requiresAuth: true,
    icon: 'icon-common',
    order: 2,
  },
  children: [
    {
      path: 'model-list', // The midline path complies with SEO specifications
      name: 'ModelList',
      component: () => import('@/views/model/list/index.vue'),
      meta: {
        locale: 'menu.model.list',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'model-create',
      name: 'ModelCreate',
      component: () => import('@/views/model/create/index.vue'),
      meta: {
        locale: 'menu.model.create',
        requiresAuth: true,
        roles: ['*'],
        hideInMenu: true,
      },
    },
    {
      path: 'model-update',
      name: 'ModelUpdate',
      component: () => import('@/views/model/update/index.vue'),
      meta: {
        locale: 'menu.model.update',
        requiresAuth: true,
        roles: ['*'],
        hideInMenu: true,
      },
    },
    {
      path: 'model-detail',
      name: 'ModelDetail',
      component: () => import('@/views/model/detail/index.vue'),
      meta: {
        locale: 'menu.model.detail',
        requiresAuth: true,
        roles: ['*'],
        hideInMenu: true,
      },
    },
  ],
};

export default LIST;
