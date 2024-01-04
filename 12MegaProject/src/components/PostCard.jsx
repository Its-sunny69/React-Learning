import React from 'react'
import appwriteservice from '../appwrite/config'
import { Link } from 'react-router-dom'

function PostCard({ $id, title, featureImage }) {
    return (
        <Link to={`/post/${$id}`}>
            <div className='w-full bg-gray-100 rounded-xl'>
                <div className='w-full justify-center'>
                    <img src={appwriteservice.getFilePreview(featureImage)} alt={title} />
                </div>
                <h1>{title}</h1>
            </div>
        </Link>
    )
}

export default PostCard