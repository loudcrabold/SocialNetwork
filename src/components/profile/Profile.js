import React from 'react';
import MyPosts from './MyPosts/MyPosts.jsx'
import classes from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {


    return (
        <div className={classes.content}>
            <ProfileInfo/>
            <MyPosts state={props.state.posts} updateNewPostText={props.updateNewPostText} addPost={props.addPost}/>

        </div>
    )
};


export default Profile;