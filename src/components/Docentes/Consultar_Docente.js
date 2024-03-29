import React from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Image, Card } from "react-bootstrap";
// import api from "../../api/api";

function Consultar_Docente() {

    return (
        <div className="App">
            <header className="App-header">
                <Container>
                    <Row className=" test justify-content-md-center">
                        <Card className="card" style={{ width: '40rem' }}>
                            <Card.Body>
                                <Image className="logo" src="maps.png" rounded style={{ width: '4rem' }} />
                                <div className="row col-12 justify-content-md-center" >
                                    <h2>
                                        <span className="font-weight-bold">CONSULTAR DOCENTE</span>
                                    </h2>
                                </div>

                                <Col xs lg="9" className="form">
                                    <Form>
                                        <Form.Row >
                                            <Form.Group as={Col} controlId="formGridText">
                                                <Form.Label></Form.Label>
                                                <Form.Control type="text" required placeholder="MATRICULA" />
                                                <Form.Label></Form.Label>
                                            </Form.Group>
                                        </Form.Row>
                                        <Button type="submit" variant="ligth" className="button" size="lg" block >CONSULTAR</Button>
                                    </Form>
                                </Col>
                            </Card.Body>
                        </Card>
                    </Row>
                </Container>
            </header>
        </div>
    )
}

export default Consultar_Docente;