import React from 'react';
import './App.css';
import Header from "./components/header/header";
import NavBar from "./components/nav/nav";
import Profile from "./components/profile/Profile.js";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Settings from "./components/settings/Settings";
import News from "./components/news/News";
import Music from "./components/music/Music";


function App(props) {

    return (

        <div className='app-wrapper'>
            <Header/>
            <NavBar/>


            <div className='app-wrapper-content'>
                <Switch>
                    <Route path='/dialogs' render={() =>
                        <DialogsContainer />}/>
                    <Route path='/profile' render={() =>
                        <Profile/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>

                </Switch>

            </div>
        </div>

    );
}

export default App;
