import { HttpService } from "./HttpService";

async function get() {
    return await HttpService.get("/Narucitelj")
        .then((odgovor) => {
            return odgovor.data;
        })
        .catch((e) => {
            console.error(e);
        });
}

async function getBySifra(sifra) {
    return await HttpService.get("/Narucitelj/" + sifra)
        .then((odgovor) => {
            return { greska: false, poruka: odgovor.data };
        })
        .catch(() => {
            return { greska: true, poruka: "Taj narucitelj ne postoji!" };
        });
}

async function obrisi(sifra) {
    return await HttpService.delete("/Narucitelj/" + sifra)
        .then((odgovor) => {
            return odgovor;
        })
        .catch(() => {
            return { greska: true, poruka: "Narucitelj se ne može obrisati!" };
        });
}

async function dodaj(narucitelj) {
    return await HttpService.post("/Narucitelj", narucitelj)
        .then((odgovor) => {
            return { greska: false, poruka: odgovor.data };
        })
        .catch(() => {
            return { greska: true, poruka: "Narucitelj se ne može dodati!" };
        });
}

async function promjena(sifra, narucitelj) {
    return await HttpService.put("/Narucitelj/" + sifra, narucitelj)
        .then((odgovor) => {
            return { greska: false, poruka: odgovor.data };
        })
        .catch(() => {
            return { greska: true, poruka: "Narucitelj se ne može promjeniti!" };
        });
}

export default {
    get,
    getBySifra,
    obrisi,
    dodaj,
    promjena,
};
