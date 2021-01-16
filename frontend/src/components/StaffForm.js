import React, { useState } from 'react'
import StaffService from '../services/staff'

const StaffForm =({staffs,setStaffs})=>{

  const [name,setName]=useState('')
  const [group,setGroup]=useState('')
  const [gender,setGender]=useState('')

  const addStaff=async(event)=>{
    event.preventDefault()
    const newStaff=await StaffService.addStaffs({name,group,gender})
    setStaffs(staffs.concat(newStaff))
    setName('')
    setGroup('')
    setGender('')
  }
  return(
    <div>
      <h2>Add a staff</h2>
      <form onSubmit={addStaff}>
        <div>
          name
          <input value={name} onChange={({target})=>setName(target.value)}/>
        </div>
        <div>
          group
          <input value={group} onChange={({target})=>setGroup(target.value)}/>
        </div>
        <div>
          gender
          <input value={gender} onChange={({target})=>setGender(target.value)}/>
        </div>
        <button type='submit'>add</button>
      </form>
    </div>
  )

}

export default StaffForm