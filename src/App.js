import React from 'react';
import './App.css';

import NavBar from "./components/nav/nav";

import DialogsContainer from "./components/dialogs/DialogsContainer";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Settings from "./components/settings/Settings";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Login from "./components/login/Login";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import HeaderContainer from "./components/header/headerContainer";


function App(props) {

    return (

        <div className='app-wrapper'>
            <HeaderContainer/>
            <NavBar/>


            <div className='app-wrapper-content'>
                <Switch>
                    <Route path='/dialogs' render={() =>
                        <DialogsContainer />}/>
                    <Route path='/profile/:userId?' render={() =>
                        <ProfileContainer/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/login' render={() => <Login/>}/>

                </Switch>

            </div>
        </div>

    );
}

export default App;
