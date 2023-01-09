import { createContext, useState } from "react";
export const AppContext = createContext({});

export function Context({ children }) {
    const [dataUser, setDataUser] = useState([])
    const [mydata, setData] = useState('')
    return (
        <AppContext.Provider value={{ dataUser, setDataUser, mydata, setData }}>
            {children}
        </AppContext.Provider>
    )
}
