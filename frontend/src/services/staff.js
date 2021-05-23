import axios from 'axios'
require('dotenv').config()
const url=`/api/staffs`


const getStaffs=async()=>{
  const allStaffs=await axios.get(url);
  return allStaffs.data
}


const addStaffs=async({name,group,gender})=>{
  const newStaff=await axios.post(url,{name,group,gender})
  return newStaff.data
}


const StaffService={getStaffs,addStaffs}

export default StaffService

