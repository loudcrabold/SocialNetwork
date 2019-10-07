import React from 'react';
import classes from "./Profile.module.css"
import Profile from "./Profile"
import {connect} from 'react-redux'
import {setMyId, setMyIdProfile, setProfileById} from "../../redux/profile-reducer"
import {Redirect, withRouter} from "react-router-dom"
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {
    getUserId(){
        this.props.setMyIdProfile()
    }

    componentDidMount() {

        let userId = this.props.match.params.userId;
        if (!userId) {
            this.getUserId();
            userId = 2;
        }

       this.props.setProfileById(userId)

    }

    render() {



        return (
            <div className={classes.content}>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}
let mapStateTopProps = (state) => ({profile: state.profilePage.profile, myId: state.profilePage.myId, isAuth: state.auth.isAuth});


export default compose(connect(mapStateTopProps, {setMyId, setMyIdProfile, setProfileById}), withRouter, withAuthRedirect)(ProfileContainer);

