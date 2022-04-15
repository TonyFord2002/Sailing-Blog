import './App.css'
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import PostList from './components/PostList'
import AddPost from './components/AddPost'
import ViewPost from './components/Show'
import EditPost from './components/EditPost'


function App() {
  return (
    <Router>
      <nav id='nav'>
        <Link to='https://tonyford2002.github.io/Sailing-Blog/'> Home </Link>
        <Link to='https://tonyford2002.github.io/Sailing-Blog/addPost'> Add A Post </Link>
      </nav>
      <Routes>
        <Route path= 'Sailing-Blog/' element={<PostList/>}></Route>
        <Route path= 'Sailing-Blog/addPost' element={<AddPost/>}></Route>
        <Route path= 'Sailing-Blog/:id' element={<ViewPost/>}></Route>
        <Route path= 'Sailing-Blog/:id/editRecord' element={<EditPost/>}></Route>
      </Routes>
    </Router>
  )
}

export default App