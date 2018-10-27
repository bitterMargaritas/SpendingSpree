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
    // we whould also check if the name already exists
    const data = IsDataValid(req.body.name, req.body.amountOwed)
    if (!data.status) {
        res.json(data.error)
    } else {
    console.log("all good")
    var new_user = new User(req.body);
    new_user.save(function(err, user){
        if(err)
            res.send(err)
        res.json(user);
    });
    }
}

exports.listUsers = function(req, res) {
    User.find({}, function(error, userList) {
        if (error)
            res.send(error);
        if(userList.length == 0 ){
            res.json({message: "There are no users in the database :( "})
        } else {
            res.json(userList)
        }
    });
}

// This should also exlude special characters
const nameIsUnsound = (name) => {
    const regexp = /[A-Z\s]/g
    if (regexp.test(name)) {
        return true
    }
}


const IsDataValid = (name, amount) => {
    var errorMessage = (unsoundItem) => {
        return "Error: " + unsoundItem + " is unsound"
    }
    if (nameIsUnsound(name)){
        return {status: false, error: errorMessage(name)}
    } else if (isNaN(amount)){
        return {status: false, error: errorMessage(amount)}
    } else {
        return {status: true, error: "everything is fine"}
    }
}
