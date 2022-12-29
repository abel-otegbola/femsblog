import { useState } from "react";

const returnInitialState = (storageKey, initialState) => {
    try {
        const items = window.sessionStorage.getItem(storageKey);
        return items ? JSON.parse(items) : initialState;
    }
    catch (error) {
        return initialState;
    }
}


export const useSessionStorage = (storageKey, initialState) => {
    const [storedValue, setStoredValue] = useState(
        returnInitialState(storageKey, initialState)
    )

    const setValue = (value) => {
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value;

            window.sessionStorage.setItem(storageKey, JSON.stringify(valueToStore))

            setStoredValue(valueToStore);
        }
        catch (error) {
            console.log(error)
        }
    };

    return [storedValue, setValue]
}
