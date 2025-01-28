const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    id:Number,
    firstName:String,
    lastName:String,
    email:String,
    department:String,
})

const UserModel = mongoose.model("users",UserSchema)

module.exports = UserModel;