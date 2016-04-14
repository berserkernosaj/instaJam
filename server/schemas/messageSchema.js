var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var chatSchema = new Schema({
    messages: [{
        content: {type: String, required: false},
        fromUser: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
        toUser: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
        date: {type: Date, default: new Date()}
    }],
    fromUser: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    toUser: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
}, {timestamps: true})

chatSchema.pre('find', function(next) {
    this.populate('fromUser toUser message.fromUser message.toUser');
    next();
})

module.exports = mongoose.model('Chat', chatSchema);
