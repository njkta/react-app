import React from "react";
import style from './Dialogs.module.css'
import UserDialog from "./UserDialog/UserDialog";
import Message from "./Message/Message";
import {sendMessageActionCreator, updateMessageDataActionCreator} from '../../redux/dialogs-reducer'

const Dialogs = (props) => {

    let state = props.dialogs

    let userElements = state.userData.map((el) =>
        <UserDialog name={el.name} id={el.id} avatar={el.avatar} key={el.id} />
    )

    let messageElement = state.messagesData.map((el) =>
        <Message message={el.message} key={el.id} />
    )

    let onMessageChange = (event) => {
        let messageData = event.target.value
        props.updateMessageData(messageData)
    }

    let sentMessage = () => {
        props.sentMessage()
    }

    return (
        <div className={style.dialogs}>
            <div className={`${style.dialogsItems}`}>
                {userElements}
            </div>
            <div className={`${style.openedDialog}`}>
                {messageElement}
                <form className='writeForm'>
                    <div>
                        <textarea className='textarea' onChange={onMessageChange} value={state.newMessageData}></textarea>
                    </div>
                    <div>
                        <button className='btn' type='button' onClick={ sentMessage }>sent</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Dialogs;