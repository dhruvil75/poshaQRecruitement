const mong = require('mongoose');
const Schema = mong.Schema;

const taskSchema = new Schema({
    task: {
        type: String,
        required: true
    },
});
const toDoSchema = new Schema({
    tasks: [taskSchema],
    label: {
        type: String,
        requried: true
    }
});


const toDo = mong.model('Todo', toDoSchema);
module.exports = toDo;