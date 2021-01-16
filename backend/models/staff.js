const mongoose= require('mongoose')

const staffSchema=new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  group:{
    type:String,
    required:true
  },
  gender:{
    type:String,
    required:true
  }
})

const Staff=mongoose.model('Staff',staffSchema)
module.exports=Staff
