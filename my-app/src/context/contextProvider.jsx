import { React, useState, useEffect } from "react";
import AppContext from "./appContext";

const ContextProvider = (props) => {
    const [user, setUser] = useState(
        {
            user_id: 1,
            username: "ELu123",
            first_name: "Evan",
            last_name: "Lu",
            email: "test@email.com",
            password: "123"
        })
    const context = {
        user,
        setUser
    }

    return (
        <AppContext.Provider value={context}>
            {props.children}
        </AppContext.Provider>
    )
}

export default ContextProvider