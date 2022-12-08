const mongoose = require('mongoose')

const Schema = mongoose.Schema

const todoSchema = new Schema ({ 
    title: String,
    description: String
}, { 
    timestamps: true, 
    // toJSON: { virtuals: true }
})

module.exports = mongoose.model('Todo', todoSchema)