import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ContextProvider from "./context/contextProvider";
import { CloudinaryContext } from "cloudinary-react";
import { render } from 'react-dom';

import Navbar from './components/top/navbar.jsx';

import 'bulma/css/bulma.css';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const pages = ['about', 'contact', 'sitemap'];
const App = () => (
  <div style={styles}>
    <Navbar pages={pages} />
  </div>
);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CloudinaryContext cloudName="dtrzaq4sl">
    <ContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ContextProvider>
  </CloudinaryContext >

);

reportWebVitals();
