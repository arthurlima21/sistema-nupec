import React, { useState, useEffect } from "react";
import api from "../../api/api";
import { Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import { Table } from "react-bootstrap";
import { Nav, Navbar } from "react-bootstrap";
import { useHistory } from "react-router";


function Consult_Device() {

    const history = useHistory();
    const [device, setDevice] = useState([]);

    useEffect(() => {
        api
            .get("devices/list")
            .then((res) => setDevice(res.data))
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }, []);

    function Home() {
        history.push('/index');
    }

    return (
        <div className="App">
            <header className="App-header">

            <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="/index"><Image src="logo.png" rounded style={{ width: '7rem' }} /></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav>
                            <Nav.Link onClick={Home}>Home</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                <Container>
                    <Row className="justify-content-md-center">
                        <h3>CONSULT DEVICE</h3>
                    </Row>
                </Container>

                <Container>
                    <Row className="justify-content-md-center">
                        <Table striped bordered hover variant="dark" >
                            <thead>
                                <tr>
                                    <th>ID DEVICE</th>
                                    <th>TEST RESULT</th>
                                    <th>ID PACK</th>
                                    <th>CREATED AT</th>
                                </tr>
                            </thead>
                            {device.map((device, key) => {
                                return (
                                    <tbody key={key}>
                                        <tr>
                                            <td>{device.serial_number}</td>
                                            <td>{device.test_result}</td>
                                            <td>{device.pack_id}</td>
                                            <td>{device.created_at.substring(0, 10).split('-').reverse().join('-')}</td>
                                        </tr>
                                    </tbody>
                                )
                            })}
                        </Table>
                    </Row>
                </Container>
            </header>
        </div>
    )
}

export default Consult_Device;




