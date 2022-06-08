import React from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Container, Navbar, Row, Card } from "react-bootstrap";
// import api from "../../api/api";

function Cadastrar_Escola() {

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
                                        <span className="font-weight-bold">CADASTRAR ESCOLA</span>
                                    </h2>
                                </div>

                                <Form>
                                    <Form.Row>
                                        <Form.Group>
                                            <span class="focus-input100" data-placeholder="Email"></span>
                                            <Form.Label className="text-cad">COD. ESCOLA</Form.Label>
                                            <Form.Control type="text" placeholder="MATRICULA" />
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">NOME ESCOLA</Form.Label>
                                            <Form.Control type="text" placeholder="NOME ALUNO" />
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">ORGÃO REGIONAL ENSINO</Form.Label>
                                            <Form.Control type="text" placeholder="" />
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">SITUAÇÃO FUNCIONAMENTO</Form.Label>
                                            <Form.Control type="text" placeholder="" />
                                        </Form.Group>

                                    </Form.Row>

                                    <Form.Row>

                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">COD. REGIÃO GEOGRAFICA</Form.Label>
                                            <Form.Control type="text" placeholder="" />
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">UF</Form.Label>
                                            <Form.Control type="text" placeholder="" />
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">COD. MUNICIPIO</Form.Label>
                                            <Form.Control type="text" placeholder="" />
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">DEP. ADMINISTRATIVA</Form.Label>
                                            <Form.Control type="text" placeholder="" />
                                        </Form.Group>

                                    </Form.Row>

                                    <Form.Row>
                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">LOCALIZAÇÃO</Form.Label>
                                            <Form.Control type="text" placeholder="" />
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">RESIDENCIA DIFERENCIADA</Form.Label>
                                            <Form.Control type="text" placeholder="" />
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">RESP. REGULAMENTAÇÃO</Form.Label>
                                            <Form.Control type="text" placeholder="" />
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">RESP. REGULAMENTAÇÃO</Form.Label>
                                            <Form.Control type="text" placeholder="" />
                                        </Form.Group>

                                    </Form.Row>

                                    <Form.Row>

                                        <Form.Group as={Col}>
                                            <Form.Label className="text-cad">FUNCIONAMENTO PREDIO ESCOLAR</Form.Label>
                                            <Form.Control type="text" placeholder="" />
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="formGridCity">
                                            <Form.Label className="text-cad">OCUPAÇÃO PREDIO ESCOLAR</Form.Label>
                                            <Form.Control />
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                            <span class="focus-input100" data-placeholder="Email"></span>
                                            <Form.Label className="text-cad">QUANTIDADE SALAS DENTRO</Form.Label>
                                            <Form.Control type="text" placeholder="" />
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                            <span class="focus-input100" data-placeholder="Email"></span>
                                            <Form.Label className="text-cad">QUANTIDADE SALAS UTILIZADAS FORA</Form.Label>
                                            <Form.Control type="text" placeholder="" />
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                            <span class="focus-input100" data-placeholder="Email"></span>
                                            <Form.Label className="text-cad">QUANTIDADE SALAS UTILIZADAS TOTAL</Form.Label>
                                            <Form.Control type="text" placeholder="" />
                                        </Form.Group>

                                    </Form.Row>

                                    <Form.Row>
                                        <Form.Group as={Col}>
                                            <span class="focus-input100" data-placeholder="Email"></span>
                                            <Form.Label className="text-cad">LATITUDE ESCOLA</Form.Label>
                                            <Form.Control type="text" placeholder="" />
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                            <span class="focus-input100" data-placeholder="Email"></span>
                                            <Form.Label className="text-cad">LONGITUDE ESCOLA</Form.Label>
                                            <Form.Control type="text" placeholder="" />
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

export default Cadastrar_Escola;

