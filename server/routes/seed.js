const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Candidate = require('../models/Candidate');
const Position = require('../models/Position');
const Resume = require('../models/Resume');
const Submission = require('../models/Submission');
const Interview = require('../models/Interview');
const Message = require('../models/Message');
const PurchaseOrder = require('../models/PurchaseOrder');
const Onboarding = require('../models/Onboarding');

router.post('/', async (req,res)=>{
  try {
    // clear
    await Promise.all([
      User.deleteMany(), Candidate.deleteMany(), Position.deleteMany(), Resume.deleteMany(),
      Submission.deleteMany(), Interview.deleteMany(), Message.deleteMany(), PurchaseOrder.deleteMany(),
      Onboarding.deleteMany()
    ]);

    const manager = await User.create({name:'Hiring Manager', email:'manager@example.com', password:'pass'});
    const p1 = await Position.create({title:'Frontend Developer', department:'Engineering', project:'Website', skills:['React','CSS']});
    const p2 = await Position.create({title:'Backend Developer', department:'Engineering', project:'API', skills:['Node','MongoDB']});
    const c1 = await Candidate.create({name:'Alice Doe', email:'alice@example.com', skills:['React'], status:'applied', history:[]});
    const c2 = await Candidate.create({name:'Bob Smith', email:'bob@example.com', skills:['Node'], status:'shortlisted', history:[]});
    await Resume.create({candidate:c1._id, fileName:'alice.pdf', filePath:'/uploads/resumes/alice.pdf', fileType:'application/pdf', agency:'Agency A', recruiter:'Rec A'});
    await Resume.create({candidate:c2._id, fileName:'bob.pdf', filePath:'/uploads/resumes/bob.pdf', fileType:'application/pdf', agency:'Agency B', recruiter:'Rec B'});

    await Submission.create({candidate:c1._id, position:p1._id, source:'Agency A', status:'submitted', history:[]});
    await Submission.create({candidate:c2._id, position:p2._id, source:'Rec B', status:'shortlisted', history:[]});

    await Interview.create({candidate:c2._id, position:p2._id, date:new Date(Date.now()+3*24*3600*1000), type:'phone', itinerary:'15-min screen'});
    await Message.create({subject:'Interview Scheduled', message:'Phone screen scheduled for Bob', from:'recruiter@example.com', to:'manager@example.com', status:'unread'});
    await PurchaseOrder.create({candidate:c2._id, position:p2._id, manager:manager._id, amount:2500, status:'Pending'});
    await Onboarding.create({candidate:c2._id, status:'in_progress', tasks:[{name:'Docs',done:true},{name:'IT Setup',done:false}]});

    res.json({ok:true, message:'seeded'});
  } catch(err){
    console.error(err);
    res.status(500).json({error:err.message});
  }
});
module.exports = router;
