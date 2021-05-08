import React from 'react'
import PostCSS from "./Post.module.css"

const Post = (props) => {

    return(
            <div className={PostCSS.item}>
                {props.message}
            </div>
    )
}
export default Post