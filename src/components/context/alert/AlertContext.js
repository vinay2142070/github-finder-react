import { createContext, useReducer } from "react"
import AlertReducer from "./AlertReducer";


const AlertContext = createContext();

export const AlertProvider = ({ children }) => {

    const initialState = {
        msg: "",
        type: ""
    }

    const [state, dispatch] = useReducer(AlertReducer, initialState)

    const showAlert = (msg, type) => {

        dispatch({
            payload: { msg, type },
            type: "SET_ALERT"
        })

        setTimeout(() => {
            dispatch({

                type: "REMOVE_ALERT"
            })
        }, 3000);
    }

    return (
        <AlertContext.Provider value={{ alert: state, showAlert }}>
            {children}
        </AlertContext.Provider>
    )
}

export default AlertContext
