const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  name:String, email:{type:String, unique:true}, password:String, role:{type:String, default:'manager'},
  profile:{firstName:String,lastName:String,phone:String,city:String}
},{timestamps:true});
module.exports = mongoose.model('User', userSchema);
