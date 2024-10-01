


var mongoose = require('mongoose')
var schema = new mongoose.Schema({
    Username:{
        type: String,
        required:true,
        unique: true
    },
    Email:{
        type: String,
        required:true,
        unique: true
    },
    Password:{
        type: String,
        required:true
    },
    Role:{
        type: String,
        enum :["admin","user"],
        default:"user"
      
    }

})

var UserModel = new mongoose.model('user',schema);
module.exports = UserModel;