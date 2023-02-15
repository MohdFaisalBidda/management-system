import React from 'react'
import './App.css';
import Navbar from "./Components/NavBar"

function App() {
  return (
    <>
      <div className='container' style={{ maxWidth: "100%", padding: "0" }}>
        <Navbar />
      </div>
    </>
  );
}

export default App;
