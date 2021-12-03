import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Image } from "react-bootstrap";
import api from "../../api/api";

export default class RegisterDevice extends Component {

  state = {
    id_pack: []
  }

  handleSubmit = event => {
    event.preventDefault();

    const data = {
      serial_number: this.serial_number,
      pack_id: this.pack_id,
    };

    api.post('devices', data)
      .then(res => {
        const data = res
        if (data) {
          alert('Registered Device!');
          this.props.history.push('/index');
        }
      })
      .catch((err) => {
        alert('Unregistered Device!')
      });

  }

  componentDidMount() {
    api.get('packs')
      .then(res => {
        const id_pack = res.data;
        this.setState({ id_pack });
      })
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
                  <span className="font-weight-bold">REGISTER DEVICE</span>
                </h2>
              </div>

              <Col xs lg="5">
                <Form onSubmit={this.handleSubmit}>
                  <Form.Row >
                    <Form.Group as={Col} controlId="formGridText">
                      <Form.Label>SERIAL NUMBER:</Form.Label>
                      <Form.Control type="number" required onChange={e => this.serial_number = (parseInt(e.target.value))} />
                      <Form.Label>ID PACK:</Form.Label>
                      <Form.Control as="select" required onChange={e => this.pack_id = (e.target.value)}>
                        <option></option>
                        {this.state.id_pack.map(id_pack => <option>{id_pack.id}</option>)}
                      </Form.Control>
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