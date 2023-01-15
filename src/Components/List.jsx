import React from 'react'
import Table from 'react-bootstrap/Table';
import StudItem from './StudItem';

const List = ({ students,handleUpdate }) => {


    return (

        <div style={{ marginTop: "100px" }}>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Roll NO</th>
                        <th>Name</th>
                        <th>CheckIn</th>
                        <th>CheckOut</th>
                    </tr>
                </thead>
                <tbody>
                    {students.length === 0 ? (

                        <tr >
                            <td colSpan={4} style={{ textAlign: "center" }}>No Students</td>
                        </tr>
                    ) :
                        (
                            students.map((student, index) => {
                                return (
                                    <StudItem
                                        key={index}
                                        roll_no={student.roll_no}
                                        name={student.Fullname}
                                        checkin={student.checkin}
                                        checkout={student.checkout}
                                        handleUpdate={handleUpdate}
                                    />
                                )
                            })

                        )
                    }


                </tbody>
            </Table>
        </div>
    )
}

export default List
