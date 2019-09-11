import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'hi1', likesCount: 12},
                {id: 2, message: 'hi2', likesCount: 10},],


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
        sidebar: {}
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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);

    }
//
}





export default store;
window.store = store;

