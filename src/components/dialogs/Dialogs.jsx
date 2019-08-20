import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Dialogs";


const Dialogs = (props) => {

    let dialogsElements =
        props.state.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements =
        props.state.messagesData.map(m => <Message message={m.message} id={m.id}/>);
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>

                {dialogsElements}

            </div>
            <div className={classes.messages}>

                {messagesElements}


            </div>
            <textarea>

            </textarea>
            <button>
               Отправить
            </button>
        </div>
    )
};

export default Dialogs;