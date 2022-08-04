import React from "react";
import style from './Dialogs.module.css'
import UserDialog from "./UserDialog/UserDialog";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let userElements = props.dialogs.userData.map((el) =>
        <UserDialog name={el.name} id={el.id} avatar={el.avatar} key={el.id} />
    )

    let messageElement = props.dialogs.messagesData.map((el) =>
        <Message message={el.message} key={el.id} />
    )

    let newMessage = React.createRef();

    let sentMessage = () => {
        let text = newMessage.current.value;
        alert(text);
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
                        <textarea className='textarea' ref={newMessage}></textarea>
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