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

    /** This is for the Veloris global authentication. Where all users of the cms sign in to the same auth db. */
    const velorisFirebaseConfig = {
        apiKey: "AIzaSyBAbJjwIWx1DDYbQaV8e6vTWQG5JQMqUYk",
        authDomain: "veloris-91865.firebaseapp.com",
        projectId: "veloris-91865",
        storageBucket: "veloris-91865.appspot.com",
        messagingSenderId: "849032631896",
        appId: "1:849032631896:web:ea11e7e0769e7f5de05c2d",
        measurementId: "G-EZV53X4G0C",
    }

    if (!firebaseConfig.apiKey) {
        console.error("Firebase connection details are missing. Please add them to the .env file.")
    }

    let app, velorisApp, auth, db, velorisDb, storage

    try {
        app = initializeApp(firebaseConfig)
        velorisApp = initializeApp(velorisFirebaseConfig, "velorisApp")

        auth = getAuth(velorisApp)
        velorisDb = getFirestore(velorisApp)
        
        db = getFirestore(app)
        storage = getStorage(app)

        console.log("Firebase server initialized.")
    } catch (error) {
        console.error("Error creating firestore instance", error)
    }

    nitroApp.hooks.hook("request", (event) => {
        event.context.db = db
        event.context.velorisDb = velorisDb
        event.context.storage = storage
    })
})
