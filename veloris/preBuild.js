// TODO: This file will add unused files to .nuxtignore file. Preventing them from being included in the build.
import fs from "fs"

const nuxtIgnorePath = "../nuxtignore"
import velorisConfig from "../veloris.config.ts"

// BUG: Compile the ts to js and use that instead.
import velorisConfigDefaults from "../veloris/velorisConfigDefaults.ts"

const $velorisConfig = merge({}, velorisConfigDefaults, velorisConfig)
const sectionSwitches = $velorisConfig.sectionSwitches

dependencies = {
    base: [],
    store: [
        "stores/basket.ts",
        "stores/payment.ts",
        "stores/orders.ts",
        "stores/products.ts",
        "pages/admin/store/*",
    ],
    blogs: ["stores/blogs.ts", "pages/admin/blogs/*"],

    settings: [],
    galleries: [],
    dev: [],
    newsletter: [],
    customerSupport: [],
}

function ignoreUnusedFiles() {
    let ignoreList = []
    for (let key in Object.keys(sectionSwitches)) {
        if (sectionSwitches[key] === false) {
            ignoreList.push(dependencies[key])
        }
    }

    fs.writeFileSync(nuxtIgnorePath, ignoreList.join("\n"), "utf-8")
}

ignoreUnusedFiles()
