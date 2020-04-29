let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let AssignmentSchema = new Schema({
    personName : String,
    taskName : String,
    createdAt: Number
});

let Assignment = mongoose.model('assignment', AssignmentSchema);

module.exports = Assignment;