import { useState, useEffect } from 'react'
import * as todosAPI from '../../utilities/todos-api'


export default function TodoPage() {

    const [todos, setTodos] = useState({ 
        title: '',
        description: ''
    })
    const [newTodos, setNewTodos] = useState({})
    const [newTodoInData, setNewTodoInData] = useState([])
    const [findId, setFindId] = useState('')


    useEffect( function() { 
        console.log('useEffect is running')
        async function getAllTodo() { 
            const todos = await todosAPI.index()
            console.log(todos)
            setNewTodoInData(todos)
            console.log(newTodos)
            // console.log(todos, 'indie the use effect')
        }
        getAllTodo()
    }, [newTodos, findId])

    const {title, description} = todos

    // console.log(todos, 'this is for the todos')



    function handleChange(evt) { 
        evt.preventDefault()
        const newTodo = ({...todos, [evt.target.name]: evt.target.value})
        setTodos(newTodo)
        // console.log(todos, 'in hande change')
    }

    function handleSubmit(evt) { 
        evt.preventDefault()
        todo()
        console.log(todos, 'this is for the todos')
    }

    async function todo() { 
        const newTodoo = await todosAPI.create(todos)
        setNewTodos(newTodoo)
        console.log(newTodoInData, 'this is for the newTodoINData')
        console.log(newTodos, 'this is fot the newTodos')
    }

    // async function getAllTodo() { 
    //     const allTodo = await todosAPI.index()
    //     setNewTodoInData(allTodo)
    // }
    // getAllTodo()

    async function handleDelete(todoId, id) { 
        console.log(todoId.target)
        console.log(todoId.id, 'this', id)
        const deleteTodo = await todosAPI.deleteTodo({ id: todoId.id })
        console.log(deleteTodo, 'this is for the handledelete')
        setFindId(deleteTodo._id)
    }

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
            <div>{newTodoInData.map((todo, idx) => (
                <div key={idx}>
                    <li>{todo.title}</li>
                    <li>{todo.description}</li>
                    <button onClick={(event) => {
                        console.log('onClick event: k', event);
                        handleDelete(event);
                    }}>Delete</button>
                </div>
                
            ))}</div>
        </>
    )
}