import './App.css'
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import PostList from './components/PostList'
import AddPost from './components/AddPost'
import ViewPost from './components/ViewPost'
import EditPost from './components/EditPost'


function App() {
  return (
    <Router>
      <nav id='nav'>
        <Link to='/'> Home </Link>
        <Link to='/addPost'> Add A Post </Link>
      </nav>
      <Routes>
        <Route path= 'github.com/TonyFord2002/Sailing-Blog.git/' element={<PostList/>}></Route>
        <Route path= 'github.com/TonyFord2002/Sailing-Blog.git/addPost' element={<AddPost/>}></Route>
        <Route path= 'github.com/TonyFord2002/Sailing-Blog.git/:id' element={<ViewPost/>}></Route>
        <Route path= 'github.com/TonyFord2002/Sailing-Blog.git/:id/editRecord' element={<EditPost/>}></Route>
      </Routes>
    </Router>
  )
}

export default App