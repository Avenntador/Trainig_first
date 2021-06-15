import './App.css';
import Navbar from "./Navbar/Navbar";
import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";
import DialogsContainer from "./Dialogs/DialogsContainer";
import UsersContainer from "./Users/UsersContainer";
import ProfileContainer from "./Profile/ProfileContainer";
import HeaderContainer from "./Header/HeaderContainer";

const App = (props) => {

    return (
            <div className="wrapper">
                <HeaderContainer />
                <Navbar state={props.state}/>
                <div className="wrapper-content">
                    <Route path='/dialogs'
                           render={() => <DialogsContainer />}/>
                    <Route path='/profile/:userId?'
                           render={() => <ProfileContainer />}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/users' render={() => <UsersContainer />}/>
                </div>
            </div>
    );
}

export default App;

