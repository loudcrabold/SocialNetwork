import {profileAPI} from "../api/api";
import * as axios from "axios";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_MY_ID = 'SET_MY_ID';
let initialState = {
    posts: [],
    newPostText: "",
    profile: null,
    myId: null
};


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

        }
        case SET_MY_ID: {
            // debugger
            return {
                ...state,
                myId: action.myId
            };

        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        default:
            return state;

    }


}
export const setMyId = (myId) => ({type: SET_MY_ID, myId});
export const addPostActionCreator = () => ({type: ADD_POST});
export const setUserProfile = (profile) => {
    return {type: SET_USER_PROFILE, profile}
};
export const onPostChangeActionCreater = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export const setMyIdProfile = () => {
    return (dispatch) => {
        profileAPI.authMe().then(response => {
               dispatch(setMyId(response.data.data.id))
            }
        )

    }
}

export const setProfileById = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId).then(response => {
               dispatch(setUserProfile(response.data))
            }
        )
    }
}




export default profileReducer;