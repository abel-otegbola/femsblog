import { createContext } from "react";
import { useLocalStorage } from "../customHooks/useLocalStorage";

export const UserContext = createContext()

const UserContextProvider = ({ children }) => {
    const [user, setUser] = useLocalStorage("user", { name: "Shakesfem", email: "shakesfem@gmail.com", token: 1234567890 });

    return (
        <UserContext.Provider value={{user,setUser}}>
            { children }
        </UserContext.Provider>
    )
}

export default UserContextProvider;