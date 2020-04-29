let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let TaskSchema = new Schema({
    name : {
        type: String,
        unique: true
    },
    createdAt: Number
});

let Task = mongoose.model('task', TaskSchema);

module.exports = Task;