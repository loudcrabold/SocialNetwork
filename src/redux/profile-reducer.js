const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'hi1', likesCount: 12},
        {id: 2, message: 'hi2', likesCount: 10},],
    newPostText: ""
}


const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            let stateCopy = {
                ...state,
                posts : [...state.posts],

            };

            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };;
        }
        default:
            return state;

    }


}

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


export default profileReducer;