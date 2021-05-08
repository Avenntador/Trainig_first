import React from 'react'
import myPostsCSS from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {
    return(
        <div>
            <Post message = 'Zdarova' likeCounts = '20'/>
            <Post message = 'Moi perviy post' likeCounts = '30'/>
        </div>
    )
}
export default MyPosts