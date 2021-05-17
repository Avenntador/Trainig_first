import React from 'react'
import dialogsCSS from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
    let dialogs = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} imgURL={dialog.imgURL}/>)
    let messages = props.state.messages.map(message => <Message message={message.message} imgURL={message.imgURL} />);

    return (
        <div className={dialogsCSS.dialogs}>
            <div>
                {dialogs}
            </div>
            <div>
                {messages}
            </div>
        </div>
    );
}

export default Dialogs