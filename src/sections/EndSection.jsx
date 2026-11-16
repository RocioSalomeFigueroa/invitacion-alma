// src/components/EndSection.jsx
import bgFoto from "../assets/foto-hero.png";
import lineArriba from "../assets/linea-arriba.png";
import lineAbajo from "../assets/linea-baja.png";
import "../style/EndSection.css";

function buildGCalUrl({ title, start, end, location, details, tz }) {
  const base = "https://calendar.google.com/calendar/render";
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: title,
    dates: `${start}/${end}`,
    ctz: tz || "America/Argentina/Buenos_Aires",
    location: location || "",
    details: details || "",
  });
  return `${base}?${params.toString()}`;
}

export default function EndSection({
  onOpenRSVP,
  onOpenSong,
  eventTitle = "Fiesta  de Alma",
  eventStart = "20251205T213000",
  eventEnd   = "20251206T010000",
  eventLocation = "Villa Maria, Mar del Plata",
  eventDetails  = "¡Te esperamos para celebrar! 💖",
}) {
  const gcalUrl = buildGCalUrl({
    title: eventTitle, start: eventStart, end: eventEnd,
    location: eventLocation, details: eventDetails,
    tz: "America/Argentina/Buenos_Aires",
  });

  const openRSVP = (e) => {
    e.preventDefault();
    if (onOpenRSVP) onOpenRSVP();
    else window.dispatchEvent(new CustomEvent("open:rsvp"));
  };

  const openSong = (e) => {
    e.preventDefault();
    if (onOpenSong) onOpenSong();
    else window.dispatchEvent(new CustomEvent("open:song"));
  };

  return (
    <section className="endSection" style={{ backgroundImage: `url(${bgFoto})` }}>
      <div className="endSection__inner">
        <img src={lineArriba} alt="" className="imgEndSectionUp" />
        <div className="container_EndSection">
          <div className="leftEndSection">
            <h2>Alma</h2>
            <h4>Mis 15 años</h4>
          </div>
          <div className="rightEndSection">
            <ul>
              <li className="rightEndSectionItem">
                <a href="#confirmar" className="endSection__btn" onClick={openRSVP}>
                  CONFIRMAR ASISTENCIA
                </a>
              </li>
              <li className="rightEndSectionItem">
                <a className="endSection__btn" href={gcalUrl} target="_blank" rel="noopener noreferrer">
                  AGENDAR
                </a>
              </li>
              <li className="rightEndSectionItem">
                <a href="#cancion" className="endSection__btn" onClick={openSong}>
                  SUGERIR CANCION
                </a>
              </li>
            </ul>
          </div>
        </div>
        <img src={lineAbajo} alt="" className="imgEndSectionDown" />
      </div>
    </section>
  );
}
