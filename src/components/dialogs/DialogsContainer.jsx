import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";



let mapStateToProps = (state) => {

    return{
        dialogsData: state.messagesPage.dialogsData,
        newMessageBody: state.messagesPage.newMessageBody,
        messagesData: state.messagesPage.messagesData
    }
}
let mapDispatchTOProps = (dispatch) => {
    return{
        onSendMessageClick: () => {
            dispatch(sendMessageCreator())
        },
        onNewMessageChange: (body) => {
            let action = updateNewMessageBodyCreator(body);
            dispatch(action)
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchTOProps)(Dialogs);




export default DialogsContainer;