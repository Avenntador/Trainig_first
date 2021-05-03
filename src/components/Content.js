import React from 'react'
import contentCSS from "../css-modules/Content.module.css"

const Content = () => {
    return(
        <div className={contentCSS.content}>
            <img src = "https://helpx.adobe.com/content/dam/help/en/photoshop/how-to/compositing/_jcr_content/main-pars/image/compositing_1408x792.jpg"/>
            <div className={contentCSS.item}>
                ava+descr
            </div>
            <div className={contentCSS.item} >
                My posts
                <div className={contentCSS.item}>
                    New post
                </div>
                <div className={contentCSS.item}>
                    post1
                </div>
                <div className={contentCSS.item}>
                    post2
                </div>
            </div>

        </div>
    )
}

export default Content