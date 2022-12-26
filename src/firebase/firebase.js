import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import { getFirestore, addDoc, getDocs, collection, deleteDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes } from "firebase/storage";

// My web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFLCN9Z9lIrpBmJLtUuL6-btu4Kz7a2oc",
  authDomain: "shakesfem-xpace.firebaseapp.com",
  projectId: "shakesfem-xpace",
  storageBucket: "shakesfem-xpace.appspot.com",
  messagingSenderId: "838939418269",
  appId: "1:838939418269:web:698a34a93f2a71de8d7e74",
  measurementId: "G-G6741DPKZB"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
const db = getFirestore();
const auth = getAuth(app);
const storage = getStorage(app);

export const signUp = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );
        const user = userCredential.user;
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            email: user.email,
        });
        return user
    } 
    catch (error) {
        return {error: error.message}
    }
};

export const signIn = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
        );
        const user = userCredential.user;

        return user
    } 
    catch (error) {
        return {error: error.message}
    }
}

export const logOut = async() => {
    try {
        await signOut(auth)
        return true
    } 
    catch (error) {
        return false
    }
};


export const getAllPosts = async () =>  {
    try {
        let postsArray = [];
        const querySnapshot = await getDocs(collection(db, "posts"));
        
        querySnapshot.forEach((doc) => {
            postsArray.push(doc.data());
        })
        return postsArray;
    }
    catch(error) {
        console.log(error)
    }
}

export const addNewPost = async (post) => {
    try {
        const docRef = await addDoc(collection(db, "posts"), post);
    
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding post: ", e);
    }
}

export const updatePost = (id, post) => { 
    db.collection("post").doc(id).update(post); 
}; 

export const deletePost = async (id) => { 
    try {
        const docRef = await deleteDoc(collection(db, "posts"), id)
        .then(() => console.log("post deleted successfully deleted", docRef.id))
    }
    catch(e) {
        console.log(e)
    }
}; 

const storageRef = ref(storage, 'images');

export const uploadImage = (file) => {
    uploadBytes(storageRef, file).then((snapshot) => {
        console.log('Uploaded a blob or file!');
    });
}