import React from 'react'
import Container from 'react-bootstrap/Container';
import { Navbar as NV } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';

const NavBar = () => {
    return (
        <NV bg="light" >
            <Container>
                <NV.Brand >Student Management System</NV.Brand>
                <NV.Toggle />
                <NV.Collapse className="justify-content-end">
                    <NV.Text>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Class
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="/class11">11</Dropdown.Item>
                                <Dropdown.Item href="/class12">12</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </NV.Text>
                </NV.Collapse>
            </Container>
        </NV >
    )
}

export default NavBar
