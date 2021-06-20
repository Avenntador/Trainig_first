import axios from "axios";


const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "aa0e0523-8232-48d8-8f7d-7e69f18102a3"
    }

})

export const userAPI = {
    getUsersAPI(currentPage = 1, pageSize = 10) {
        return  axiosInstance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    followAPI(userId) {
        return    axiosInstance.post(`follow/${userId}`)
    },
    unfollowAPI(userId) {
        return   axiosInstance.delete(`follow/${userId}`)
    },
    setAuthUserAPI() {
        return axiosInstance.get(`auth/me`)
    },
    setUserProfileAPI(userId) {
        return axiosInstance.get(`profile/` + userId)
    }
}
