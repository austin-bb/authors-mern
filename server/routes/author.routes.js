const AuthorController = require('../controller/author.controller');

module.exports = (app) => {
    app.get("/api/authors", AuthorController.allAuthors)
    app.post("/api/authors", AuthorController.createAuthor)
    app.get("/api/authors/:id", AuthorController.getAuthor)
    app.put("/api/authors/:id", AuthorController.updateAuthor)
    app.delete("/api/authors/:id", AuthorController.deleteAuthor)
}