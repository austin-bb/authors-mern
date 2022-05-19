const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: [true, "Title is required"],
        minlength: [2, "Name must be at least 2 characters long like deez"]
    }
}, { timestamps: true });

module.exports.Author = mongoose.model('Author', AuthorSchema);

