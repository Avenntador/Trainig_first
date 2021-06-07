import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./Redux/reduxStore"
import {Provider} from "react-redux";


ReactDOM.render(

        <Provider store={store}>
            <App state={store.getState()}/>
        </Provider>
   ,
    document.getElementById('root')
);


