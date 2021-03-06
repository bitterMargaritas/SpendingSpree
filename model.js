var mongoose = require('mongoose')
var Schema = mongoose.Schema

var UserSchema = new Schema({
    name: {
        type: String,
        required: "Fill name, or die"
    },
    amountOwed: {
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model('Users', UserSchema)