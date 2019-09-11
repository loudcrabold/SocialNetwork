import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Dialogs";



const Dialogs = (props) => {
    let onSendMessageClick = () => {
       props.onSendMessageClick();
    };

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.onNewMessageChange(body);

    };

    let dialogsElements =
        props.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements =
        props.messagesData.map(m => <Message message={m.message} id={m.id}/>);



    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>

                {dialogsElements}

            </div>
            <div className={classes.messages}>

                <div>{messagesElements}</div>
                <textarea  onChange={onNewMessageChange} value={props.newMessageBody}>

                </textarea>
                <button onClick={onSendMessageClick}>Отправить</button>

            </div>

        </div>
    )
};

export default Dialogs;