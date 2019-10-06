import React from 'react';


import classes from "./Profile.module.css"
import Profile from "./Profile"
import * as axios from "axios"
import {connect} from 'react-redux'
import {setMyId, setUserProfile} from "../../redux/profile-reducer"
import {withRouter} from "react-router-dom"


class ProfileContainer extends React.Component {
    getUserId(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}).then(response => {
                this.props.setMyId(response.data.data.id)
            }
        )
    }
    componentDidUpdate() {

    }

    componentDidMount() {

        let userId = this.props.match.params.userId;
        if (!userId) {
            this.getUserId();
            userId = 2;
        }

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
                this.props.setUserProfile(response.data)
            }
        )

    }

    render() {
        return (
            <div className={classes.content}>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}

let mapStateTopProps = (state) => ({profile: state.profilePage.profile, myId: state.profilePage.myId});
let UrlDataProfile = withRouter(ProfileContainer);

export default connect(mapStateTopProps, {setUserProfile, setMyId})(UrlDataProfile);

