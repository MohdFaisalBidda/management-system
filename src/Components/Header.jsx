import React, { useState } from 'react'
import { Container} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import AddModal from './AddModal';

const Header = ({handleSubmit}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);

  const current = new Date();
  const time = current.toLocaleString();
  const [cTime, setCTime] = useState(time)
  setInterval((date) => {
    setCTime(new Date().toLocaleString())
  }, 1000)
  return (
    <Container>
    <Card style={{ display: "flex", justifyContent: "center", flexDirection: "column", boxShadow: "5px 10px 18px #888888", width: "50%", margin: "auto", marginTop:"50px" }}>
      <Card.Body style={{textAlign:"center"}}> 
        <Card.Title>
          {cTime}
        </Card.Title>
        <hr className='padding-top' />
       
        <Button onClick={handleOpen}>Add Student</Button>
      </Card.Body>
    </Card>
    
        {show && (
          <AddModal handleOpen={handleOpen} handleClose={handleClose} handleSubmit={handleSubmit}/>
        )}
    </Container>
  )
}

export default Header
