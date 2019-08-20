import React from 'react';
import classes from './Nav.module.css';
import {Link, NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to="/profile" className={classes.item} activeClassName-={classes.active}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/dialogs" className={classes.item} >Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/news" className={classes.item} activeClassName-={classes.active}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/music" className={classes.item} activeClassName-={classes.active}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/settings" className={classes.item} activeClassName-={classes.active}>Settings</NavLink>
            </div>
        </nav>
    )

};


export default NavBar;