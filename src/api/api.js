import * as axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "6bfc5889-c23e-4689-817c-0ef76f8f953a"
    }
})

export const authAPI = {};

export const usersAPI = {
    getUsers(page, pageSize) {
        return instance.get(`users?page=${page}&count${pageSize}`,
            {withCredentials: true}).then(response => {
            return response.data
        })
    },
    follow(userId){
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    },
    unFollow(userId){
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    }
};
export const profileAPI = {
    authMe(){
         return instance.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
    }

};
export const followAPI = {};