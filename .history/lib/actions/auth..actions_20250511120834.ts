'use server';

import { db } from "@/firebase/admin";

export async function signUp(params: SignUpParams) {
    const { uid, name, email } = params;

    try {
        const userRecord = await db.collection("users").doc(uid).get();
        if (userRecord.exists) {
            return {
                succes: false,
                message: "User already exists. Please sign in instead."
            }
        }

        await db.collection("users").doc(uid).set({
            name, email
        })
    } catch (e: any) {
        console.log("Error creating a user", e);
        if (e.code === "auth/email-already-exists") {
            return {
                success: false,
                message: "This email is already in use."
            }
        }

        return {
            succes: false,
            message: "Failed to create an account"
        }
    }
}