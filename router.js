
module.exports = function(app) {
    var userList = require('./controller')
    app.route('/users')
        .get(userList.listUsers)
        .post(userList.createUser)

    app.route('/users/:user')
        .get(userList.displayUserData)
}
