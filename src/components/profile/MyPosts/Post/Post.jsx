import React from 'react';
import classes from './Post.module.css'


const Posts = (props) => {
    return (
        <div className={classes.item}>
            <img src="http://www.lte-esafety.co.uk/wp-content/uploads/2015/06/avatar.png" alt=""/>
            {props.message}

            <div>
                <span>like: {props.likesCounts}</span>
            </div>
        </div>
    )

};


export default Posts;