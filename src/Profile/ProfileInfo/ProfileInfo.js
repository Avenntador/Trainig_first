import React from 'react'
import contentCSS from "./ProfileInfo.module.css"


const ProfileInfo = () => {
    return(
        <div className={contentCSS.descriptionBlock}>
            <img src = "https://helpx.adobe.com/content/dam/help/en/photoshop/how-to/compositing/_jcr_content/main-pars/image/compositing_1408x792.jpg"/>
            <div className={contentCSS.item}>
                ava+descr
            </div>
        </div>
    )
}

export default ProfileInfo