import React from 'react';
import classes from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import lookingForAJobImg from '../../../assets/images/lookingForAJob.jpg'
import dialogsReducer from "../../../redux/dialogs-reducer";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }
    const itemsContacts = [];
    const nullContact = "Отсутствует";

    for (let contacts in props.profile.contacts) {
        itemsContacts.push(
            <li>{contacts}: {(props.profile.contacts[contacts] === null) ? nullContact : <a href="#">{props.profile.contacts[contacts]}</a>}</li>
        )
    }
    return (
        <div>
            <div className={classes.name}>
                {props.profile.fullName}
            </div>
            <div className={classes.descroptionBlock}>
                <img className={classes.avatar} src={props.profile.photos.large} alt=""/>
                <div className={classes.bio}>
                    <span className={classes.bioAboutMe}>О себе : </span>{props.profile.aboutMe}
                </div>
            </div>
            <div className={classes.contact}>
                <span>Контакты</span>
                <ul className={classes.itemsContacts}>
                    {itemsContacts}
                </ul>
            </div>
            <div className={classes.work}>
                <span>Работа: </span>
                <div className={classes.lookingForAJob}>
                    {(props.profile.lookingForAJob) ?
                        <img className={classes.lookingForAJob} src={lookingForAJobImg} alt=""/> :
                        <img className={classes.lookingForAJob} src={lookingForAJobImg} alt=""/>}
                    <div>
                        <span><span>Мои качества: </span> {props.profile.lookingForAJobDescription}</span>
                    </div>
                </div>
            </div>

        </div>
    )
}


export default ProfileInfo;