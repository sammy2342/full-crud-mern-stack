import sendRequest from './send-request'

const BASE_URL = '/api/todos'

export function create(todoData) {
    console.log(todoData, 'this is in the create utileies api')
    return sendRequest(BASE_URL, 'POST', todoData)
}

export function index() { 
    return sendRequest(BASE_URL)
}

export function deleteTodo(todoId) { 
    console.log(todoId, 'this is in the delete')
    return sendRequest(`${BASE_URL}/${todoId}`, 'DELETE')
}