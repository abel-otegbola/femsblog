import { addDoc, getDocs, collection } from "firebase/firestore";
import { db } from "./firebase"

export const getAllReaders = async () =>  {
    try {
        let postsArray = [];
        const querySnapshot = await getDocs(collection(db, "readers"))
            querySnapshot.forEach((doc) => {
                let eachPost = doc.data()
                eachPost.id = doc.id
                postsArray.push(eachPost);
            })
            return (postsArray);
    }
    catch(error) {
        console.log(error)
    }
}

export const addNewReader = async (reader) => {
    try {
        await addDoc(collection(db, "readers"), reader);
        return true
    } catch (e) {
        console.error("Error adding reader: ", e);
    }
}