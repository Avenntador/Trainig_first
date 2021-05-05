import profileCSS from "./Navbar.module.css"

const Navbar = () => {
    return(
        <div className= {profileCSS.nav}>
            <li>News</li>
            <li>Messages</li>
            <li>Music</li>
        </div>
    )
}

export default Navbar