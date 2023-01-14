import React from 'react'
import Container from 'react-bootstrap/Container';
import { Navbar as NV } from 'react-bootstrap';
const NavBar = () => {
    return (
        <NV bg="light" >
            <Container>
                <NV.Brand >Student Management System</NV.Brand>
                <NV.Toggle />
                <NV.Collapse className="justify-content-end">
                    <NV.Text>
                        
                    </NV.Text>
                </NV.Collapse>
            </Container>
        </NV>
    )
}

export default NavBar
