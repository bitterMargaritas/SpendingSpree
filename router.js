
module.exports = function(app) {
    var userList = require('./controller')
    app.route('/users')
        .get(function (req, res) {
            console.log(req.route)
            res.json({ response: 'a GET request for LOOKING at questions' })
        })
        .post(userList.createUser)
    
    app.route('/users/:user')
        .get(function (req, res) {
            userList.displayUserData
        })
}