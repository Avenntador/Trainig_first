const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let initialState =  {
    posts: [
        {id: 1, message: "Zdarova", likesCount: 12},
        {id: 2, message: "Moi perviy post", likesCount: 25},
    ],
        newPostText: 'something'
}

 const profileReducer = (state = initialState, action) => {
     switch (action.type) {
         case ADD_POST:
             let newPost = {
                 id: 5,
                 message: state.newPostText,
                 likesCount: 0
             }
             state.posts.push(newPost);
             state.newPostText = '';
             break;
         case UPDATE_NEW_POST_TEXT:
             state.newPostText = action.newText;
             break;
     }
    return state;
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default  profileReducer