import { useState, useEffect } from 'react'
import * as todosAPI from '../../utilities/todos-api'


export default function TodoPage() {

    const [todos, setTodos] = useState({ 
        title: '',
        description: ''
    })
    const [newTodos, setNewTodos] = useState({})
    const [newTodoInData, setNewTodoInData] = useState([])


    // useEffect( function() { 
    //     console.log('useEffect is running')
    //     async function getAllTodo() { 
    //         const todo = await todosAPI.index()
    //         console.log('hello')
    //         console.log(todo, 'this is hello')
    //     }
    //     getAllTodo()
    // }, [])

    const {title, description} = todos

    // console.log(todos, 'this is for the todos')



    function handleChange(evt) { 
        const newTodo = ({...todos, [evt.target.name]: evt.target.value})
        setTodos(newTodo)
        // console.log(todos)
    }

    function handleSubmit(evt) { 
        evt.preventDefault()
        todo()
        console.log(todos, 'this is for the todos')
    }

    async function todo() { 
        const newTodoo = await todosAPI.create(todos)
        setNewTodos(newTodoo)
        console.log(newTodoInData)
        console.log(newTodos, 'this is fot the new todos')
    }

    async function getAllTodo() { 
        const todo = await todosAPI.index()
        setNewTodoInData(todo)
    }
    getAllTodo()

    return (
        <>  
            <h1>This is for the todo</h1>
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                placeholder="title"
                value={title}
                name='title'
                onChange={handleChange}
                />
                <input
                type="text"
                placeholder="description-todo"
                value={description}
                name='description'
                onChange={handleChange}
                />
                <button>Add todo</button>
            </form>
        </>
    )
}