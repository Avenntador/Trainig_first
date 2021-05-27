import React from 'react'
import dialogsCSS from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewTextMessageActionCreator} from "../Redux/dialogsReducer";




const Dialogs = (props) => {
    let dialogs = props.dialogsPage.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} imgURL={dialog.imgURL}/>)
    let messages = props.dialogsPage.messages.map(message => <Message message={message.message} imgURL={message.imgURL} />);



    let addMessage = () => {
        props.dispatch(addMessageActionCreator());

    }

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.dispatch(updateNewTextMessageActionCreator(text));

    }

    return (
        <div className={dialogsCSS.dialogs}>
            <div>
                {dialogs}
            </div>
            <div>
                {messages}
                <div className={dialogsCSS.textAndButton}>
                    <div>
                        <textarea onChange={onMessageChange}
                                  value={props.dialogsPage.newMessageText}/>
                    </div>
                    <div>
                        <button onClick={addMessage}>Send message</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs