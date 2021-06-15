import React from "react";
import headerCss from "./Header.module.css"
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <div className={headerCss.header}>
            <img src = "https://1757140519.rsc.cdn77.org/static/v3/img/products/logo.png"/>
            <div className={headerCss.loginBlock}>
                {props.isAuth ? props.login
                    : <NavLink to={'/login'}>Login</NavLink> }
            </div>
        </div>
    )
}

export default Header