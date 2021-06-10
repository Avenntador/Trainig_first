import React from 'react'
import contentCSS from "./ProfileInfo.module.css"
import Preloader from "../../Users/PreLoader/Preloader";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }



    return(
        <div className={contentCSS.descriptionBlock}>
            <img src = "https://helpx.adobe.com/content/dam/help/en/photoshop/how-to/compositing/_jcr_content/main-pars/image/compositing_1408x792.jpg"/>
            <div className={contentCSS.item}>
                <div className={contentCSS.profilePic}>
                    <img src={props.profile.photos.large}/>
                    <div>
                        {props.profile.fullName}
                    </div>
                    <div>
                        {props.profile.aboutMe}
                    </div>
                    <div>
                        {props.profile.contacts.facebook}
                    </div>
                    <div>
                        {props.profile.contacts.vk}
                    </div>
                    <div>
                        {props.profile.contacts.twitter}
                    </div>
                    <div>
                        {props.profile.lookingForAJob ? "lookingForAJob " + props.profile.lookingForAJobDescription : "not lookingForAJob"}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo