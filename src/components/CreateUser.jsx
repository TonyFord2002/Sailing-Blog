import React from 'react'
import {useNavigate} from 'react-router-dom'
import { createUser } from '../services/user-api'

function CreateUser() {
  const nav = useNavigate()

  const createNewUser = (event)=>{
      event.preventDefault()
      let newUser = { name: event.target.username.value,
                      password: event.target.password.value
                    }
                    
      createUser(newUser)
      nav('/')
  }

  return (
    <div>Create New User<br/>

      <form onSubmit={createNewUser}>
      Username: <input type='text' name='username'/>
      Password: <input type='text' name='password'/>
      <input type='submit' value='Submit'/>
      </form>

    </div>
  )
}

export default CreateUser