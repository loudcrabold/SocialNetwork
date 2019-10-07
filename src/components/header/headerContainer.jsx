import React from 'react';
import Header from "./header";
import {connect} from "react-redux";
import {authMe, setAuthUserData} from "../../redux/auth-reducer";


class HeaderContainer extends React.Component {
    componentDidMount() {
        console.log(123);
        this.props.authMe();
    }

    render() {
        return <Header {...this.props}/>
    }
}


const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});
export default connect(mapStateToProps, {setAuthUserData, authMe})(HeaderContainer);