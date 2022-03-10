import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import PostItem from './PostItem';
function PostList() {
    const [postsdata, setpostsdata] = useState([])

    useEffect((req, res) => {
        axios.get('/api/post/getposts')
            .then(res => { console.log(res.data) 
                setpostsdata(res.data)})
        
            .catch(err => { console.log(err) })
    }, [])

    const postlist = postsdata.map(post => { //map method accepts object as parameter
        return (
            <div className='row justify-content-center'>
                <PostItem post={post} />
            </div>
        )

    })


    return (
        <div>
            {postlist}
        </div>
    )

}

export default PostList