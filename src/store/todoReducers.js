import axios from "axios"

const initialState = {
    todos: []
}

const todoReducer = (state=initialState, action) => {
    if (action.type === 'ADD_TODO') {
        return {...state,
            todos: [...state.todos, action.payload]}
    }
    else if (action.type === 'DELETE_TODO_REQUEST') {
        return {
            todos: state.todos.filter(todo =>
                todo.id !== action.payload
            )
        }
    }
    else if (action.type === 'SET_TODOS') {
        return {...state, todos: action.payload}
    }
    else if (action.type === 'EDIT_TODOS') {
        const updated = state.todos.find(t => t.id === action.payload.id)
        if (updated) {
            const todos = state.todos.filter(
                t => Number(t.id) !== Number(action.payload.id))
            return {
                ...state,
                todos: [
                    ...todos,
                    {...updated,
                    ...action.payload}
                ]
            }
        }
        return state
    }
    return state
}

export const fetchTodos = () => {
    return  async (dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/todos',)
            .then(
                resp => dispatch({type: 'SET_TODOS', payload: resp.data})
            )
    }
}


export const deleteTodos = (id) => {
  return (dispatch) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(() => {
        dispatch(deleteTodoRequest(id));
      })

  }
}

const deleteTodoRequest = (id) => {
  return {
    type: 'DELETE_TODO_REQUEST',
    payload: id,
  }
}




export const addTodo = payload => ({type: "ADD_TODO", payload})
export default todoReducer

