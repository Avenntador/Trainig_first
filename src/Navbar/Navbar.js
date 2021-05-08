import profileCSS from "./Navbar.module.css"
import {NavLink} from "react-router-dom";
import React from "react";

const Navbar = () => {
    return(
        <div className= {profileCSS.nav}>
            <div className={profileCSS.item}>
                <NavLink to="/profile" activeClassName={profileCSS.active}>Profile</NavLink>
            </div>
            <div className={profileCSS.item}>
                <NavLink to ="/dialogs" activeClassName={profileCSS.active}>Messages</NavLink>
            </div>
            <div className={profileCSS.item}>
                <NavLink to="/news" activeClassName={profileCSS.active}>News</NavLink>
            </div>
            <div className={profileCSS.item}>
                <NavLink to="/music" activeClassName={profileCSS.active}>Music</NavLink>
            </div>
            <div className={profileCSS.item}>
                <NavLink to='settings' activeClassName={profileCSS.active}>Settings</NavLink>
            </div>
        </div>
    )
}

export default Navbar