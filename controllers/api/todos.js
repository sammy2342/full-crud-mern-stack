const { findByIdAndDelete } = require('../../models/todo')
const Todo = require('../../models/todo')



module.exports = { 
    create, 
    index, 
    delete: deleteTodos
}

async function create(req, res) { 
    try { 
        console.log(req.body, 'this')
        const todo =  new Todo(req.body)
        console.log(req.body)
        console.log(todo, 'this is for the todo')
        await todo.save()
        res.json(todo)
    } catch(error) {
        console.log(error)
    }
}

async function index(req, res) { 
    console.log(req.body, 'this is the req.body for the index')
    try {
        const todos = await Todo.find({})
        res.json(todos)
    } catch(error) {
        console.log(error)
    }
}

async function deleteTodos(req, res) { 
    console.log(req.params, 'req.params')
    console.log(req.body)
    try { 
        console.log(req.params, 'this is for req.prams in delete')
        const deleteTodo = await Todo.findOneAndDelete()
        console.log(deleteTodo, 'this is for the delete todo')
        res.json(deleteTodo)
    } catch(error) {
        console.log(error)
    }
}