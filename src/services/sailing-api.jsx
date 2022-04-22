import axios from 'axios'
const url = 'https://tonysailingblog-api.herokuapp.com/sailing/'

export function getPosts(){
    const response = axios.get(url)
    return response
}

export function getPost(id){
    const response = axios.get(url+id)
    return response
}

export function deletePost(id){
    const response = axios.delete(url+id)
    return response
}



export function createPost(add){
    const response = axios.post(url, add)
    return response
}

export function editPost(id, edited){
    const response = axios.put(url+id, edited)
    return response
}