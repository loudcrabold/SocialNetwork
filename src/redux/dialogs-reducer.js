const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';


let initialState = {
    messagesData: [
        {id: 1, message: 'hi1'},
        {id: 2, message: 'hi2'},
        {id: 3, message: 'hi3'},
        {id: 4, message: 'hi4'}
    ],
    dialogsData: [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Dima2'},
        {id: 3, name: 'Dima3'},
        {id: 4, name: 'Dima4'}
    ],
    newMessageBody: ''
}


const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;

        case SEND_MESSAGE:

            let newMessage = {
                id: 6,
                message: state.newMessageBody
            };
            state.messagesData.push(newMessage);
            console.log(1);
            state.newMessageBody = '';
            return state;
        default:
            return state;
    }

}

export const sendMessageCreator = () => {

    return {
        type: SEND_MESSAGE
    }
};
export const updateNewMessageBodyCreator = (body) => {

    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    }
};


export default dialogsReducer;