import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { RoutesNames } from "../../constants";
import NaruciteljService from "../../services/NaruciteljService";

export default function NaruciteljiDodaj() {
    const navigate = useNavigate();

    async function dodaj(narucitelj) {
        const odgovor = await NaruciteljService.dodaj(narucitelj);
        if (odgovor.greska) {
            alert(odgovor.poruka);
            return;
        }
        navigate(RoutesNames.NARUCITELJ_PREGLED);
    }

    function obradiSubmit(e) {
        e.preventDefault();

        const podaci = new FormData(e.target);

        dodaj({
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
            Dodavanje novog naručitelja
            <Form onSubmit={obradiSubmit}>
                <Form.Group controlId="vrsta">
                    <Form.Label>Vrsta</Form.Label>
                    <Form.Control type="text" name="vrsta" required />
                </Form.Group>

                <Form.Group controlId="ime">
                    <Form.Label>Ime</Form.Label>
                    <Form.Control type="text" name="ime" required />
                </Form.Group>

                <Form.Group controlId="prezime">
                    <Form.Label>Prezime</Form.Label>
                    <Form.Control type="text" name="prezime" required />
                </Form.Group>

                <Form.Group controlId="adresa">
                    <Form.Label>Adresa</Form.Label>
                    <Form.Control type="text" name="adresa" required />
                </Form.Group>

                <Form.Group controlId="telefon">
                    <Form.Label>Telefon</Form.Label>
                    <Form.Control type="text" name="telefon" required />
                </Form.Group>

                <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" required />
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
                            Dodaj novog naručitelja
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
}
