import React from 'react'
import {useState, useEffect} from 'react'
import {getPosts} from '../services/sailing-api'

function PostList() {
    const [List, setList] = useState([])

    useEffect(()=>{
        getPosts()
        .then((res) => setList(res.data))
    },[List])

  return (
    <div id='container'>
      <h1 id='welcome'>Welcome to my sailing blog</h1>
        <div id='posts'>
          {List.map((List, i)=>{
            return(
              <div id='post' key={i} >
                <h2><a href = {`/${List._id}`}>{List.title}</a></h2>
                <img src={List.image}/>
              </div>
            )
          })}
        </div>
      <h4><a href= {`/addPost`}>Add a new post</a></h4>
    </div>
  )
}

export default PostList