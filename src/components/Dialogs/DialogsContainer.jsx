import React from "react";
import style from './Dialogs.module.css'
import UserDialog from "./UserDialog/UserDialog";
import Message from "./Message/Message";
import {sendMessageActionCreator, updateMessageDataActionCreator} from '../../redux/dialogs-reducer'
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let state = props.store.getState().dialogs

    let onMessageChange = (messageData) => {
        props.store.dispatch( updateMessageDataActionCreator(messageData) )
    }

    let sentMessage = () => {
        props.store.dispatch( sendMessageActionCreator() )
    }

    return (
        <Dialogs
            updateMessageData={onMessageChange}
            sentMessage={sentMessage}
            dialogs={state}
        />
    );
}

export default DialogsContainer;