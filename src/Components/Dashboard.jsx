import React, { useState } from 'react'
import Add from './Add'
import Header from './Header'
import List from './List';
import studentData from "../data.js"

const Dashboard = () => {
    // console.log(studentData);
    const [students, setStudents] = useState([]);
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [isAdding, setIsAdding] = useState(false);
    const [checkout, setCheckout] = useState(false)
    return (
        <div>
            {!isAdding && (
                <>
                    <Header
                        setIsAdding={setIsAdding}
                    />
                    <List
                        students={students}
                        setStudents={setStudents}
                        setCheckout={setCheckout}
                        checkout={checkout}
                    />
                </>
            )}

            {isAdding && (
                <>
                    <Add
                        students={students}
                        setStudents={setStudents}
                        setIsAdding={setIsAdding}
                    />
                </>
            )}

        </div>
    )
}

export default Dashboard
