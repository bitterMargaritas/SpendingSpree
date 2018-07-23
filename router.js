
module.exports = function(app) {
    app.route('/users')
        .get(function (req, res) {
            console.log(req.route)
            res.json({ response: 'a GET request for LOOKING at questions' })
        })
    
    app.route('/users/:user')
        .get(function (req, res) {
            console.log(req.route)
            res.json({ response: req.params.user })
        })
}