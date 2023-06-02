import './App.css'
import TodoList from './component/TodoList'
import EditTodo from './component/EditTodo'
import {Routes, Route} from 'react-router-dom'


function App() {
  return (
    <Routes>
      <Route path='/' element={<TodoList />} />
      <Route path='/:id' element={<EditTodo />} />
    </Routes>
  )
}

export default App
