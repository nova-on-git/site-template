import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

export default defineNitroPlugin(async (nitroApp) => {
    const config = useRuntimeConfig()

    const firebaseConfig = {
        apiKey: config.public.FIREBASE_API_KEY,
        authDomain: config.public.FIREBASE_AUTH_DOMAIN,
        storageBucket: config.public.FIREBASE_STORAGE_BUCKET,
        messagingSenderId: config.public.FIREBASE_MESSAGE_SENDER_ID,
        appId: config.public.FIREBASE_APP_ID,
        projectId: config.public.FIREBASE_PROJECT_ID,
    }

    if (!firebaseConfig.apiKey) {
        console.error("Firebase connection details are missing. Please add them to the .env file.")
    }

    let app, auth, db, storage

    try {
        app = initializeApp(firebaseConfig)
        auth = getAuth(app)
        db = getFirestore(app)
        storage = getStorage(app)

        console.log("Firebase server initialized.")
    } catch (error) {
        console.error("Error creating firestore instance", error)
    }

    nitroApp.hooks.hook("request", (event) => {
        event.context.app = app
        event.context.auth = auth
        event.context.db = db
        event.context.storage = storage
    })
})
