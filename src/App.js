import './App.css'
import React, {useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import PostList from './components/PostList'
import AddPost from './components/AddPost'
import ViewPost from './components/ViewPost'
import EditPost from './components/EditPost'
import CreateUser from './components/CreateUser'
import ReactSwitch from 'react-switch'
export const ThemeContext = React.createContext(null)

function App() {
  const [theme, setTheme] = useState('light')

  const toggleTheme = ()=> {
    setTheme((cur)=>(cur ==='light'?'dark':'light'))
  }
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
    <div className='App' id={theme}>
    <Router>
      <nav id='nav'>
        <Link to='/'> Home </Link>
        <Link to='/addPost'> Add A Post </Link><br/>
        <Link to ='/createuser'> Create New User</Link>
       <span id='switch'>{theme} mode<ReactSwitch onChange={toggleTheme} checked={theme=== 'dark'}/></span>
      </nav>
      <Routes>
        <Route path= '/' element={<PostList/>}></Route>
        <Route path= '/addPost' element={<AddPost/>}></Route>
        <Route path= '/:id' element={<ViewPost/>}></Route>
        <Route path= '/:id/editRecord' element={<EditPost/>}></Route>
        <Route path= '/createuser' element={<CreateUser/>}></Route>
      </Routes>
    </Router>
    </div>
    </ThemeContext.Provider>
  )
}

export default App