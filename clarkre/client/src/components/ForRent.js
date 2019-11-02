import React, { useEffect, useContext, useState } from 'react';
import {UserContext} from '../context/UserProvider';

function ForRent(){
    const {getUserPosts, userPosts} = useContext(UserContext)
    const [firstAgentLoad, setFirstAgentLoad] = useState(true)
    useEffect(() => {
        if(firstAgentLoad){
            getUserPosts()
            setFirstAgentLoad(false)
        }
    }, [getUserPosts, userPosts, firstAgentLoad])
    return(
        <div>
            For Rent!!!
            {userPosts.map((userPost, index) => <h1 key={index}>{userPost.city}</h1>)}
        </div>
    )
}

export default ForRent