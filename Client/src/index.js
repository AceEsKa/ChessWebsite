import React from 'react';
import ReactDom from "react-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import CreatePost from "./Components/Pages/Blog/Admin/CreatePost";
import Test from "./Components/Pages/test/Test"
import {Home} from "./Components/Pages/Home/Home";

/*const root = ReactDOM.createRoot(document.getElementById('root'));*/
ReactDom.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
