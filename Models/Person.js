let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let PersonSchema = new Schema({
    name : {
        type: String,
        unique: true
    },
    createdAt: Number
});

let Person = mongoose.model('person', PersonSchema);

module.exports = Person;