import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from 'react';

import AuthContext from "../context/authContext";
import { useLocalStorage } from "./useLocalStorage";
const auth = getAuth()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useLocalStorage("user", null);

    useEffect(() => {
        onAuthStateChanged(auth,(user) => {
            setUser(user)
        })
    }, [setUser]);

    return (
        <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
    );
}