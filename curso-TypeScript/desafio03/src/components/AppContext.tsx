import { createContext, useEffect, useState } from "react";
import { getAllLocalStorage } from "../services/storage";

interface IAppContext {
    user: string,
    loggedIn: boolean,
    setLoggedIn: (loggedIn: boolean) => void
}
export const AppContext = createContext({} as IAppContext);

export const AppContextProvider = ({ children }: any) => {
    const [loggedIn, setLoggedIn] = useState<boolean>(false)

    const storage = getAllLocalStorage()

    useEffect(() => {
        if (storage) {
            const { login } = JSON.parse(storage)
            setLoggedIn(login)
        }
    }, [])  

    const user = 'davi'

    return (
        <AppContext.Provider value={{ user, loggedIn, setLoggedIn }}>
            {children}
        </AppContext.Provider>
    )
}