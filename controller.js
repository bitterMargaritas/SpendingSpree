var mongoose = require('mongoose'),
    User = mongoose.model('Users');

    exports.displayUserData = function(req,res) {
        var userName = req.params.user
        User.find({name: userName}, function(error, user) {
            if (error)
                res.send(error);
            if (user.length == 0) {
                res.json({message: "There is no user by that name"});
            } else {
                res.json(user);
            }

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

