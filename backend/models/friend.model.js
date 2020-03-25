const mongoose = require('mongoose');

//by using mongoose.Schema we determine the structure of our data on mongoDB
const Schema = mongoose.Schema;

const friendSchema = new Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    age: { type: Number, required: true },
}, {
    timestamps: true,
});

// we use the schema to initiate Friend mongoose.model
const Friend = mongoose.model('Friend', friendSchema);

module.exports = Friend;