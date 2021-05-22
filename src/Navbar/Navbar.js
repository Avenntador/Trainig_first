import navbarCSS from "./Navbar.module.css"
import {NavLink} from "react-router-dom";
import React from "react";
import FriendsTopic from "./FriendsTopic/FriendsTopic";


const Navbar = (props) => {
    let friend = props.state.dialogs.map(sidebar => <FriendsTopic name={sidebar.name} imgURL={sidebar.imgURL}/>);

    return (
        <div className={navbarCSS.nav}>
            <div className={navbarCSS.navItems}>
                <div className={navbarCSS.item}>
                    <NavLink to="/profile" activeClassName={navbarCSS.active}>Profile</NavLink>
                </div>
                <div className={navbarCSS.item}>
                    <NavLink to="/dialogs" activeClassName={navbarCSS.active}>Messages</NavLink>
                </div>
                <div className={navbarCSS.item}>
                    <NavLink to="/news" activeClassName={navbarCSS.active}>News</NavLink>
                </div>
                <div className={navbarCSS.item}>
                    <NavLink to="/music" activeClassName={navbarCSS.active}>Music</NavLink>
                </div>
                <div className={navbarCSS.item}>
                    <NavLink to='settings' activeClassName={navbarCSS.active}>Settings</NavLink>
                </div>
            </div>
            <div className={navbarCSS.friends}>
                FRIENDS
                <div className={navbarCSS.friendsTopic}>
                    {friend}
                </div>
            </div>

        </div>
    )
}

export default Navbar