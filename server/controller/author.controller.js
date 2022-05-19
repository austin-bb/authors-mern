const {Author} = require('./../models/author.model')

module.exports.testAPI = (req, res) => {
    res.json("Backend message")
}

module.exports.allAuthors = (req, res) => {
    Author.find()
        .then(authors => res.json(authors))
        .catch(err => res.json(err))
}

module.exports.createAuthor = (req, res) => {
    Author.create(req.body)
    .then(newAuthor => res.json(newAuthor))
    .catch(err => res.status(400).res.json(err))
}

module.exports.getAuthor = (req, res) => {
    Author.findOne({_id: req.params.id})
        .then(author => res.json(author))
        .catch(err => res.json(err))
}

module.exports.updateAuthor = (req, res) => {
    Author.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
        .then(updatedAuthor => res.json(updatedAuthor))
        .catch(err => res.status(400).res.json(err))
}

module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({_id: req.params.id})
        .then(deleted => res.json(deleted))
        .catch(err => res.json(err))
}
