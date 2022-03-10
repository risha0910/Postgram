import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
function PostItem({post}){

    const history = useHistory()

   function deletepost(postid){
       axios.post('/api/post/deletepost',{postid:postid})
       .then(res=>{
           alert(res.data)
           history.go(0) //to refresh the homepage after deletion of the post
        })
       .catch(err=>{console.log(err)})
   }

    return (

    <div className='col-md-8 shadow p-3 mb-5 bg-white rounded'>
        <h1 className='p-1'>{post.title}</h1>
         {/* p-1 indicates padding of 10px in bootstrap */}
        <img  style={{height:'200px'}} src={post.imageurl} className='img-fluid p-1'/>
        <p className='p-1'>{post.description}</p>

        <Link to={`/editpost/${post.postid}`}><button className='btn btn-success'>Edit</button></Link>
        <button className='btn btn-danger' onClick={()=>{deletepost(post.postid)}}>Delete</button>
        
    </div>
    )

}

export default PostItem