import React, { useEffect, useContext, useState } from 'react';
import {UserContext} from '../context/UserProvider';
import Property from './Property.js';

function AgentPage(){
    const { getAllPosts, posts } = useContext(UserContext)
    const [firstLoad, setFirstLoad] = useState(true)
    useEffect(() => {
        if(firstLoad){
            getAllPosts()
            setFirstLoad(false)
        }
    },[getAllPosts, posts, firstLoad])

    return(
        <div>
            <h1 className='agentpageTop'>Your property list:</h1>
            <div className='agentpageList'>
            {posts.map((post, index) => <Property key={index} {...post}  />
            )}
            </div>
        </div>
    )
}

export default AgentPage