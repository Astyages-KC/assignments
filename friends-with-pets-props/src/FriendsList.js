import React from "react"
import Friend from "./Friend"

const FriendsList = props => {
    const { friends } = props

    const mappedFriends =  friends.map(friend => 
        <Friend 
        name={friend.name} 
        age={friend.age} 
        pets={friend.pets} 
        key={Math.random}
        />)

    return (
        <div>
            <h1>{props.name}</h1>
            <h2>{props.age}</h2>
            {mappedFriends}
        </div>
    )
}

export default FriendsList