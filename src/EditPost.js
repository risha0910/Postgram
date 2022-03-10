import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import axios from 'axios'
function EditPost() {
    //useParams is used to retrieve the parameters from the url
    const params = useParams()
    const [title, settitle] = useState('');
    const [imageurl, setimageurl] = useState('');
    const [description, setdescription] = useState('');

    const history = useHistory()

    //useEffect hook will be executed automatically whenever the component is rendered
    useEffect((req, res) => {
        axios.post('/api/post/getpostdata', { postid: params.postid })
            .then(res => {
                console.log(res.data[0])
                const postdata = res.data[0]
                settitle(postdata.title)
                setimageurl(postdata.imageurl)
                setdescription(postdata.description)

            })
            .catch(err => { console.log(err) })
    }, [])
    function editpost() {
        const updatedpost = {
            title: title,
            imageurl: imageurl,
            description: description,
            postid: params.postid
        }
        axios.post('/api/post/updatepost', updatedpost)
            .then(res => {
                console.log(res)
                alert(res.data)
                history.push('/')
            })
            .catch(err => { console.log(err) })

    }
    return (
        <div className='row justify-content-center' >
            <div className='col-md-6'>
                <h3 className='m-3'>Edit The Post</h3>
                <div>
                    <input type="text" placeholder="Enter title" className='form-control'
                        value={title} onChange={(e) => { settitle(e.target.value) }}
                    />
                    <input type="text" placeholder="image url" className='form-control'
                        value={imageurl} onChange={(e) => { setimageurl(e.target.value) }}
                    />
                    <textarea cols='30' rows='10' placeholder='Description' className='form-control'
                        value={description} onChange={(e) => { setdescription(e.target.value) }}
                    />
                    <button onClick={editpost} className='btn btn-danger' >Update Post</button>
                    {/* after the upload post button is clicked we want to send the data to the data base hence we will use on of the http clients either axios aor fetch but since axios is one of the best http clients, hence we use it */}
                </div>

            </div>



        </div>
    )

}

export default EditPost