const express = require('express');
const mongoose= require("mongoose");
const cors=require('cors')
require('dotenv').config();
const app = express();
app.use(express.json())
app.use(cors())
const url = process.env.MONGO_URL
const PORT = process.env.PORT;
// const user =process.env.MONGO_USER
// const pass= process.env.MONGO_PWD
const Staff=require('./models/staff')

mongoose.connect(url,{useCreateIndex:true,useFindAndModify:false,useNewUrlParser:true,useUnifiedTopology:true})
  .then(() => {
    console.log('Connected to MONGODB')
})
.catch((error) => {
  console.log('failed to connect',error.message)
})


app.get('/ping',(_,res)=>{
  res.send('pong')
})

app.post('/api/staffs',async(req,res)=>{
  const newStaff=new Staff({
    name:req.body.name,
    group:req.body.group,
    gender:req.body.gender
  })
  try{
    const savedStaff=await newStaff.save()
    res.json(savedStaff)
  }catch(e){
    res.status(400).send(`error:${e.message}`)
  }
})


app.get('/api/staffs',async(req,res)=>{
  try{
    const allStaffs=await Staff.find({})
    res.json(allStaffs)
  }catch(e){
    res.status(400).send(`error:${e.message}`)
  }
})


app.listen(PORT, ()=>{
  console.log(`listening on ${PORT}`);
  console.log(url)
})
