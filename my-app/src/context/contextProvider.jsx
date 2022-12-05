import { React, useState} from "react";
import AppContext from "./appContext";

const ContextProvider = (props) => {
    const [message, getMessage] = useState(""); //onChange
    const [submitText, getSubmitText] = useState(""); //onSumbit
   
    const getUserFeed = (event) => {
      event.preventDefault();
      const search = event.target.value;
      getMessage(search);
    };

    const postFeed = (event) => {
        event.preventDefault();
        getSubmitText(message);
    };
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
        setUser,
        message,
        getMessage,
        submitText,
        getSubmitText,
        getUserFeed,
        postFeed
    }

    return (
        <AppContext.Provider value={context}>
            {props.children}
        </AppContext.Provider>
    )
}

export default ContextProvider