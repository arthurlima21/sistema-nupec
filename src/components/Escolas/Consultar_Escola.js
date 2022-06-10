import React from "react";
import api from "../../api/api";
import { Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import { Table } from "react-bootstrap";
import { useHistory } from "react-router";
import { Dropdown } from "react-bootstrap";
import { Navbar, Nav } from "react-bootstrap";

function Consultar_Escola() {

    const [consultEscola, setConsultEscola] = React.useState(null);
    const history = useHistory();

    // const updatePack = (pack_id, status, qtd_devices) => {
    //     history.push("/update-pack", { pack_id, status, qtd_devices });

    // }

    // const deviceList = (pack_id) => {
    //     history.push("/device-list", {pack_id});
    // }

    function Home() {
        history.push('/index');
    }

    React.useEffect(() => {
        api.get("https://api.adviceslip.com/advice").then((response) => {
          setConsultEscola(response.data);
        });
        
      }, []);
    
    if (!consultEscola) return null;  

    return (
        <div className="App">
            <header className="App-header">

            <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">
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
                    {/* <Row className="justify-content-md-center">
                        <Image src="logo.png" rounded style={{ width: '10rem' }} />
                    </Row> */}
                    <Row className="justify-content-md-center">
                        <h3>CONSULTAR ESCOLA</h3>
                    </Row>
                </Container>

                <Container>
                    <Row className="justify-content-md-center">
                        <Table striped bordered hover variant="dark" >
                            <thead>
                                <tr>
                                    <th>CODIGO ESCOLA</th>
                                    <th>NOME ESCOLA</th>
                                </tr>
                            </thead>
                                    <tbody>
                                        <tr>
                                            <td>{consultEscola.slip.id}</td>
                                            <td>{consultEscola.slip.advice}</td>
                                            {/* <Button onClick={deviceList} variant="success">List Devices</Button> */}
                                            <Dropdown>
                                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                    OPÇÕES
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu>
                                                    <Dropdown.Item>Atualizar</Dropdown.Item>
                                                    <Dropdown.Item>Deletar</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </tr>
                                    </tbody>

                        </Table>
                    </Row>
                </Container>
            </header>
        </div>
    )
}

export default Consultar_Escola;




