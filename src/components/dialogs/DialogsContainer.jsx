import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";



let mapStateToProps = (state) => {

    return{
        dialogsData: state.messagesPage.dialogsData,
        newMessageBody: state.messagesPage.newMessageBody,
        messagesData: state.messagesPage.messagesData,
        isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch) => {
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


export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs);