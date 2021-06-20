import axios from "axios";
import {userAPI} from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";
/*const SET_USER_PROFILE = "SET_USER_PROFILE";*/


let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
    /*userProf: null*/
    /*isFetching: false*/
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return  {
                ...state,
                ...action.data,
                isAuth: true
            }
     /*   case SET_USER_PROFILE:
            return  {
                ...state,
                isAuth: true,
                userProf: action.userProf

                /!*userProf: JSON.parse(JSON.stringify(action.userProf))*!/
            }*/
        default:
            return state;
    }
}



export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId,email,login}})
/*export const setAuthUserProfile = (userProf) => ({type: SET_USER_PROFILE, userProf})*/



export const setAuthUser = () => (dispatch) => {
   userAPI.setAuthUserAPI()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data;
                dispatch(setAuthUserData(id, email, login));
            }
        });
}

export default authReducer