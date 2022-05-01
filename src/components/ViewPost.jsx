import {React, useState, useEffect} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import {getPost, editPost} from '../services/sailing-api'


function ViewPost() {
  const navigate= useNavigate()
  const {id} = useParams()
  const [post, setPost] = useState([])
  const [reply, setReply] = useState([])
  
  useEffect(()=>{
    getPost(id)
    .then((res) => {setPost(res.data)
                    setReply(res.data.reply)})
  },[id])
  
  const addReply = event=>{
    event.preventDefault()
    const rep = reply
    rep.push({name: event.target.name.value, message: event.target.message.value})

  const newReply ={ name: reply.name, message: post.message, reply: rep}
    editPost(id, newReply)
    navigate(`/${id}`)
  }

  return (
    
    <div id='onepost'>
    <h1 id='posttitle'>{post.title}</h1>
    <h2 id='postdec'>{post.body}</h2><br/>
    <br/>
    <div id='replys'>

        {reply.map((comment, i)=>{
            return(
              <div id='reply' key ={i}>
                <h3>{comment.name}</h3>
                <h4>{comment.message}</h4>
              </div>
            )
          })
        }
    </div>
    <h3 id='addcomm'>Add a comment</h3>
    <form onSubmit={addReply}>
      <input type='text' name='name' defaultValue={'Name'}/><br/>
      <input type='text' name='message' defaultValue={'Comments'} style={{height:'100px', width:'300px'}}/><br/>
      <input style={{borderRadius: '7px'}} type= 'submit'/>
    </form>
    
    <button style={{borderRadius:'7px' }} onClick={()=> {navigate(`/${id}/editRecord`)}}> Edit this post </button><br/>
    <button style={{borderRadius:'7px' }} onClick={()=> {navigate('/')}}> Back Home </button>
       
      </div> 
    
  )
}

export default ViewPost