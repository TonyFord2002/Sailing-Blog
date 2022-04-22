import axios from 'axios'
const url = 'https://localhost:3001/createuser/'


export function createUser(user){
    const response = axios.post(url, user)
    return response
}