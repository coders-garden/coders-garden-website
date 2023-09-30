import React from 'react'
import Community from './Community'

const getMembers = async () => {
    const res = await fetch('https://coders-garden-backend.vercel.app/members', {
        next: {
            //revalidate in 3600sec
            revalidate: 3600
        }
    })
    return res.json()
}

const Members = async () => {
    const profiles = await getMembers()
    const arr = profiles["data"]
    return (
        <Community profiles={arr} />
    )
}

export default Members