import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Dialogs";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/state";


const Dialogs = (props) => {
    let state = props.store.getState().messagesPage;
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    };
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body))

    };
    let dialogsElements =
        props.state.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements =
        props.state.messagesData.map(m => <Message message={m.message} id={m.id}/>);

    let newMessageBody = state.newMessageBody;
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>

                {dialogsElements}

            </div>
            <div className={classes.messages}>

                <div>{messagesElements}</div>
                <textarea  onChange={onNewMessageChange} value={newMessageBody}>

                </textarea>
                <button onClick={onSendMessageClick}>Отправить</button>

            </div>

        </div>
    )
};

export default Dialogs;