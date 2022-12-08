import { createContext, useState } from "react";
const AppContext = createContext();

export const Context = ({ components }) => {
    const [auth, setAuth] = useState({});

    return (
        <AppContext.Provider value ={{auth, setAuth}}>
            { components }
        </AppContext.Provider>
    )
}

export default AppContext;
