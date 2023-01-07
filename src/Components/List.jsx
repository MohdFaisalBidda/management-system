import React, { useEffect, useState } from 'react'

const List = ({ students, setStudents, setCheckout, checkOut }) => {

    const [cout,setCout]=useState("CheckOut")

    const handleClick = (i) => {
        let date = new Date();
        let hours = date.getHours();
        let min = date.getMinutes();
        let checkOutTime = `${hours}:${min}`

        setCout(checkOutTime)
        
    }
    useEffect(()=>{
        setCheckout(true);

    })

    return (
        <div className='margin-top' style={{paddingTop:"30px",boxShadow: "5px 5px 12px #888888",}}>
            <h3>Today's Recent Activity</h3>
            <table>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Roll No</th>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>CheckIn Time</th>
                        <th>CheckOut Time</th>
                    </tr>
                </thead>
                <tbody>
                    {students.length > 0 ? (
                        students.map((student, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{student.rollNO}</td>
                                    <td>{student.firstName}</td>
                                    <td>{student.lastName}</td>
                                    <td>{student.checkIn}</td>
                                    <td><button onClick={()=>handleClick(index)}>{cout}</button></td>
                                </tr>
                            )
                        })
                    ) :
                        (
                            <tr>
                                <td colSpan={6} className="text-center"><h3>No Students </h3></td>
                            </tr>
                        )
                    }
                </tbody>

            </table>
        </div>
    )
}

export default List
