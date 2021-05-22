import React from 'react'
import dialogsCSS from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
    let dialogs = props.dialogsPage.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} imgURL={dialog.imgURL}/>)
    let messages = props.dialogsPage.messages.map(message => <Message message={message.message} imgURL={message.imgURL} />);

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.dispatch({type: 'ADD-NEW-MESSAGE'});

    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.dispatch({type: 'UPDATE-NEW-TEXT-MESSAGE', newMess: text});

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
                            ref={newMessageElement}
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