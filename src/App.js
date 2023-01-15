import React, { useState } from 'react'
import './App.css';
import NavBar from './Components/NavBar';
import Header from './Components/Header';
import List from './Components/List';

function App() {
  const [students, setStudents] = useState([]);

  const handleSubmit = (newStudent) => {
    setStudents((students) => [...students, newStudent])
  }

  const handleUpdate = (roll_no, checkout) => {
    setStudents((students)=>
      students.map((student)=>{
        if(student.roll_no === roll_no){
          return {
            ...student,
            checkout:checkout
          };
        }else return student;
      })
    )
  }

  return (
    <>
      <div className='container'>
        <NavBar />
        <Header handleSubmit={handleSubmit} />
        <List students={students} handleUpdate={handleUpdate} />
      </div>
    </>
  );
}

export default App;
