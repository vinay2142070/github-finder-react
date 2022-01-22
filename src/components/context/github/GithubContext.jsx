import { createContext, useReducer } from "react"
import GithubReducer from "./GithubReducer";



const GithubContext = createContext();
export function GithubProvider({ children }) {
    const initialState = {
        loading: false,
        user: {},
        repos: [],
        users: []
    }
    const [state, dispatch] = useReducer(GithubReducer, initialState)







    return (

        <GithubContext.Provider value={{ ...state, dispatch }}>
            {children}
        </GithubContext.Provider>
    )
}

export default GithubContext
