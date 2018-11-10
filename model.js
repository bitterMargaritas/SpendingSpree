var mongoose = require('mongoose')
var Schema = mongoose.Schema

var UserSchema = new Schema({
    name: {
        type: String,
        required: "Fill name, or die"
    },
    amountOwed: {
        type: Object,
        default: null
        // should be "name": String, "amount": number
    },
    actions: []
})

var actionSchema = new Schema({
    action: {
        type: String,
        required: "enter action name, or die"
    },
    date: {
        type: Date,
        required: "enter date or suffer"
    },
    mainParticipant: {
        type: String,
        required: "fill name..."
    },
    participants: {
        type: Array,
        default: []
    },
    typeOfSplit: {
        type: String,
        default: "equalSplit"
    },
    amount: {
        type: Number,
        required: ""
    },
    notes: {
        type: "String",
        default: ""
    }

})

module.exports = mongoose.model('Users', UserSchema)