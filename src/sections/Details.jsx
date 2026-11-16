
import RSVPModal from "./RSVPModal";
import MapModal from "./MapModal";
import { useState } from "react";
import DetailsDivider from "./DetailsDivider";
import  "../style/Details.css";
import fiesta from "../assets/fiesta.png"; // <-- cambialo por tu archivo si tiene otro nombre

export default function Details({ event }) {
    const [rsvpOpen, setRsvpOpen] = useState(false);
    const [mapOpen, setMapOpen] = useState(false);
  return (
    <>
    <DetailsDivider />
    <section className="card-fiesta">
      <img className="fiesta" src={fiesta} alt="" />
      <div className="event-day">
        <h1>Día</h1>
        <p>Sabado 5 de diciembre</p>
        <p>21:30hs</p>
        <a title="Add to Calendar" 
          className="addeventatc" 
          data-id="cf08tdnf1qn3" 
          href="https://www.addevent.com/event/cf08tdnf1qn3"
          target="_blank">Agendar
        </a>
      </div>
      <div className="event-place">
        <h1>Lugar</h1>
        <p>Salón Villa María</p>
        <button className="btn-confirm" onClick={()=>setRsvpOpen(true)}>
          Confirmar asistencia
        </button>
      </div>
      <div className="event-address">
        <h1>Dirección</h1>
        <p>Ruta provincial 2 km 392,5</p>
        <button className="btn-address" onClick={() => setMapOpen(true)}>
            Cómo llegar
        </button>
      </div>
    </section>
    <RSVPModal
      open={rsvpOpen}
      onClose={() => setRsvpOpen(false)}
        event={event}
        // onSubmit={saveRSVP} // <- opcional: acá podrías guardar en Supabase
        />
        <MapModal
        open={mapOpen}
                onClose={() => setMapOpen(false)}
                address={event.address}   // Ej: "Cerrito 1554"
        />
        </>
);
}
