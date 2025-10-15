const mongoose = require('mongoose');
const candidateSchema = new mongoose.Schema({
  name:String, email:String, phone:String, skills:[String], status:{type:String, default:'applied'},
  history:[{ jobId:String, status:String, date:Date }]
},{timestamps:true});
module.exports = mongoose.model('Candidate', candidateSchema);
