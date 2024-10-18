export { useScriptTriggerConsent, useScriptEventPage, useScriptTriggerElement, useScript, useScriptGoogleAnalytics, useScriptPlausibleAnalytics, useScriptClarity, useScriptCloudflareWebAnalytics, useScriptFathomAnalytics, useScriptMatomoAnalytics, useScriptGoogleTagManager, useScriptGoogleAdsense, useScriptSegment, useScriptMetaPixel, useScriptXPixel, useScriptIntercom, useScriptHotjar, useScriptStripe, useScriptLemonSqueezy, useScriptVimeoPlayer, useScriptYouTubePlayer, useScriptGoogleMaps, useScriptNpm, useScriptCrisp } from '#app/composables/script-stubs';
export { isVue2, isVue3 } from 'vue-demi';
export { defineNuxtLink } from '#app/components/nuxt-link';
export { useNuxtApp, tryUseNuxtApp, defineNuxtPlugin, definePayloadPlugin, useRuntimeConfig, defineAppConfig } from '#app/nuxt';
export { requestIdleCallback, cancelIdleCallback } from '#app/compat/idle-callback';
export { setInterval } from '#app/compat/interval';
export { useAppConfig, updateAppConfig } from '#app/config';
export { defineNuxtComponent } from '#app/composables/component';
export { useAsyncData, useLazyAsyncData, useNuxtData, refreshNuxtData, clearNuxtData } from '#app/composables/asyncData';
export { useHydration } from '#app/composables/hydrate';
export { callOnce } from '#app/composables/once';
export { useState, clearNuxtState } from '#app/composables/state';
export { clearError, createError, isNuxtError, showError, useError } from '#app/composables/error';
export { useFetch, useLazyFetch } from '#app/composables/fetch';
export { useCookie, refreshCookie } from '#app/composables/cookie';
export { onPrehydrate, prerenderRoutes, useRequestHeader, useRequestHeaders, useRequestEvent, useRequestFetch, setResponseStatus } from '#app/composables/ssr';
export { onNuxtReady } from '#app/composables/ready';
export { preloadComponents, prefetchComponents, preloadRouteComponents } from '#app/composables/preload';
export { abortNavigation, addRouteMiddleware, defineNuxtRouteMiddleware, setPageLayout, navigateTo, useRoute, useRouter } from '#app/composables/router';
export { isPrerendered, loadPayload, preloadPayload, definePayloadReducer, definePayloadReviver } from '#app/composables/payload';
export { useLoadingIndicator } from '#app/composables/loading-indicator';
export { getAppManifest, getRouteRules } from '#app/composables/manifest';
export { reloadNuxtApp } from '#app/composables/chunk';
export { useRequestURL } from '#app/composables/url';
export { usePreviewMode } from '#app/composables/preview';
export { useRouteAnnouncer } from '#app/composables/route-announcer';
export { onBeforeRouteLeave, onBeforeRouteUpdate, useLink } from 'vue-router';
export { withCtx, withDirectives, withKeys, withMemo, withModifiers, withScopeId, onActivated, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onDeactivated, onErrorCaptured, onMounted, onRenderTracked, onRenderTriggered, onServerPrefetch, onUnmounted, onUpdated, computed, customRef, isProxy, isReactive, isReadonly, isRef, markRaw, proxyRefs, reactive, readonly, ref, shallowReactive, shallowReadonly, shallowRef, toRaw, toRef, toRefs, triggerRef, unref, watch, watchEffect, watchPostEffect, watchSyncEffect, isShallow, effect, effectScope, getCurrentScope, onScopeDispose, defineComponent, defineAsyncComponent, resolveComponent, getCurrentInstance, h, inject, hasInjectionContext, nextTick, provide, defineModel, defineOptions, defineSlots, mergeModels, toValue, useModel, useAttrs, useCssModule, useCssVars, useSlots, useTransitionState, useId, useTemplateRef, useShadowRoot, Component, ComponentPublicInstance, ComputedRef, ExtractPropTypes, ExtractPublicPropTypes, InjectionKey, PropType, Ref, MaybeRef, MaybeRefOrGetter, VNode } from 'vue';
export { injectHead, useHead, useSeoMeta, useHeadSafe, useServerHead, useServerSeoMeta, useServerHeadSafe } from '@unhead/vue';
export { toggleMessage, createMessage, openMessage, closeMessage } from '../node_modules/.c12/github_Veloris_Designs_aph2YalU4I/composables/message';
export { openModal, closeModal, toggleModal } from '../node_modules/.c12/github_Veloris_Designs_aph2YalU4I/composables/modal';
export { minifyNumber } from '../../dashboard/composables/analyticsUtils';
export { signIn, signUp, signInWithEmail, signUpWithEmail, signInWithGoogle, resetPassword, getErrorMessage } from '../../dashboard/composables/authentication';
export { cache, getCache } from '../../dashboard/composables/caching';
export { compressImage, saveFileToStorage, resizeImage, processImage } from '../../dashboard/composables/imageProcessing';
export { formatDate, getStatusIcon } from '../../dashboard/composables/ordersUtils';
export { initStores, $Notifications, $CurrentUser, $Orders, $Products, $Users, $Basket, $Dashboard, $Analytics, $Blogs, $Payment, $Projects, $Chatroom, ChatroomStore, ProjectStore, NotificationStore, BlogStore, CurrentUserStore, OrderStore, ProductStore, AnalyticsStore, UserStore, BasketStore, DashboardStore, PaymentStore } from '../../dashboard/composables/pinia';
export { stripeCheckout } from '../../dashboard/composables/stripe';
export { useVelorisConfig, useAuth, useDb, useVelorisDb, useStorage, useVelorisStorage } from '../../dashboard/composables/useGlobals';
export { getRandomNumber } from '../../dashboard/composables/utils';
export { defineStore, acceptHMRUpdate, usePinia, storeToRefs } from '../node_modules/.pnpm/@pinia+nuxt@0.5.5_magicast@0.3.5_rollup@4.24.0_typescript@5.6.3_vue@3.5.12_typescript@5.6.3__webpack-sources@3.2.3/node_modules/@pinia/nuxt/dist/runtime/composables';
export { useNuxtDevTools } from '../../dashboard/node_modules/.pnpm/@nuxt+devtools@1.5.2_rollup@4.24.0_vite@5.4.8_@types+node@22.7.4_sass@1.79.4_terser@5.34.1__vue@3.5.11_typescript@5.6.2_/node_modules/@nuxt/devtools/dist/runtime/use-nuxt-devtools';
export { definePageMeta } from '../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.6_eslint@9.12.0_jiti@2.3.3__ioredis@5.4.1__o6r4wgqrhivc477k4xikommcgq/node_modules/nuxt/dist/pages/runtime/composables';