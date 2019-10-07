import React from 'react'
import styles from "./users.module.css";
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {usersAPI} from "../../api/api";


let Users = (props) => {


    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = [];


    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {pages.map(p =>
                    <span className={props.currentPage === p && styles.selectedPage}
                          onClick={() => props.onPageChanged(p)}>[{p}]</span>
                )}
            </div>
            {
                props.users.map(u =>
                    <div key={u.id}>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img
                                    src={u.photos.small != null ? u.photos.small : 'https://www.asiatripdeals.com/wp-content/uploads/2019/03/Anonymous-Avatar.png'}
                                    className={styles.userPhoto} alt=""/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed ? <button onClick={() => {props.unFollow(u.id)}}>unFollow</button>
                                : <button onClick={() => { props.follow(u.id)}}>follow</button>}
                        </div>


                        <div>{u.name}</div>
                        <div>{u.status}</div>


                    </div>
                )
            }
        </div>
    )
}


export default Users;