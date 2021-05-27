import React from 'react'
import myPostsCSS from "./MyPosts.module.css"
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../Redux/profileReducer';




const MyPosts = (props) => {

    let postsElement = props.posts.map(posts => <Post message={posts.message} likeCounts={posts.likesCount}/>)



    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = (e) => {
        let text = e.target.value;
        props.dispatch(updateNewPostTextActionCreator(text));
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
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={myPostsCSS.posts}>
                {postsElement}
            </div>
        </div>
    )
}
export default MyPosts