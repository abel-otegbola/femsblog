import { addDoc, getDocs, collection, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "./firebase"

export const getAllPosts = async () =>  {
    try {
        let postsArray = [];
        const querySnapshot = await getDocs(collection(db, "posts"))
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

export const addNewPost = async (post) => {
    try {
        const docRef = await addDoc(collection(db, "posts"), post);
    
        return docRef.id;
    } catch (e) {
        console.error("Error adding post: ", e);
    }
}

export const updatePost = (id, post) => { 
    try {
        const docRef = doc(db, "posts", id);

        updateDoc(docRef, {...post, id: docRef.id})
        .then(() => console.log("updated"))
        .catch(e => console.log(e))
    }
    catch(e) {
        console.log(e)
    }
}; 

export const deletePost = (id) => { 
    try {
        const docRef = doc(db, "posts", id);

        deleteDoc(docRef)
        .then(() => console.log("deleted"))
        .catch(e => console.log(e))
    }
    catch(e) {
        console.log(e)
    }
}; 

