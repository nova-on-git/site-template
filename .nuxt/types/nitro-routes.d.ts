// Generated by nitro
import type { Serialize, Simplify } from 'nitropack'
declare module 'nitropack' {
  type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T
  interface InternalApi {
    '/api/analytics': {
      'post': Simplify<Serialize<Awaited<ReturnType<typeof import('../../../dashboard/server/api/analytics.post').default>>>>
    }
    '/api/blogs/:id': {
      'delete': Simplify<Serialize<Awaited<ReturnType<typeof import('../../../dashboard/server/api/blogs/[id].delete').default>>>>
    }
    '/api/blogs': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../../dashboard/server/api/blogs/index.get').default>>>>
      'post': Simplify<Serialize<Awaited<ReturnType<typeof import('../../../dashboard/server/api/blogs/index.post').default>>>>
    }
    '/api/blogs/status': {
      'put': Simplify<Serialize<Awaited<ReturnType<typeof import('../../../dashboard/server/api/blogs/status.put').default>>>>
    }
    '/api/chatrooms/documents': {
      'post': Simplify<Serialize<Awaited<ReturnType<typeof import('../../../dashboard/server/api/chatrooms/documents.post').default>>>>
    }
    '/api/chatrooms/message': {
      'post': Simplify<Serialize<Awaited<ReturnType<typeof import('../../../dashboard/server/api/chatrooms/message.post').default>>>>
    }
    '/api/chatrooms/messages/:id': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../../dashboard/server/api/chatrooms/messages/[id].get').default>>>>
    }
    '/api/galleries': {
      'post': Simplify<Serialize<Awaited<ReturnType<typeof import('../../../dashboard/server/api/galleries/index.post').default>>>>
    }
    '/api/notifications': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../../dashboard/server/api/notifications/index.get').default>>>>
      'post': Simplify<Serialize<Awaited<ReturnType<typeof import('../../../dashboard/server/api/notifications/index.post').default>>>>
    }
    '/api/notifications/read': {
      'put': Simplify<Serialize<Awaited<ReturnType<typeof import('../../../dashboard/server/api/notifications/read.put').default>>>>
    }
    '/api/orders/incomplete/:orderId': {
      'delete': Simplify<Serialize<Awaited<ReturnType<typeof import('../../../dashboard/server/api/orders/incomplete/[orderId].delete').default>>>>
    }
    '/api/orders/incomplete': {
      'post': Simplify<Serialize<Awaited<ReturnType<typeof import('../../../dashboard/server/api/orders/incomplete/index.post').default>>>>
    }
    '/api/orders/incomplete/resolve-order': {
      'put': Simplify<Serialize<Awaited<ReturnType<typeof import('../../../dashboard/server/api/orders/incomplete/resolve-order.put').default>>>>
    }
    '/api/orders': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../../dashboard/server/api/orders/index.get').default>>>>
      'post': Simplify<Serialize<Awaited<ReturnType<typeof import('../../../dashboard/server/api/orders/index.post').default>>>>
      'put': Simplify<Serialize<Awaited<ReturnType<typeof import('../../../dashboard/server/api/orders/index.put').default>>>>
    }
    '/api/projects/:id': {
      'delete': Simplify<Serialize<Awaited<ReturnType<typeof import('../../../dashboard/server/api/projects/[id].delete').default>>>>
    }
    '/api/projects/ids': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../../dashboard/server/api/projects/ids.get').default>>>>
    }
    '/api/projects': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../../dashboard/server/api/projects/index.get').default>>>>
      'post': Simplify<Serialize<Awaited<ReturnType<typeof import('../../../dashboard/server/api/projects/index.post').default>>>>
      'put': Simplify<Serialize<Awaited<ReturnType<typeof import('../../../dashboard/server/api/projects/index.put').default>>>>
    }
    '/api/projects/status': {
      'put': Simplify<Serialize<Awaited<ReturnType<typeof import('../../../dashboard/server/api/projects/status.put').default>>>>
    }
    '/api/realtimeAnalytics': {
      'post': Simplify<Serialize<Awaited<ReturnType<typeof import('../../../dashboard/server/api/realtimeAnalytics.post').default>>>>
    }
    '/api/store/:itemId': {
      'delete': Simplify<Serialize<Awaited<ReturnType<typeof import('../../../dashboard/server/api/store/[itemId].delete').default>>>>
    }
    '/api/store/categories/:category': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../../dashboard/server/api/store/categories/[category].get').default>>>>
      'post': Simplify<Serialize<Awaited<ReturnType<typeof import('../../../dashboard/server/api/store/categories/[category].post').default>>>>
    }
    '/api/store/categories/:category/products/:id': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../../dashboard/server/api/store/categories/[category]/products/[id].get').default>>>>
    }
    '/api/store/categories/:category/products': {
      'post': Simplify<Serialize<Awaited<ReturnType<typeof import('../../../dashboard/server/api/store/categories/[category]/products/index.post').default>>>>
      'put': Simplify<Serialize<Awaited<ReturnType<typeof import('../../../dashboard/server/api/store/categories/[category]/products/index.put').default>>>>
    }
    '/api/store/categories/:category/products/update/:id': {
      'put': Simplify<Serialize<Awaited<ReturnType<typeof import('../../../dashboard/server/api/store/categories/[category]/products/update/[id].put').default>>>>
    }
    '/api/store': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../../dashboard/server/api/store/index.get').default>>>>
      'put': Simplify<Serialize<Awaited<ReturnType<typeof import('../../../dashboard/server/api/store/index.put').default>>>>
    }
    '/api/stripe': {
      'post': Simplify<Serialize<Awaited<ReturnType<typeof import('../../../dashboard/server/api/stripe/index.post').default>>>>
    }
    '/api/stripe/webhook': {
      'post': Simplify<Serialize<Awaited<ReturnType<typeof import('../../../dashboard/server/api/stripe/webhook.post').default>>>>
    }
    '/api/users/access': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../../dashboard/server/api/users/access.get').default>>>>
    }
    '/api/users': {
      'delete': Simplify<Serialize<Awaited<ReturnType<typeof import('../../../dashboard/server/api/users/index.delete').default>>>>
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../../dashboard/server/api/users/index.get').default>>>>
      'post': Simplify<Serialize<Awaited<ReturnType<typeof import('../../../dashboard/server/api/users/index.post').default>>>>
    }
    '/api/users/role': {
      'put': Simplify<Serialize<Awaited<ReturnType<typeof import('../../../dashboard/server/api/users/role.put').default>>>>
    }
    '/__nuxt_error': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.6_eslint@9.12.0_jiti@2.3.3__ioredis@5.4.1__o6r4wgqrhivc477k4xikommcgq/node_modules/nuxt/dist/core/runtime/nitro/renderer').default>>>>
    }
  }
}
export {}