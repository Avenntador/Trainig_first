import React from 'react'
import {addMessageActionCreator, updateNewTextMessageActionCreator} from "../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";



let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        newMessageText: state.dialogsPage.newMessageText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewTextMessage: (text) => {
            dispatch(updateNewTextMessageActionCreator(text));
        },
        addMessage: () => {
            dispatch(addMessageActionCreator());
        }
    }
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);




export default DialogsContainer