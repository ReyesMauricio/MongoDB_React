const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    todoNombre: String,
    todoDescripcion: String,
    done: {
        type: Boolean,
        default: false
    }
},
{
    timestamps: true
})

const todoModel = mongoose.model("todos", todoSchema)
module.exports = todoModel