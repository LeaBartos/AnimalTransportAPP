import { Button, Container, Table } from "react-bootstrap";
import NaruciteljService from "../../services/NaruciteljService";
import { useEffect, useState } from "react";
import { RoutesNames } from "../../constants";
import { Link, useNavigate } from "react-router-dom";

export default function NaruciteljiPregled() {
    const [narucitelji, setNarucitelji] = useState();
    const navigate = useNavigate();

    async function dohvatiNarucitelje() {
        await NaruciteljService.get()
            .then((odgovor) => {
                setNarucitelji(odgovor);
            })
            .catch((e) => {
                console.log(e);
            });
    }

    useEffect(() => {
        dohvatiNarucitelje();
    }, []);

    async function obrisiAsync(sifra) {
        const odgovor = await NaruciteljService.obrisi(sifra);
        if (odgovor.greska) {
            alert(odgovor.poruka);
            return;
        }
        dohvatiNarucitelje();
    }

    function obrisi(sifra) {
        obrisiAsync(sifra);
    }

    return (
        <Container>
            <Link to={RoutesNames.NARUCITELJ_NOVI}>Dodaj novog naručitelja</Link>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Vrsta</th>
                        <th>Ime</th>
                        <th>Prezime</th>
                        <th>Adresa</th>
                        <th>Telefon</th>
                        <th>Email</th>
                        <th>Akcija</th>
                    </tr>
                </thead>
                <tbody>
                    {narucitelji &&
                        narucitelji.map((narucitelj, index) => (
                            <tr key={index}>
                                <td>{narucitelj.vrsta}</td>
                                <td>{narucitelj.ime}</td>
                                <td>{narucitelj.prezime}</td>
                                <td>{narucitelj.adresa}</td>
                                <td>{narucitelj.telefon}</td>
                                <td>{narucitelj.email}</td>
                                <td>
                                    <Button variant="primary" onClick={() => navigate(`/narucitelji/${narucitelj.sifra}`)}>
                                        Promjeni
                                    </Button>
                                    &nbsp;&nbsp;&nbsp;
                                    <Button variant="danger" onClick={() => obrisi(narucitelj.sifra)}>
                                        Obriši
                                    </Button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </Table>
        </Container>
    );
}
