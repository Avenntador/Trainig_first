import React from 'react'
import contentCSS from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return(
        <div className={contentCSS.content}>
            <img src = "https://helpx.adobe.com/content/dam/help/en/photoshop/how-to/compositing/_jcr_content/main-pars/image/compositing_1408x792.jpg"/>
            <div className={contentCSS.item}>
                ava+descr
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile