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

const App = (props) => {

    return (
        <BrowserRouter>
            <div className="wrapper">
                <Header/>
                <Navbar state={props.state.dialogsPage}/>
                <div className="wrapper-content">
                    <Route path='/dialogs'
                           render={() => <DialogsContainer store={props.store}/>}/>
                    <Route path='/profile'
                           render={() => <Profile store={props.store}/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
