import React, { useState, useEffect } from "react";
import api from "../../api/api";
import { Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import { Table } from "react-bootstrap";
import { useHistory } from "react-router";
import { Dropdown } from "react-bootstrap";
import { Navbar, Nav } from "react-bootstrap";

function Consult_Pack() {

    const [pack, setPacks] = useState([]);
    const history = useHistory();

    const updatePack = (pack_id, status, qtd_devices) => {
        history.push("/update-pack", { pack_id, status, qtd_devices });

    }

    const deviceList = (pack_id) => {
        history.push("/device-list", {pack_id});
    }

    function Home() {
        history.push('/index');
    }

    useEffect(() => {
        api
            .get("packs")
            .then((res) => setPacks(res.data))
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }, []);

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
                    {/* <Row className="justify-content-md-center">
                        <Image src="logo.png" rounded style={{ width: '10rem' }} />
                    </Row> */}
                    <Row className="justify-content-md-center">
                        <h3>CONSULT PACK</h3>
                    </Row>
                </Container>

                <Container>
                    <Row className="justify-content-md-center">
                        <Table striped bordered hover variant="dark" >
                            <thead>
                                <tr>
                                    <th>ID PACK</th>
                                    <th>STATUS</th>
                                    <th>DEVICES</th>
                                    <th>CREATED AT</th>
                                </tr>
                            </thead>
                            {pack.map((pack, key) => {
                                return (
                                    <tbody key={key}>
                                        <tr>
                                            <td>{pack.id}</td>
                                            <td>{pack.status}</td>
                                            <td>{pack.qtd_devices}</td>
                                            <td>{pack.created_at.substring(0, 10).split('-').reverse().join('-')}</td>
                                            {/* <Button onClick={deviceList} variant="success">List Devices</Button> */}
                                            <Dropdown>
                                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                    FUNCTIONS
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu>
                                                    <Dropdown.Item onClick={(e) => updatePack(pack.id, pack.status, pack.qtd_devices)}>Update Pack</Dropdown.Item>
                                                    <Dropdown.Item onClick={(e) => deviceList(pack.id)}>List Devices</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
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

export default Consult_Pack;




