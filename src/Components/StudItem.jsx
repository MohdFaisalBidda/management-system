import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const StudItem = ({ name, roll_no, checkin, checkout, handleUpdate }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleOpen = () => setShow(true);
  const [checkOutNew, setCheckOutNew] = useState("");


  return (
    <>
      <tr>
        <td>{roll_no}</td>
        <td>{name}</td>
        <td>{checkin}</td>
        <td >{checkout ? checkout : <h4 style={{ textDecoration: "underline", color: "blue", cursor: "pointer" }} onClick={handleOpen}>Update</h4>}</td>
      </tr>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Check Out</InputGroup.Text>
            <Form.Control
              placeholder="Enter Check Out to update"
              aria-label="Check Out"
              aria-describedby="basic-addon1"
              value={checkOutNew}
              onChange={(e)=>setCheckOutNew(e.target.value)}
              type="time"
            />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={(e)=>{handleUpdate(roll_no,checkOutNew);
          handleClose();
          setCheckOutNew("")}}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default StudItem
