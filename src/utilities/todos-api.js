import sendRequest from './send-request'

const BASE_URL = '/api/todos'

export function create() {
    return sendRequest(BASE_URL, 'POST')
}