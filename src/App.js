import './App.css';
import Navbar from "./Navbar/Navbar";
import Header from "./Header/Header";
import Profile from "./Profile/Profile";
import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";
import DialogsContainer from "./Dialogs/DialogsContainer";
import UsersContainer from "./Users/UsersContainer";

const App = (props) => {

    return (
        <BrowserRouter>
            <div className="wrapper">
                <Header/>
                <Navbar state={props.state}/>
                <div className="wrapper-content">
                    <Route path='/dialogs'
                           render={() => <DialogsContainer />}/>
                    <Route path='/profile'
                           render={() => <Profile />}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/users' render={() => <UsersContainer />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

