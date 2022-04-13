import {React, useState, useEffect} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import {getPost, updatePost} from '../services/sailing-api'

function ViewPost() {
  const navigate= useNavigate()
  const {id} = useParams()
  const [post, setPost] = useState([])
  const [reply, setReply] = useState([])
  
  useEffect(()=>{
    getPost(id)
    .then((res) => {setPost(res.data)
      setReply(res.data.reply)})
  },[post])
  
  const addReply = event=>{
    const rep = reply
    rep.push({name: event.target.name.value, message: event.target.message.value})
    const newReply ={ title: reply.title, reply: post.body, reply: rep}
    updatePost(id, newReply)
    navigate(`/${id}`)
  }

  return (
    
    <div id={'onepost'}>
    <h1>{post.title}</h1>
    <h2>{post.body}</h2><br/>
    <br/>
    <div>
        {
          reply.map((comment, i)=>{
            return(
              <div key ={i}>
                <h3>{comment.name}</h3>
                <h4>{comment.message}</h4>
              </div>
                
            )
          })
        }
    </div>

    <form onSubmit={addReply}>
      <input type='text' name='name' defaultValue={'Name'}/><br/>
      <input type='text' name='message' defaultValue={'Comment'}/>
      <input type= 'submit'/>
    </form>
    
    <button style={{borderRadius:'7px' }} onClick={()=> {navigate(`/${id}/editRecord`)}}> Edit this post </button><br/>
    <button style={{borderRadius:'7px' }} onClick={()=> {navigate('/')}}> Back Home </button>
       
      </div> 
    
  )
}

export default ViewPost