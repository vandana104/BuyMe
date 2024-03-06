import { createContext, useContext, useState } from "react";

const StateContext = createContext();
const initialState = {
    chat : false,
    cart : false,
    notification: false,
    userProfile : false
}
export const ContextProvider = ( {children}) => {

    const [activeMenu, setaActiveMenu] = useState(true)
    return(
        // <StateContext.Provider value ={{test:'test'}}>{children}</StateContext.Provider>
        <StateContext.Provider value ={{activeMenu }}>{children}</StateContext.Provider>
    )
}
export const useStateContext = () => useContext(StateContext)