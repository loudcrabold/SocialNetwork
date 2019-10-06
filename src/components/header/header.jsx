import React from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";


const Header = (props) => {

    return <header className={classes.header}>
        <img src="https://png.pngtree.com/element_pic/00/16/07/115783931601b5c.jpg" alt=""/>
        <div className={classes.loginBlock}>
            {props.isAuth ? props.login :   <NavLink to={'login'}>Login {props.login}</NavLink>}
        </div>
    </header>
};

export default Header;