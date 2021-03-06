import {userAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';


let initialState =  {
    posts: [
        {id: 1, message: "Zdarova", likesCount: 12},
        {id: 2, message: "Moi perviy post", likesCount: 25},
    ],
    newPostText: 'something',
    profile: null
}


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return{
                ...state,
                newPostText: "",
                posts: [...state.posts,{
                    id: 5,
                    message: state.newPostText,
                    likesCount: 0
                }]
            }
        case UPDATE_NEW_POST_TEXT:
            return  {
                ...state,
                newPostText: action.newText
            }
        case SET_USER_PROFILE:
            return  {
                ...state,
                profile: action.profile
            }
        default: return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const setUserProfileAC = (profile) => ({type: SET_USER_PROFILE, profile})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})


export const setUserProfile = (userId) => (dispatch) => {
    userAPI.setUserProfileAPI(userId)
        .then(response => {
            dispatch(setUserProfileAC(response.data));
        });
}

export default  profileReducer