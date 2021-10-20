const UserController = require(`../controllers/user.controller`);
const {authenticate} = require("../config/jwt.config");

module.exports = function(app){
    app.post('/api/users/register', UserController.register); //register
    app.post('/api/users/login', UserController.login); //login
    app.post('/api/users/logout', UserController.logout); //logout
    app.get('/api/users/:id', authenticate, UserController.getOneUser); //getOneUser
}