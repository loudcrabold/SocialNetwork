import React from 'react';
import classes from './MyPosts.module.css'
import Posts from "./Post/Post";



const MyPosts = (props) => {


    let postsElements =
        props.state.map(d => <Posts message={d.message} likesCount={d.likesCount}/>);


    let newPostElement = React.createRef();

    let addPost = () => {

        let text = newPostElement.current.value;
        props.addPost(text);
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        // props.updateNewPostText(text);
        console.log(newPostElement.current.value);
    }
    return (
        <div className={classes.postsBlock}>

            <div className='posts'>
                <h3>my post</h3>
                <div className={classes.content}>
                    <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostElement}/>
                    </div>
                    <button onClick={addPost}>
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