import React from 'react'
import PostCSS from "./Post.module.css"

const Post = (props) => {
    return(
            <div className={PostCSS.item}>
                <a>{props.message}/</a>
                    Likes = {props.likeCounts}
            </div>
    )
}
export default Post