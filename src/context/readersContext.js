import { createContext } from "react";
import { useLocalStorage } from "../customHooks/useLocalStorage";

export const ReadersContext = createContext()

const ReadersContextProvider = ({ children }) => {
    const [reader, setReader] = useLocalStorage("reader", null);

    return (
        <ReadersContext.Provider value={{reader, setReader}}>
            { children }
        </ReadersContext.Provider>
    )
}

export default ReadersContextProvider;
