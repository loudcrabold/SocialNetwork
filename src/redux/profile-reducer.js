const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
let initialState = {
    posts: [],
    newPostText: "",
    profile: null
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
                posts: [...state.posts],

            };

            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case SET_USER_PROFILE: {

            return {
                ...state,
                profile: action.profile
            };
            ;
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
            ;
        }
        default:
            return state;

    }


}

export const addPostActionCreator = () => ({type: ADD_POST})
export const setUserProfile = (profile) => {

   return  {type: SET_USER_PROFILE, profile}
}
export const onPostChangeActionCreater = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})


export default profileReducer;