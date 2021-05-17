import React from 'react'
import myPostsCSS from "./MyPosts.module.css"
import Post from "./Post/Post";


const MyPosts = (props) => {

    let postsElement = props.posts.map(posts => <Post message={posts.message} likeCounts={posts.likesCount}/>)


    let newPostElement = React.createRef();


    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text)
    }

    return (
        <div className={myPostsCSS.postsBlock}>
            <h3>MyPosts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}> </textarea>
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