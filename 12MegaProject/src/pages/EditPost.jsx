import React, {useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Container, PostForm } from '../components/index'
import appwriteservice from '../appwrite/config'

function EditPost() {
    const [post, setpost] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (slug) {
            appwriteservice.getPost(slug).then((post) => {
                if (post) {
                    setpost(post)  
                }
            })
        } else {
            navigate('/')
        }
    }, [slug, navigate])

  return post ? (
    <div>
        <Container>
            <PostForm post={post} />
        </Container>
    </div>
  ) : null 
}

export default EditPost