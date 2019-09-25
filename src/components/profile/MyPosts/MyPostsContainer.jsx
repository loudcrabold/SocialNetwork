import React from 'react';
import {addPostActionCreator, onPostChangeActionCreater} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";



let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }

}
let mapDispatchTOProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        updateNewPostText: (text) => {
            let action = onPostChangeActionCreater(text);
            dispatch(action);
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchTOProps)(MyPosts);

// const MyPostsContainer = () => {
//
//
//     return <StoreContext.Consumer>
//         {(store) => {
//             let state = store.getState();
//             let addPost = () => {
//                 store.dispatch(addPostActionCreator());
//             }
//
//             let onPostChange = (text) => {
//                 let action = onPostChangeActionCreater(text);
//                 store.dispatch(action);
//
//             }
//             return <MyPosts updateNewPostText={onPostChange}
//                             addPost={addPost}
//                             posts={state.profilePage.posts}
//                             newPostText={state.profilePage.newPostText}/>
//         }}
//     </StoreContext.Consumer>
//
//
// };


export default MyPostsContainer;