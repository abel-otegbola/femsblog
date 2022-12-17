import { useState } from "react";

const returnInitialState = (storageKey, initialState) => {
    try {
        const items = window.localStorage.getItem(storageKey);
        return items ? JSON.parse(items) : initialState;
    }
    catch (error) {
        return initialState;
    }
}


export const useLocalStorage = (storageKey, initialState) => {
    const [storedValue, setStoredValue] = useState(
        returnInitialState(storageKey, initialState)
    )

    const setValue = (value) => {
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value;

            window.localStorage.setItem(storageKey, JSON.stringify(valueToStore))

            setStoredValue(valueToStore);
        }
        catch (error) {
            console.log(error)
        }
    };

    return [storedValue, setValue]
}