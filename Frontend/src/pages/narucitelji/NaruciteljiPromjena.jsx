import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { RoutesNames } from "../../constants";
import moment from "moment";
import NaruciteljService from "../../services/NaruciteljService";
import { useEffect, useState } from "react";

export default function NaruciteljiPromjena() {
    const navigate = useNavigate();
    const routeParams = useParams();
    const [narucitelj, setNarucitelja] = useState({});

    async function dohvatiNarucitelja() {
        const odgovor = await NaruciteljService.getBySifra(routeParams.sifra);
        if (odgovor.greska) {
            alert(odgovor.poruka);
            return;
        }
        setNarucitelja(odgovor.poruka);
    }

    useEffect(() => {
        dohvatiNarucitelja();
    });

    async function promjena(narucitelj) {
        const odgovor = await NaruciteljService.promjena(routeParams.sifra, narucitelj);
        if (odgovor.greska) {
            alert(odgovor.poruka);
            return;
        }
        navigate(RoutesNames.NARUCITELJ_PREGLED);
    }

    function obradiSubmit(e) {
        e.preventDefault();

        const podaci = new FormData(e.target);

        promjena({
            vrsta: podaci.get("vrsta"),
            ime: podaci.get("ime"),
            prezime: podaci.get("prezime"),
            adresa: podaci.get("adresa"),
            telefon: podaci.get("telefon"),
            email: podaci.get("email"),
        });
    }

    return (
        <Container>
            Promjena naručitelja
            <Form onSubmit={obradiSubmit}>
                <Form.Group controlId="vrsta">
                    <Form.Label>Vrsta</Form.Label>
                    <Form.Control type="text" name="vrsta" required defaultValue={narucitelj.vrsta} />
                </Form.Group>

                <Form.Group controlId="ime">
                    <Form.Label>Ime</Form.Label>
                    <Form.Control type="text" name="ime" required defaultValue={narucitelj.ime} />
                </Form.Group>

                <Form.Group controlId="prezime">
                    <Form.Label>Prezime</Form.Label>
                    <Form.Control type="text" name="prezime" required defaultValue={narucitelj.prezime} />
                </Form.Group>

                <Form.Group controlId="adresa">
                    <Form.Label>Adresa</Form.Label>
                    <Form.Control type="text" name="adresa" required defaultValue={narucitelj.adresa} />
                </Form.Group>

                <Form.Group controlId="telefon">
                    <Form.Label>Telefon</Form.Label>
                    <Form.Control type="text" name="telefon" required defaultValue={narucitelj.telefon} />
                </Form.Group>

                <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" required defaultValue={narucitelj.email} />
                </Form.Group>

                <hr />
                <Row>
                    <Col xs={6} sm={6} md={3} lg={6} xl={6} xxl={6}>
                        <Link to={RoutesNames.NARUCITELJ_PREGLED} className="btn btn-danger siroko">
                            Odustani
                        </Link>
                    </Col>
                    <Col xs={6} sm={6} md={9} lg={6} xl={6} xxl={6}>
                        <Button variant="primary" type="submit" className="siroko">
                            Promjeni naručitelja
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
}
