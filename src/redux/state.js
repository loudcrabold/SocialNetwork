import {rerenderEntireTree} from "../render";


let state = {
    profilePage:{
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
        ]
    }
};

export let addPost = (postMessage) => {

    let newPost = {
        id:5,
        message: postMessage,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
};

export let updateNewPostText = (nextText) => {

    state.profilePage.newPostText = nextText;
    // debugger;
    rerenderEntireTree(state);
}

// export let addMessage = () => {
//
//     let newMessage = {
//         id: 5, message:
//     }
//
//
//
// }


export default state;