import React from 'react'
import UserList from './UserList'
import TodoList from './TodoList'
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css"
import SearchUsers from './UserList';
const App = () => {
  return (
    <div className='App'>
      <h2>Higher Order Component</h2>
      <div className='section'>
      <div>
      <div>
      </div>
      <SearchUsers/>
      </div>
      <div>
      <TodoList/>
      </div>
      
      </div>
    </div>
  )
}

export default App
