import React from 'react';
import {
    follow,
    setCurrentPage,
    setIsFetching,
    setTotalUsersCount,
    setUsers,
    unFollow
} from '../../redux/users-reducer';
import {connect} from 'react-redux';
import * as axios from 'axios';
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";



class UsersContainer extends React.Component {

    getUsersData(page) {

        this.props.setIsFetching(true)
        usersAPI.getUsers(page, this.props.pageSize).then(response => {
            this.props.setTotalUsersCount(response.totalCount);
            this.props.setUsers(response.items);
            this.props.setIsFetching(false)
        });
    }

    componentDidMount() {
        this.getUsersData(this.props.currentPage);
    }


    onPageChanged = (page) => {
        this.props.setCurrentPage(page);
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


export default connect(mapStateToProps,
    {
        follow,
        unFollow,
        setUsers,
        setIsFetching,
        setTotalUsersCount,
        setCurrentPage
    })(UsersContainer);