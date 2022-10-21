import axios from axios;

const URL = 'http://localhost:8080/auth/';

export const login = (username, password) => {
  return axios.post(URL+"/login", {username, password}).then((res)=> {
    if(res.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(res.data))
    }
    return res.data
  })
}

export const register = (username, email, password) => {
    return axios.post(URL+"/register", {username, email, password})
}

export const logout = () => {
    localStorage.removeItem("user")
}