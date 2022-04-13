import React from 'react'
import {useState, useEffect} from 'react'
import {getPosts} from '../services/sailing-api'


function PostList() {
    const [List, setList] = useState([])

    useEffect(()=>{
        getPosts()
        .then((res) => setList(res.data))
    },[])

  return (
    <div id='container'>
      <h1 style={{color:'blue', fontFamily:'cursive'}} >Welcome to my sailing blog</h1>
        <div id='posts'>
          {List.map((List, i)=>{
            return(
              <div id='post' key={i} >
                <h2><a href = {`/${List._id}`}>{List.title}</a></h2>
              </div>
            )
          })}
          <h3><a href= {`/addPost`}>Add a new post</a></h3>
        </div>
    </div>
   

  )
}

export default PostList