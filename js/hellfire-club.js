import app from "./app.js"
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js'

export async function subscribe_to_hellfire_club(subscription) {
    const db = getFirestore(app)
    const hellfireclubcollection = collection(db, 'hellfire-club')
    const docRef = await addDoc(hellfireclubcollection, subscription)
    return docRef.id
}

