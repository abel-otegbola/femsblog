import { createContext } from "react";
import { useLocalStorage } from "../customHooks/useLocalStorage";

export const CommentsContext = createContext()

const initialComments = [
    {
        id: 1,
        post_id: 2,
        content: "The post was very insightful. Really enjoyed it.",
        name: "Sogo",
        reaction: "",
        commented_on: "20-12-2021 12:00",
        replied_to: null
    },
    {
        id: 2,
        post_id: 2,
        content: "Thank you very much Sogo",
        name: "Shakesfem",
        reaction: "smile",
        commented_on: "20-12-2021 05:00",
        replied_to: 1
    }
]

const CommentsContextProvider = ({ children }) => {
    const [comments, setComments] = useLocalStorage("comments", initialComments);

    return (
        <CommentsContext.Provider value={{comments, setComments}}>
            { children }
        </CommentsContext.Provider>
    )
}

export default CommentsContextProvider;