import React from 'react'
import dialogsCSS from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
    let dialogs = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} imgURL={dialog.imgURL}/>)
    let messages = props.state.messages.map(message => <Message message={message.message} imgURL={message.imgURL} />);

    let newMessageElement = React.createRef();

    let addMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
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
                        <textarea ref={newMessageElement}></textarea>
                    </div>
                    <div>
                        <button onClick={addMessage} > Send message</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs