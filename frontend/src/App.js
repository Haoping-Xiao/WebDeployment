import React, { useEffect, useState } from 'react';
import StaffForm from './components/StaffForm'
import StaffService from './services/staff'
const App=()=>{
  const [staffs, setStaffs]=useState([])
  useEffect(()=>{
    StaffService.getStaffs().then(
      staffs=>setStaffs(staffs)
    )
  },[])
  return(
    <div>
      <h1>staff list</h1>
      {staffs.map(staff=><div key={staff.name}> {staff.name} {staff.group} {staff.gender}</div>)}
      <StaffForm staffs={staffs} setStaffs={setStaffs}/>
    </div>
  )
}
export default App;