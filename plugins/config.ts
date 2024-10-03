export default defineNuxtPlugin(() => {
    const velorisConfig = "~/veloris.config.ts"

    useNuxtApp().provide("velorisConfig", velorisConfig)
})
