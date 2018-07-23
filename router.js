
module.exports = function(app) {
    app.route('/test')
        .get(function (req, res) {
            console.log(req.route)
            res.json({ response: 'a GET request for LOOKING at questions' })
        })
    
    app.route('/test/:user')
        .get(function (req, res) {
            console.log(req.route)
            res.json({ response: req.params.user })
        })
}