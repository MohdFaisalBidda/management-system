import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const AddModal = ({ handleClose, handleOpen, handleSubmit }) => {
    const [student, setStudent] = useState({})

    const addStudent = () => {
        if(!student?.roll_no || !student?.Fullname || !student?.checkin){
            alert("Fill All entries")
        }
        handleSubmit(student);
        setStudent({});
        handleClose()


    }
    return (
        <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
        >
            <Modal show={handleOpen} onHide={handleClose}>
                <Modal.Dialog>
                    <Modal.Header closeButton>
                        <Modal.Title>Attendance</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">Roll No</InputGroup.Text>
                            <Form.Control
                                placeholder="Roll No"
                                aria-label="Roll No"
                                aria-describedby="basic-addon1"
                                value={student?.roll_no}
                                onChange={(e)=>setStudent((student) =>({
                                    ...student,roll_no:e.target.value
                                }))}
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">Fullname</InputGroup.Text>
                            <Form.Control
                                placeholder="Fullname"
                                aria-label="Fullname"
                                aria-describedby="basic-addon1"
                                value={student?.Fullname}
                                onChange={(e)=>setStudent((student) =>({
                                    ...student,Fullname:e.target.value
                                }))}
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">CheckIn</InputGroup.Text>
                            <Form.Control
                                placeholder="CheckIn"
                                aria-label="CheckIn"
                                aria-describedby="basic-addon1"
                                type='time'
                                value={student?.checkin}
                                onChange={(e)=>setStudent((student)=>({
                                    ...student,checkin:e.target.value
                                }))}
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">CheckOut</InputGroup.Text>
                            <Form.Control
                                placeholder="CheckOut"
                                aria-label="CheckOut"
                                aria-describedby="basic-addon1"
                                type='time'
                                value={student?.checkout}
                                onChange={(e)=>setStudent((student)=>({
                                    ...student,checkout:e.target.value
                                }))}
                            />
                        </InputGroup>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>Close</Button>
                        <Button variant="primary" onClick={(e) => addStudent()}>Save changes</Button>
                    </Modal.Footer>
                </Modal.Dialog >
            </Modal >
        </div >
    )
}

export default AddModal
