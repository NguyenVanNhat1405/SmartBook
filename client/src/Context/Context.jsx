import React,{createContext} from "react";
import all_product from "../Components/Assets/all_products"

export const Context = createContext(null)
const ContextProvider = (props)=>{
    const contextValue = {all_product}
    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}