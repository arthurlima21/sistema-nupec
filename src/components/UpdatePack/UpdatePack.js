import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Image } from "react-bootstrap";
import api from "../../api/api";
import { useHistory } from "react-router";

export default function UpdatePack() {

  const history = useHistory();
  const [pack, setPack] = useState(history.location.state);
  const [status, setStatus] = useState(pack.status);

  function updatePack() {
    api.put("packs/update", { id: pack.pack_id, status: status }, (res) => {
      console.log(res);
    })
    .then(res => {
        alert('Update Pack!')
        history.push('/consult-pack')

    } ).catch((err) => {
      alert('Pack Not Update!')
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Row className="justify-content-md-center">
            <Image className="logo" src="logo.png" rounded style={{ width: '10rem' }} />
            <div className="row col-12 justify-content-md-center" >
              <h2 className="center font-weight-bold">UPDATE PACK</h2>
            </div>

            <Col xs lg="5">

              <Form>
                <Form.Row >
                  <Form.Group as={Col} controlId="formGridText">
                    <Form.Label>ID PACK:</Form.Label>
                    <Form.Control type="text" required value={pack.pack_id} disabled={true} onChange={e => setPack(e.target.value)} />

                    {/* {this.state.pack_id.map(pack => <option>{pack.id}</option>)} */}
                    <Form.Label>STATUS:</Form.Label>

                    <Form.Control type="text" required value={status} onChange={e => setStatus(e.target.value)} />

                    <Form.Label>NUMBER OF DEVICES:</Form.Label>
                    <Form.Control type="number" required value={pack.qtd_devices} disabled={true} onChange={e => setPack(parseInt(e.target.value))} />
                    {/* {this.state.num_device.flatMap(num_device => <option>{num_device}</option>)} */}
                  </Form.Group>
                </Form.Row>
                <Button onClick={updatePack} variant="ligth" className="button" size="lg" block >UPDATE</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  )
}
