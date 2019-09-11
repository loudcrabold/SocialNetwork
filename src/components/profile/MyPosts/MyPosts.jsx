import React from 'react';
import classes from './MyPosts.module.css'
import Posts from "./Post/Post";





const MyPosts = (props) => {
    debugger
    let postsElements = props.posts.map(d => <Posts message={d.message} likesCount={d.likesCount}/>);

    let onAddPost = () => {
        props.addPost();
    }


    let onPostChange = (e) => {
        let text = e.target.value;
        props.updateNewPostText(text);
    }

    return (


        <div className={classes.postsBlock}>

        <div className='posts'>
        <h3>my post</h3>
    <div className={classes.content}>
        <div>
            <textarea key="editor1" onChange={onPostChange} value={props.newPostText}/>
        </div>
        <button onClick={onAddPost}>
            Add post
        </button>

    </div>
    </div>
    <div className={classes.posts}>
        {postsElements}
    </div>

    </div>
)

};




export default MyPosts;