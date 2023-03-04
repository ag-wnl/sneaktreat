import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

// import { FirebaseAdapter } from "@next-auth/firebase-adapter"

// import { db } from "../../../utils/firebase/firebase"
// import * as firestoreFunctions from 'firebase/firestore'

// import { adminAuth } from "../../../utils/firebase/firebaseAdmin"

// import { getAuth, signInWithCustomToken } from "firebase/auth"

// const auth = getAuth()
//https://stackoverflow.com/questions/71654212/firebase-does-not-authenticate-when-using-next-auth


export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        }), 
    ],
    secret: process.env.NEXT_PUBLIC_SECRET
}); 