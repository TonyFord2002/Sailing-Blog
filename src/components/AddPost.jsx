import React from 'react'
import {useNavigate} from 'react-router-dom'
import {createPost} from '../services/sailing-api'

function AddPost() {
    const nav = useNavigate()

    const addNewPost = (event)=>{
        event.preventDefault()
        let add = { title: event.target.title.value,
                    body: event.target.body.value,
                    image: event.target.image.value
                }
        createPost(add)
        nav('/')
    }

  return (
<div>
    <h1>Add a new topic</h1>
    <form onSubmit={addNewPost}>
        Title: <input type='text' name='title'/><br/>
        Description: <input type='text' name='body'/><br/>
        Image: <input type='text' name='image'/><br/>
        <input type='submit' value='Add Topic' size='50'/>
    </form>
</div>
  )
}

export default AddPost