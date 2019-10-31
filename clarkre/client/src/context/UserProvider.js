import React, { useState } from "react";
import axios from "axios";

export const UserContext = React.createContext();
const userAxios = axios.create()

userAxios.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}`
    return config
})

function UserProvider(props) {
  const initState = {
    user: JSON.parse(localStorage.getItem("user")) || {},
    token: localStorage.getItem("token") || "",
    posts: [],
    userPosts: []
  };
  const [userState, setUserState] = useState(initState);

  const signup = credentials => {
    axios
      .post("/auth/signup", credentials)
      .then(res => {
        const { user, token } = res.data;
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", token);
        setUserState(prevUserState => ({
            ...prevUserState,
            ...res.data
        }));
      })
      .catch(err => console.log(err.response.data.errMsg));
  };

  const login = credentials => {
    axios
      .post("/auth/login", credentials)
      .then(res => {
        const { user, token } = res.data;
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", token);
        setUserState(prevUserState => ({
            ...prevUserState,
            ...res.data
        }));
      })
      .catch(err => console.log(err));
  };

  const logout = () => {
     localStorage.removeItem('token')
     localStorage.removeItem('user')
     setUserState({
         user: {},
         token: "",
         posts: [],
        userPosts: []
     }) 
  }

    const getAllPosts = () => {
        userAxios.get('/api/posts')
            .then(res => {
                setUserState(prevUserState => ({
                    ...prevUserState,
                    posts: res.data
                }))
            })
            .catch(err => console.log(err))
    }

    const getUserPosts = () => {
        userAxios.get('/api/posts/user')
        .then(res => {
            setUserState(prevUserState => ({
                ...prevUserState,
                userPosts: res.data
            }))
        })
        .catch(err => console.log(err))
    }

  return (
    <UserContext.Provider
      value={{
        user: userState.user,
        token: userState.token,
        posts: userState.posts,
        userPosts: userState.userPosts,
        signup: signup,
        login: login,
        logout: logout,
        getAllPosts,
        getUserPosts
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}

export default UserProvider
