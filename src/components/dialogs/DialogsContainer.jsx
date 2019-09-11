import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {

    let state = props.store.getState().messagesPage;
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    };
    let onNewMessageChange = (body) => {
        let action = updateNewMessageBodyCreator(body);
        props.store.dispatch(action)

    };






    return (
        <Dialogs onSendMessageClick={onSendMessageClick}
                 onNewMessageChange={onNewMessageChange}
                 dialogsData={state.dialogsData}
                 messagesData={state.messagesData}
                 newMessageBody={state.newMessageBody}/>
    )
};

export default DialogsContainer;