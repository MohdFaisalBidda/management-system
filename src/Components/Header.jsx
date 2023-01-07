import React, { useState } from 'react'

const Header = ({ setIsAdding }) => {
  const current = new Date();
  const time = current.toLocaleString();
  const [cTime, setCTime] = useState(time)
  setInterval((date) => {
    setCTime(new Date().toLocaleString())
  }, 1000)
  return (
    <div className='text-center margin-top'>
      <h1>🏫Student Management System</h1>
      <hr className='padding-top' />
      <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", boxShadow: "5px 10px 18px #888888", width: "50%", margin: "auto"  }}>

        <div style={{ marginTop: "10px", fontSize: "20px", fontFamily: "cursive" }}><div >Date&Time</div>{cTime}</div>
        <button onClick={() => setIsAdding(true)} type='button' style={{ margin: "auto", marginTop: "20px", marginBottom: "20px" }}>Mark attendance</button>
      </div>
    </div>
  )
}

export default Header
