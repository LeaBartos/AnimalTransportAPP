import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";
import NavBarAnimalTransport from "./components/NavBarAnimalTransport";
import { Route, Routes } from "react-router-dom";
import { RoutesNames } from "./constants";
import Pocetna from "./pages/Pocetna";
import NaruciteljiPregled from "./pages/narucitelji/NaruciteljiPregled";
import NaruciteljiDodaj from "./pages/narucitelji/NaruciteljiDodaj";
import NaruciteljiPromjena from "./pages/narucitelji/NaruciteljiPromjena";
import moment from "moment";

function App() {
    function trenutnaGodina() {
        return moment().year();
    }

    return (
        <>
            <Container>
                <NavBarAnimalTransport />
                <Routes>
                    <Route path={RoutesNames.HOME} element={<Pocetna />} />

                    <Route path={RoutesNames.NARUCITELJ_PREGLED} element={<NaruciteljiPregled />} />
                    <Route path={RoutesNames.NARUCITELJ_NOVI} element={<NaruciteljiDodaj />} />
                    <Route path={RoutesNames.NARUCITELJ_PROMJENA} element={<NaruciteljiPromjena />} />
                </Routes>
                <hr />
                &copy; Animal Transport {trenutnaGodina()}
            </Container>
        </>
    );
}

export default App;
