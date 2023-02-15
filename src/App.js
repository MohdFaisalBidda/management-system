import React, { useState } from 'react'
import './App.css';
import Main from './components/Main';
import Navbar from "./components/Navbar"

function App() {
  const [students, setStudents] = useState([]);

  // const handleSubmit = (newStudent) => {
  //   setStudents((students) => [...students, newStudent])
  // }

  // const handleUpdate = (roll_no, checkout) => {
  //   setStudents((students)=>
  //     students.map((student)=>{
  //       if(student.roll_no === roll_no){
  //         return {
  //           ...student,
  //           checkout:checkout
  //         };
  //       }else return student;
  //     })
  //   )
  // }

  return (
    <>
      <div className='container' style={{ maxWidth: "100%", padding: "0" }}>
        <Navbar />
      </div>
    </>
  );
}

export default App;
