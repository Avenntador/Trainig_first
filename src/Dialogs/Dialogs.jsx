import React from 'react'
import dialogsCSS from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;

    return <div className={dialogsCSS.dialog + ' ' + dialogsCSS.active}>
        <NavLink to={path}> {props.name} </NavLink>
    </div>
}

const Message = (props) => {
    return <div className={dialogsCSS.message}>
        {props.message}
    </div>
}


const Dialogs = (props) => {
    return (
        <div className={dialogsCSS.dialogs}>
            <div className={dialogsCSS.dialogItems}>
                <DialogItem name="Lelik" id = '1'/>
                <DialogItem name="Bolik" id = '2'/>
                <DialogItem name="Garik" id = '3'/>
                <DialogItem name="Marik" id = '4'/>
            </div>
            <div className={dialogsCSS.messages}>
                <Message message='HI' />
                <Message message='KEK' />
                <Message message='FINE' />
                <Message message='HaHAh' />
            </div>
        </div>
    );
}

export default Dialogs