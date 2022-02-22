import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./servises/firebase";

const getRootElement = document.getElementById("root");

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    getRootElement
);
