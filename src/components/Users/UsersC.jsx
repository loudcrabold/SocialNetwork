import React from 'react';
import styles from './users.module.css';
import *  as axios from "axios";

let Users = (props) => {

    if (props.users.length === 0) {

        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            props.setUsers(response.data.items)
        });
        debugger

    }

    return     <div>

        {
            props.users.map(u =>
                <div key={u.id}>

                    <div>
                        <img
                            src={u.photos.small != null ? u.photos.small : 'https://www.asiatripdeals.com/wp-content/uploads/2019/03/Anonymous-Avatar.png'}
                            className={styles.userPhoto} alt=""/>
                    </div>
                    <div>
                        {u.followed ? <button onClick={() => {
                                props.follow(u.id)
                            }}>unFollow</button>
                            : <button onClick={() => {
                                props.unFollow(u.id)
                            }}>follow</button>}
                    </div>


                    <div>{u.name}</div>
                    <div>{u.status}</div>


                </div>
            )
        }
    </div>

}

export default Users;