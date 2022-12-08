import { BrowserRouter } from "react-router-dom"
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ContextProvider from "./context/contextProvider";
import { Image, Video, Transformation, CloudinaryContext } from 'cloudinary-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CloudinaryContext cloudName="dtrzaq4sl">
    <ContextProvider>
      <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>
    </ContextProvider>
    <div>
      <Image publicId="sample" width="50" />
    </div>
    <Image publicId="sample" width="0.5" />
  </CloudinaryContext>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/* 
<CloudinaryContext cloudName="dtrzaq4sl">
  <div>
    <Image publicId="sample" width="50" />
  </div>
  <Image publicId="sample" width="0.5" />
</CloudinaryContext>


*/

