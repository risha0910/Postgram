import React from 'react'
import { useState } from 'react'
import uniqid from 'uniqid'
import { BrowserRouter, Route } from 'react-router-dom'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
function AddPost() {

    const [title, settitle] = useState('');
    const [imageurl, setimageurl] = useState('');
    const [description, setdescription] = useState('');

    const history = useHistory()

    function addpost() {
        var post = {
            title: title,
            imageurl: imageurl,
            description: description,
            postid: uniqid() //the uniqid will be different for every post
        }

        // while send data from client to server - post method
        //whenever we are retreiving data from server- get method
        //post method accepts two parameters api link and the data(here its post) which we need to send.
        //the axios method has two call back functions, 1st is then and 2nd is catch
        //then is the success call back function and catch is the failure call back function
        // in the success call back fn we get the response nd in the failure callback fn we get the error

        axios.post('/api/post/addnewpost', post)
            .then(res => {
                alert(res.data)
                history.push('/')
            }) //if success print the response in alert
            .catch(err => { console.log(err) }) // if error print error in console
    }

    return (
        <div className='row justify-content-center'>
            <div className='col-md-6'>
                <h3 className='m-3'>Add Post</h3>
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
                    <button onClick={addpost} className='btn btn-danger' >Upload Post</button>
                    {/* after the upload post button is clicked we want to send the data to the data base hence we will use on of the http clients either axios aor fetch but since axios is one of the best http clients, hence we use it */}
                </div>

            </div>

        </div>
    )

}

export default AddPost