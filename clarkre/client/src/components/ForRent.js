import React, { useEffect, useContext, useState } from 'react';
import {UserContext} from '../context/UserProvider';
import Property from './Property.js';

function ForRent(){
    const {getUserPosts, userPosts, posts} = useContext(UserContext)
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
         <div className='agentpageList'>
            {posts.map((post, index) => <Property key={index} {...post}  />
            )}</div>
        </div>
    )
}


export default ForRent