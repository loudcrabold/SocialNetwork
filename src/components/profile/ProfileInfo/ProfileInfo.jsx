import React from 'react';
import classes from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={classes.background} src="https://of-crimea.ru/plug/Peschanye-plyazhi-Kryma.jpg" alt=""/>
            </div>
            <div className={classes.descroptionBlock}>
                <img className={classes.avatar} src="https://memepedia.ru/wp-content/uploads/2018/07/cover-3-1.jpg" alt=""/>
                <span className={classes.name}>
                    Sergey Klyus
                </span>
            </div>
        </div>
    )
};


export default ProfileInfo;