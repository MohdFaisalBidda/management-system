import React, { useEffect, useRef, useState } from 'react'

const Add = ({ students, setStudents, setIsAdding }) => {

  const [rollNO, setRollNo] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  let date = new Date();
  let hours = date.getHours();
  let min = date.getMinutes();
  let checkIn = `${hours}:${min}`

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!rollNO || !firstName || !lastName) {
      alert("Please fill the entries")
    }
    else {
      const id = students.length + 1;
      const newStudent = {
        id,
        rollNO,
        firstName,
        lastName,
        checkIn
      }
      students.push(newStudent);
      setStudents(students);
      setIsAdding(false);
      console.log(students);
    }
  }
  const textInput =useRef(null)
  useEffect(()=>{
    textInput.current.focus();
  },[])

  return (
    <>
      <div>
        <h1 className='text-center'>Attendee</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Roll No</label>
          <input type="text" ref={textInput} name="rollNO" placeholder="Roll No" value={rollNO} onChange={(e) => setRollNo(e.target.value)} />
          <label htmlFor="name">First Name</label>
          <input type="text" name="FirstName" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          <label htmlFor="name">Last Name</label>
          <input type="text" name="LastName" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          <label htmlFor="name">Check In Time</label>
          <input  type="time" value={checkIn} placeholder={checkIn} checked={true} readOnly={true} />
          <div className="padding-top ">
          <button type='submit' className='accent-button' style={{marginRight:"20px"}}>Check In</button>
          <button onClick={() => setIsAdding(false)} className='button'>Cancel</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Add
