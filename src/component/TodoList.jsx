import {useSelector, useDispatch} from 'react-redux'
import { useEffect, useState } from 'react'
import {addTodo, deleteTodos, fetchTodos} from '../store/TodoReducers'


const TodoList = () => {
    const [newTodo, setNewTodo] = useState('')
    const todos = useSelector(state => state.todos.todos)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(fetchTodos())
    }, [dispatch])


    const inputTodo = (e) => {
        setNewTodo(e.target.value)
    }

    const sendForm = () => {
        if (newTodo.trim() !== ''){
            dispatch(addTodo(newTodo))
            setNewTodo('')
        }
    }



    return (
        <div>
            <h4>TodoList</h4>
            <input type="text"
                onChange={inputTodo} value={newTodo}/>
            <button
                onClick={sendForm}>
            Добавить</button>

            <div>
                {todos &&
                    <ul>
                        {todos.map(t =>
                            <li key={t.id} >
                                {t.title}
                                <button onClick={() => dispatch(deleteTodos(t.id))}>Delete</button>
                            </li>
                        )}
                    </ul>
                }
            </div>
        </div>
    )
}
export default TodoList