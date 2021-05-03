import profileCSS from "../css-modules/Profile.module.css"

const Profile = () => {
    return(
        <div className= {profileCSS.nav}>
            <li>News</li>
            <li>Messages</li>
            <li>Music</li>
        </div>
    )
}

export default Profile