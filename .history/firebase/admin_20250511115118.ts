import { getApps, initializeApp, cert } from "firebase-admin/app";

const initFirebaseAdmin = () => {
    const apps = getApps();

    if (!apps.length) {
        initializeApp({
            crdential: Cert
        })
    }
}