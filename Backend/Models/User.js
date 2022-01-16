const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    address:String,
    cart:[{id:String,qty:Number}],
    mobile:String,
});

const User=new mongoose.model("User",userSchema);

module.exports = User;