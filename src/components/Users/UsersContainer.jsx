import React from 'react';
import {
    follow, getUsers,
    setCurrentPage,
    setUsers,
    unFollow
} from '../../redux/users-reducer';
import {connect} from 'react-redux';

import Users from './Users';
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


class UsersContainer extends React.Component {

    getUsersData(page) {
        this.props.getUsers(page, this.props.pageSize)
    }

    componentDidMount() {
        this.getUsersData(this.props.currentPage);
    }


    onPageChanged = (page) => {
        // this.props.setCurrentPage(page);
        this.getUsersData(page);
    }


    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : <Users totalUsersCount={this.props.totalUsersCount}
                                                           pageSize={this.props.pageSize}
                                                           currentPage={this.props.currentPage}
                                                           onPageChanged={this.onPageChanged}
                                                           users={this.props.users}
                                                           follow={this.props.follow}
                                                           unFollow={this.props.unFollow}
            />}

        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}


export default compose(connect(mapStateToProps,
    {   follow,
        unFollow,
        setUsers,
        setCurrentPage,
        getUsers
    }), withAuthRedirect)(UsersContainer);