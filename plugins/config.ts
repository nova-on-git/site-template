import velorisConfig from "../veloris.config"
import velorisConfigDefaults from "~/veloris/velorisConfigDefaults"
import merge from "lodash.merge"

export default defineNuxtPlugin((nuxtApp) => {
    const $velorisConfig: VelorisConfig = merge({}, velorisConfigDefaults, velorisConfig)

    nuxtApp.provide("velorisConfig", $velorisConfig)
})
