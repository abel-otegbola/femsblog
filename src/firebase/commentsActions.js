import { addDoc, getDocs, collection, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "./firebase"

export const getAllComments = async () =>  {
    try {
        let postsArray = [];
        const querySnapshot = await getDocs(collection(db, "comments"))
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

export const addNewComment = async (comment) => {
    try {
        await addDoc(collection(db, "comments"), comment);
    
        let postsArray = [];
        const querySnapshot = await getDocs(collection(db, "comments"))
            querySnapshot.forEach((doc) => {
                let eachPost = doc.data()
                eachPost.id = doc.id
                postsArray.push(eachPost);
            })
        return (postsArray);

    } catch (e) {
        console.error("Error adding comment: ", e);
    }
}

export const updateComment = (id, post) => { 
    try {
        const docRef = doc(db, "comments", id);

        updateDoc(docRef, {...post, id: docRef.id})
        .then(() => console.log("updated"))
        .catch(e => console.log(e))
    }
    catch(e) {
        console.log(e)
    }
}; 

export const deleteComment = (id) => { 
    try {
        const docRef = doc(db, "comments", id);

        deleteDoc(docRef)
        .then(() => console.log("deleted"))
        .catch(e => console.log(e))
    }
    catch(e) {
        console.log(e)
    }
}; 

