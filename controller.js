var mongoose = require('mongoose'),
    User = mongoose.model('Users');

    exports.displayUserData = function(req,res) {
        var userName = new User(req.params.user);
        console.log(userName);
        User.findById(userName, function(error, user) {
            if (err)
                res.send(err)
            res.json(user);
        });
    }

    exports.createUser = function(req, res) {
        console.log(req.body)
        var new_user = new User(req.body);
        new_user.save(function(err, user){
            if(err)
                res.send(err)
            res.json(user);
        });
    }