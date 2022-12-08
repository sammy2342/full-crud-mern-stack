const Todo = require('../../models/todo')


module.exports = { 
    create, 
    index
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