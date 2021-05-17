import React from 'react'
import dialogsCSS from "./DialogItem.module.css"
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;

    return <div className={dialogsCSS.dialogItems}>
        <img src={props.imgURL}/>
        <NavLink to={path} activeStyle={{color: "white"}}> {props.name} </NavLink>
    </div>
}

export default DialogItem