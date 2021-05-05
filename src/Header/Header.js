import React from "react";
import headerCss from "./Header.module.css"

const Header = () => {
    return (
        <div className={headerCss.header}>
            <img src = "https://1757140519.rsc.cdn77.org/static/v3/img/products/logo.png"/>
        </div>
    )
}

export default Header