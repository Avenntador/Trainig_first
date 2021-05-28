import React from 'react'
import {addMessageActionCreator, updateNewTextMessageActionCreator} from "../Redux/dialogsReducer";
import Dialogs from "./Dialogs";




const DialogsContainer = (props) => {

    let state = props.store.getState();

    let onAddMessage = () => {
        props.store.dispatch(addMessageActionCreator());

    }

    let onMessageChange = (text) => {
        props.store.dispatch(updateNewTextMessageActionCreator(text));

    }

    return (
        <Dialogs addMessage={onAddMessage} updateNewTextMessage={onMessageChange} dialogsPage={state.dialogsPage} newMessageText={state.dialogsPage.newMessageText} />
    );
}

export default DialogsContainer