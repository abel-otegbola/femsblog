import { store } from "./store"

export const dataFetch = (data) => { 
    return {
        type: "fetchData",
        payload: {
            data
        }
    }
}

export const getData = () => {
    return store.getState()
}

