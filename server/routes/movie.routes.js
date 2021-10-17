const MovieController = require("../controllers/movie.controller");
const {authenticate} = require("../config/jwt.config");

module.exports = function(app){
    app.get('/api/movies', authenticate, MovieController.findAll); //findAll
    app.post('/api/movies', authenticate, MovieController.createNew); //createNew
    app.get('/api/movies/user/:id', authenticate, MovieController.findAllByUser); //findAllByUser
    app.get('/api/movies/:id', authenticate, MovieController.findOneMovie);//findOneMovie
    app.put('/api/movies/:id', authenticate, MovieController.updateMovie); //updateMovie
    app.delete('/api/movies/:id', authenticate, MovieController.deleteMovie); //deleteMovie
}