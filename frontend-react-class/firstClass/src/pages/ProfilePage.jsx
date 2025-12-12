
import React from 'react'
import { useParams } from 'react-router-dom'

const ProfilePage = () => {
    const { userId } = useParams();
    return (
        <div className="">
            <h1>This is the Profile page {userId}</h1>
        </div>
    )
}

export default ProfilePage