import React from 'react'


const Friend = ({ friend, unfriend }) => {
    return <li onClick={() => unfriend(friend)}>{friend}</li>
}

export default Friend

