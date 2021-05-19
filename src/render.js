import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addNewMessage, addPost, updateNewPostText, updateNewTextMessage} from "./Redux/state";


export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 addPost={addPost}
                 updateNewPostText={updateNewPostText}
                 addNewMessage={addNewMessage}
                 updateNewTextMessage={updateNewTextMessage}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
