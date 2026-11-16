// MapModal.jsx
import imgModal from "../assets/img-modal.png";     // ← usa tu imagen local
import "../style/MapModal.css";

const EMBED_SRC =
  "https://www.google.com/maps?q=Sal%C3%B3n%20Villa%20Mar%C3%ADa%20Mar%20del%20Plata&output=embed";

export default function MapModal({ open, onClose }) {
  if (!open) return null;

  const OPEN_URL = "https://www.google.com/maps/search/?api=1&query=Sal%C3%B3n+Villa+Mar%C3%ADa+Mar+del+Plata";

  return (
    <div className="gm-modal" onClick={onClose}>
      <div className="gm-panel" onClick={(e) => e.stopPropagation()}>
        <button className="gm-close" onClick={onClose} aria-label="Cerrar">
          ×
        </button>

        <h2>Cómo llegar a la Fiesta</h2>
        <iframe
          title="Mapa"
          src={EMBED_SRC}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          style={{ border: 0, width: "100%", height: "55vh", borderRadius: 14 }}
        />
        <a className="btn-map" href={OPEN_URL} target="_blank" rel="noopener">
          Ampliar mapa
        </a>
      </div>
    </div>
  );
}
