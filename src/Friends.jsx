import React, { useState } from 'react'
import Friend from './Friend'

 const Friends = () => {
     const [friends, setFriends] = useState(["Jeremy", "Will", "Elektra", "Lana"]);
     function unfriend(friendName){
        const newFriends = friends.filter((friend) => friend !== friendName);
        setFriends(newFriends)
     } 
    return (
        <ul>
        {friends.map((friend) => (
            <Friend key={friend} friend={friend} unfriend={unfriend} />
        ))}     
        </ul>
    )
}
export default Friends