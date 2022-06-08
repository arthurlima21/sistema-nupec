import React from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Container, Navbar, Row, Card } from "react-bootstrap";
// import api from "../../api/api";

function Cadastrar_Docente() {

    return (
        <div className="App">
            <header className="App-header">

                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/index">
                        <img
                            alt=""
                            src="/maps.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        SISTEMA NUPEC
                    </Navbar.Brand>
                </Navbar>

                <Container>
                    <Row className="test2 justify-content-md-center">
                        <Card className="card" style={{ width: '90rem' }}>
                            <Card.Body>
                                <div className="row col-12 justify-content-md-center" >
                                    <h2>
                                        <span className="font-weight-bold">CADASTRAR DOCENTE</span>
                                    </h2>
                                </div>

                                <Form>
                                    <Form.Row>
                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">ID DOCENTE</Form.Label>
                                            <Form.Control type="text" placeholder="IDADE" />
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">IDADE</Form.Label>
                                            <Form.Control type="text" placeholder="IDADE" />
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">SEXO</Form.Label>
                                            <Form.Control type="text" placeholder="IDADE" />
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">RAÇA</Form.Label>
                                            <Form.Control type="text" placeholder="IDADE" />
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">NACIONALIDADE</Form.Label>
                                            <Form.Control type="text" placeholder="IDADE" />
                                        </Form.Group>

                                    </Form.Row>

                                    <Form.Row>
                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">ZONA RESIDENCIAL</Form.Label>
                                            <Form.Control type="text" placeholder="IDADE" />
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">RESIDENCIA DIFERENCIADA</Form.Label>
                                            <Form.Control type="text" placeholder="IDADE" />
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">NESSECIDADE ESPECIAL</Form.Label>
                                            <Form.Control type="text" placeholder="IDADE" />
                                        </Form.Group>

                                    </Form.Row>

                                    <Form.Row>
                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">ESCOLARIDADE</Form.Label>
                                            <Form.Control type="text" placeholder="IDADE" />
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">TIPO ENSINO MEDIO CURSADO</Form.Label>
                                            <Form.Control type="text" placeholder="IDADE" />
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">SITUAÇÃO DO CURSO</Form.Label>
                                            <Form.Control type="text" placeholder="IDADE" />
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">ESPECIALIZAÇÃO</Form.Label>
                                            <Form.Control type="text" placeholder="IDADE" />
                                        </Form.Group>
                                    </Form.Row>

                                    <Form.Row>
                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">MESTRADO</Form.Label>
                                            <Form.Control type="text" placeholder="IDADE" />
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">DOUTORADO</Form.Label>
                                            <Form.Control type="text" placeholder="IDADE" />
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">POS GRADUAÇÃO CONCLUIDA</Form.Label>
                                            <Form.Control type="text" placeholder="IDADE" />
                                        </Form.Group>

                                    </Form.Row>
                                    {/* <div className="row col-12 justify-content-md-center" > */}

                                    {/* </div> */}
                                </Form>
                                <Button type="submit" variant="secondary" className="button" size="lg" block >VOLTAR</Button>{' '}
                                <Button type="submit" variant="secondary" className="button" size="lg" block >CADASTRAR</Button>
                            </Card.Body>
                        </Card>
                    </Row>
                </Container>
            </header>
        </div>
    )
}

export default Cadastrar_Docente;

