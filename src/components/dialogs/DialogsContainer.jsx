import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogsContainer = (props) => {

    // let state = props.store.getState().messagesPage;

    return <StoreContext.Consumer>{
        (store) => {
            let onSendMessageClick = () => {
                store.dispatch(sendMessageCreator())
            };
            let onNewMessageChange = (body) => {
                let action = updateNewMessageBodyCreator(body);
                store.dispatch(action)
            };
            let state = store.getState().messagesPage;
            return <Dialogs onSendMessageClick={onSendMessageClick}
                            onNewMessageChange={onNewMessageChange}
                            dialogsData={state.dialogsData}
                            messagesData={state.messagesData}
                            newMessageBody={state.newMessageBody}/>
        }
    }
    </StoreContext.Consumer>
};

export default DialogsContainer;