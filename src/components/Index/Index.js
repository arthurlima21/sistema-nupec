import React from "react";
import { Card, Navbar } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import { useHistory } from "react-router";
import { Nav } from "react-bootstrap";

function Index() {
    const history = useHistory();

    const registerPack = () => {
        history.push("/register-pack");
    }

    const registerDevice = () => {
        history.push("/register-device");
    }

    const packClick = () => {
        history.push("/consult-pack");
    }

    const deviceClick = () => {
        history.push("/consult-device");
    }

    const createUser = () => {
        history.push("/users");
    }

    // let user = JSON.parse(localStorage.getItem('user-info'))

    function Home() {
        history.push('/index');
    }

    function logOut() {
        localStorage.clear();
        history.push('/');
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
                            <Nav.Link onClick={logOut}>Logout</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                <Container fluid>
                    <Row>
                        <Col className="Card">
                            <Image className="Image" src="pack.png" rounded style={{ width: '10rem' }} />
                            <Card bg="success" style={{ width: '18rem' }}>
                                <Card.Header>PACK</Card.Header>
                                <Card.Body>
                                    <Card.Title>REGISTER PACK</Card.Title>
                                    <Card.Text>
                                        Register pack in the system for data entry.
                                        <Button onClick={registerPack} variant="ligth" className="button" size="lg" block>REGISTER</Button>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col className="Card">
                            <Image className="Image" src="device.png" rounded style={{ width: '10rem' }} />
                            <Card bg="success" style={{ width: '18rem' }}>
                                <Card.Header>DEVICE</Card.Header>
                                <Card.Body>
                                    <Card.Title>REGISTER DEVICE</Card.Title>
                                    <Card.Text>
                                        Register device in the system for data entry.
                                        <Button onClick={registerDevice} variant="ligth" className="button" size="lg" block>REGISTER</Button>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col className="Card">
                            <Image className="Image" src="consult_pack.png" rounded style={{ width: '10rem' }} />
                            <Card bg="success" style={{ width: '18rem' }}>
                                <Card.Header>CONSULT</Card.Header>
                                <Card.Body>
                                    <Card.Title>CONSULT PACK</Card.Title>
                                    <Card.Text>
                                        See a desired pack for data analysis.
                                        <Button onClick={packClick} variant="ligth" className="button" size="lg" block>CONSULT</Button>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col className="Card">
                            <Image className="Image" src="consult_device.png" rounded style={{ width: '10rem' }} />
                            <Card bg="success" style={{ width: '18rem' }}>
                                <Card.Header>CONSULT</Card.Header>
                                <Card.Body>
                                    <Card.Title>CONSULT DEVICE</Card.Title>
                                    <Card.Text>
                                        See a desired device for data analysis.
                                        <Button onClick={deviceClick} variant="ligth" className="button" size="lg" block>CONSULT</Button>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col className="Card">
                            <Image className="Image" src="user2.png" rounded style={{ width: '12rem' }} />
                            <Card bg="success" style={{ width: '18rem' }}>
                                <Card.Header>REGISTER</Card.Header>
                                <Card.Body>
                                    <Card.Title>REGISTER NEW USER</Card.Title>
                                    <Card.Text>
                                        Administrator registers new user dsdsdsd.
                                        <Button onClick={createUser} variant="ligth" className="button" size="lg" block>REGISTER</Button>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </header>
        </div>
    )
}

export default Index;




