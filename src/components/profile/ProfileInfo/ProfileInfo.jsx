import React from 'react';
import classes from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://of-crimea.ru/plug/Peschanye-plyazhi-Kryma.jpg" alt=""/>
            </div>
            <div className={classes.descroptionBlock}>
                <img src="https://memepedia.ru/wp-content/uploads/2018/07/cover-3-1.jpg" alt=""/>

            </div>
        </div>
    )
};


export default ProfileInfo;