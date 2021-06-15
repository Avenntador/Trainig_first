import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./Redux/reduxStore"
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App state={store.getState()}/>
        </Provider>,
    </BrowserRouter>,
    document.getElementById('root')
);


