import './App.css';
import Navbar from "./Navbar/Navbar";
import Header from "./Header/Header";
import Profile from "./Profile/Profile";
import React from "react";
import Dialogs from "./Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <Header/>
                <Navbar state={props.state.dialogsPage}/>
                <div className="wrapper-content">
                    <Route path='/dialogs'
                           render={() => <Dialogs state={props.state.dialogsPage}
                                                  addNewMessage={props.addNewMessage}
                                                  updateNewTextMessage={props.updateNewTextMessage}
                                                  newMessage={props.state.dialogsPage.newMessage}/>}/>
                    <Route path='/profile'
                           render={() => <Profile
                               profilePage={props.state.profilePage}
                               addPost={props.addPost}
                               updateNewPostText={props.updateNewPostText}/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
