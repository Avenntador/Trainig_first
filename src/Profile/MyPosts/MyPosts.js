import React from 'react'
import myPostsCSS from "./MyPosts.module.css"
import Post from "./Post/Post";





const MyPosts = (props) => {

    let postsElement = props.posts.map(posts => <Post message={posts.message} likeCounts={posts.likesCount}/>)



    let onAddPost = () => {
        props.addPost();

    }

    let onPostChange = (e) => {
        let text = e.target.value;
        props.updateNewPostText(text);

    }

    return (
        <div className={myPostsCSS.postsBlock}>
            <h3>MyPosts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                              value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={myPostsCSS.posts}>
                {postsElement}
            </div>
        </div>
    )
}
export default MyPosts