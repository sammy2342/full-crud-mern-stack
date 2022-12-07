import { useState } from 'react'


export default function TodoPage() {

    const [todos, setTodos] = useState({ 
        title: '',
        description: ''
    })

    const {title, description} = todos

    // console.log(todos, 'this is for the todos')

    function handleChange(evt) { 
        const newTodo = ({...todos, [evt.target.name]:[evt.target.value]})
        setTodos(newTodo)
        // console.log(todos)
    }

    function handleSubmit(evt) { 
        evt.preventDefault()
        console.log(todos)
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
        </>
    )
}