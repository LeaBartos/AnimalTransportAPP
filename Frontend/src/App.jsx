import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBarAnimalTransport from "./components/NavBarAnimalTransport";
import { Route, Routes } from "react-router-dom";
import { RoutesNames } from "./constants";
import Pocetna from "./pages/Pocetna";
import NaruciteljiPregled from "./pages/narucitelji/NaruciteljiPregled";
import NaruciteljiDodaj from "./pages/narucitelji/NaruciteljiDodaj";
import NaruciteljiPromjena from "./pages/narucitelji/NaruciteljiPromjena";

function App() {
    return (
        <>
            <NavBarAnimalTransport />
            <Routes>
                <Route path={RoutesNames.HOME} element={<Pocetna />} />

                <Route path={RoutesNames.NARUCITELJ_PREGLED} element={<NaruciteljiPregled />} />
                <Route path={RoutesNames.NARUCITELJ_NOVI} element={<NaruciteljiDodaj />} />
                <Route path={RoutesNames.NARUCITELJ_PROMJENA} element={<NaruciteljiPromjena />} />
            </Routes>
        </>
    );
}

export default App;
