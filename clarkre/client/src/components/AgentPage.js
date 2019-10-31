import React, { useEffect, useContext, useState } from 'react';
import {UserContext} from '../context/UserProvider';

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
            Where are the posts?????
            {posts.map((post, index) => <h1 key={index}>{post.city}</h1>)}
        </div>
    )
}

export default AgentPage