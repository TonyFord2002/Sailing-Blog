import { React, useState, useEffect } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import { editPost, getPost, deletePost} from '../services/sailing-api'


function EditPost() {
    const [data, setData] = useState([])
    let navigate = useNavigate()
    const {id} = useParams()

    useEffect(()=>{
        getPost(id)
        .then((res) => setData(res.data))
    },[])

const editOne = (event)=> {
        let edited = {
                    title: event.target.title.value,
                    body: event.target.body.value,
                    image: event.target.image.value
        }
        editPost(id, edited)
        navigate(`/${id}`)
    }

const deleteThisPost = ()=>{
    deletePost(id)
    navigate('/')
    }

  return (
    <div>
        
        <form onSubmit={editOne}>
        Title: <input type='text' name='title' defaultValue={data.title}/><br/>
        Description:<input type='text' name='body' defaultValue={data.body} size='50'/><br/>
        Image: <input type='text' name='image' defaultValue={data.image}/>
        <input type='submit' value='Edit Post'/>
    </form>
    <button style={{borderRadius:'7px' }} onClick={deleteThisPost}> Delete this post</button><br/>
    </div>
  )
}

export default EditPost