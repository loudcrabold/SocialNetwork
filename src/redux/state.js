const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';
let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'hi1', likesCount: 12},
                {id: 2, message: 'hi2', likesCount: 10}],
            newText: ''
        },
        messagesPage: {
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
            newMessageBody: '1'
        },
        sidebar:{}
    },

    _callSubscriber() {
        console.log('stateChanged');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },


    dispatch(action) {

        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._callSubscriber(this._state);

        } else if (action.type === UPDATE_NEW_POST_TEXT) {

            this._state.profilePage.newPostText = action.newText;
            // this._callSubscriber(this._state);

        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.messagesPage.newMessageBody = action.body;
            this._callSubscriber(this._state);

        } else if (action.type === SEND_MESSAGE) {

            let body = this._state.messagesPage.newMessageBody;
            this._state.messagesPage.newMessageBody = '';
            this._state.messagesPage.messagesData.push({id: 6, message: body});
            this._callSubscriber(this._state);
        }
    }


};
export const addPostActionCreator = () => {

    return {
        type: ADD_POST
    }
};
export const onPostChangeActionCreater = (text) => {

    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
};


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
export default store;
window.store = store;

