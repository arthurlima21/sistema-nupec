import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Image } from "react-bootstrap";
import api from "../../api/api";

export default class Login extends Component {

    handleSubmit = event => {
        event.preventDefault();

        const data = {
            registration: this.registration,
            password: this.password
        };

        api.post('sessions', data)
            .then(res => {
                const { data } = res
                if (data) {
                    localStorage.setItem("token", data.token);
                    alert('Login Accepted!');
                    this.props.history.push('/index');
                }
            })
            .catch((err) => {
                alert('Login Refused!')
            });
    }

    render() {

        return (
            <div className="App">
                <header className="App-header">
                    <Container>
                        <Row className="justify-content-md-center">
                            <Image className="logo" src="logo.png" rounded style={{ width: '10rem' }} />
                            <div className="row col-12 justify-content-md-center" >
                                <h2>
                                    <span className="font-weight-bold">RKI WORKSTATION</span>
                                </h2>
                            </div>

                            <Col xs lg="5">
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Row >
                                        <Form.Group as={Col} controlId="formGridText">
                                            <Form.Label>REGISTRATION:</Form.Label>
                                            <Form.Control type="number" required onChange={e => this.registration = (parseInt(e.target.value))} />
                                            <Form.Label>PASSWORD:</Form.Label>
                                            <Form.Control type="password" required onChange={e => this.password = (e.target.value)} />
                                        </Form.Group>
                                    </Form.Row>
                                    <Button type="submit" variant="ligth" className="button" size="lg" block >SING IN</Button>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                </header>
            </div>
        )
    }

}