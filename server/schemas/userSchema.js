var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var Schema = mongoose.Schema;


var userSchema = new Schema({
    name: {
          first: String,
          last: String
      },
    username:{type: String, unique: false},
    email:{type: String, required: false},
    password:{type: String, required: false},
    bio:{type: String, required:false},
    gender: String,
    following:[{
            user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
    }],
    followers: [{
            user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
    }],
    messages: [{
        thread: {type: mongoose.Schema.Types.ObjectId, ref: 'Message'}
    }],
    profpic:{type:String, default:'http://1.bp.blogspot.com/-Tb_UK9_ePUM/U7oTNS-AnSI/AAAAAAAAPLE/2TT0ltTzqF4/s1600/default+image.jpg'},
    // loc:[Loc]
})

/////////////////////////////////////////
//Populate user info and messages info//
///////////////////////////////////////
userSchema.pre('find', function(next) {
    this.populate('user messages.thread');
    next();
})

userSchema.pre('save', function(next) {
  var user = this;
  if (!user.isModified('password')) {
    return next();
  }
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(user.password, salt, function(err, hash) {
      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function(password, done) {
  bcrypt.compare(password, this.password, function(err, isMatch) {
      console.log(this);
      console.log(this.password);
    done(err, isMatch);
  });
};


module.exports = mongoose.model('User', userSchema);
