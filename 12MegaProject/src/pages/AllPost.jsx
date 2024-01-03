import React, { useEffect, useState } from 'react'
import {Container, PostCard} from '../components/index'
import appwriteservice from '../appwrite/config'

function AllPost() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteservice.getPosts([]).then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])

  return (
    <div>
        <Container>
            <div>
                {posts.map((post) => (
                    <div key={post.$id}>
                        <PostCard post={post}/>
                    </div>
                ))}
            </div>
        </Container>
    </div>
  )
}

export default AllPost