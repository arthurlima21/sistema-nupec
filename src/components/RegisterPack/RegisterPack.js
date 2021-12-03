import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Image } from "react-bootstrap";
import api from "../../api/api";

export default class RegisterPack extends Component {

  handleSubmit = event => {
    event.preventDefault();

    const data = {
      id: this.id
    }

    // const pack = {
    //   status: this.status,
    //   qtd_devices: this.qtd_devices
    // };

    api.post('packs', data)
      .then(res => {
        const data = res
        if (data) {
          alert('Registered Pack!');
          this.props.history.push('/index');
        }
      })
      .catch((err) => {
        alert('Unregistered Pack!');
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
                <h2 className="center font-weight-bold">REGISTER PACK</h2>
              </div>

              <Col xs lg="5">

                <Form onSubmit={this.handleSubmit}>
                  <Image className="center" src="pack.png" rounded style={{ width: '15rem' }} />
                  <Form.Row >
                    <Form.Group as={Col} controlId="formGridText">
                      <Form.Label>ID PACK:</Form.Label>
                      <Form.Control type="text" required onChange={e => this.id = (e.target.value)} />
                    </Form.Group>
                  </Form.Row>
                  <Button type="submit" variant="ligth" className="button" size="lg" block >REGISTER</Button>
                </Form>
              </Col>
            </Row>
          </Container>
        </header>
      </div>
    )
  }

}