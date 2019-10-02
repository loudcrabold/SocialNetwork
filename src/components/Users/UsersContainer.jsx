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

class UsersContainer extends React.Component {

    getUsers(page) {

        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count${this.props.pageSize}`).then(response => {

            this.props.setTotalUsersCount(response.data.totalCount)
            this.props.setUsers(response.data.items)
            this.props.setIsFetching(false)
        });
    }

    componentDidMount() {

        this.getUsers(this.props.currentPage);
    }


    onPageChanged = (p) => {
        this.props.setCurrentPage(p)
        this.getUsers(p);




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