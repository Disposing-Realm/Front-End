import { React, useState} from "react";
import AppContext from "./appContext";

const ContextProvider = (props) => {
    const [message, getMessage] = useState(""); //onChange
    const [submitText, getSubmitText] = useState(""); //onSumbit
    const [image, setImage] = useState("");//On change image holder
    const [holdImage, getHoldImage] = useState(""); //onSumbit
   
    //OnChange Input
    const getUserInput = (event) => {
      event.preventDefault();
      const search = event.target.value;
      getMessage(search);
    };

    //Submit Inputs
    const postFeed = (event) => {
        getSubmitText(event);
        console.log("IS this actuallnjdn jfjdihn")
        console.log(submitText)
    };


    //Image Input
    const handleImageInput = (event) => {
        event.preventDefault();
        let imgStr = event.target.value
        setImage(imgStr)
    }

    //On Change to button
    const sendPostedImage = (event) => {
        event.preventDefault();
        getHoldImage(image);
    };

 
    
    const context = {
        getUserInput,
        submitText,
        getSubmitText,
        postFeed,
        handleImageInput,
        sendPostedImage,
    }

    return (
        <AppContext.Provider value={context}>
            {props.children}
        </AppContext.Provider>
    )
}

export default ContextProvider