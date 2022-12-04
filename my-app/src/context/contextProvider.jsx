import { React, useState, useEffect } from "react";
import AppContext from "./appContext";

const ContextProvider = (props) => {
const [user, setUser] = useState({user: 1})
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