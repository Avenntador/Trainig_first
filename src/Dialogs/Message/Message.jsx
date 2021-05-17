import React from 'react'
import dialogsCSS from "./Message.module.css"

const Message = (props) => {
    return <div className={dialogsCSS.message}>
        <img src={props.imgURL}/>
        {props.message}
    </div>
}

export default Message