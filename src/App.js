import React from 'react';
import './App.css';
import Header from "./components/header/header";
import NavBar from "./components/nav/nav";
import Profile from "./components/profile/Profile.js";
import Dialogs from "./components/dialogs/Dialogs";
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
                    <Route path='/dialogs' component={() =>
                        <Dialogs store={props.store}
                            state={props.state.messagesPage}/>}/>
                    <Route path='/profile' component={() =>
                        <Profile
                            state={props.state.profilePage}
                            dispatch={props.dispatch}/>}/>
                    <Route path='/news' component={() => <News/>}/>
                    <Route path='/music' component={() => <Music/>}/>
                    <Route path='/settings' component={() => <Settings/>}/>
                    {/*<Dialogs/>*/}
                </Switch>

            </div>
        </div>

    );
}

export default App;
