import React from 'react'
import myPostsCSS from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = (props) => {
    return (
        <div className={myPostsCSS.postsBlock}>
            <h3>MyPosts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={myPostsCSS.posts}>
                <Post message='Zdarova' likeCounts='20'/>
                <Post message='Moi perviy post' likeCounts='30'/>
            </div>
        </div>
    )
}
export default MyPosts