import React,{createContext} from "react";
import all_books from "../Components/Assets/all_books"

export const Context = createContext(null)
const ContextProvider = (props)=>{
    const contextValue = {all_books}
    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}
export default ContextProvider;