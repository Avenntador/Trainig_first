import React from 'react'
import myPostsCSS from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {
    return(
        <div>
            <Post message = 'Zdarova'/>
            <Post message = 'Moi perviy post'/>

        </div>

    )
}

export default MyPosts