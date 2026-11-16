import { useEffect, useRef } from "react";
import imgPhone from "../assets/phone.png";
import "../style/ContactModal.css"

const cleanPhone = (p) => p.replace(/[^\d+]/g, "").replace(/(?!^)\+/g, "");
const waURL = (phone, msg) =>
  `https://wa.me/${cleanPhone(phone)}?text=${encodeURIComponent(msg)}`;

export default function ContactModal({
  open,
  onClose,
  contacts = [
    {
      name: "Rocío",
      note: "mamá de Alma",
      phone: import.meta.env.VITE_WA_PHONE_MAILEN || "5492236153194",
    },
    {
      name: "Alma",
      note: "cumpleañera",
      phone: import.meta.env.VITE_WA_PHONE_ALMA || "5492235230063",
    },
  ],
  message = "¡Hola! Tengo una consulta sobre la fiesta 🙂",
}) {
  const panelRef = useRef(null);

  // ESC para cerrar
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose?.();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Focus al abrir
  useEffect(() => {
    if (open) panelRef.current?.focus();
  }, [open]);

  if (!open) return null;

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-label="Contacto">
      <div className="modal__backdrop" onClick={onClose} />

      <div className="modal__wrap" onClick={(e) => e.stopPropagation()}>
        {/* Badge y X por fuera */}
        <div className="modal__badge modal__badge--outside" aria-hidden="true">
          <img src={imgPhone} alt="" />
        </div>
        <button
          className="modal__close modal__close--outside"
          onClick={onClose}
          aria-label="Cerrar"
        >
          ×
        </button>

        <div className="modal__panel" ref={panelRef} tabIndex={-1}>
          <div className="modal__header__contact">
            <h2 className="modal__title">¿Dudas o preguntas?</h2>
          </div>

          <div className="modal__body__contact">
            <p style={{ textAlign: "center", marginTop: 0 }}>
              Elegí con quién querés comunicarte:
            </p>

            {/* ---- Tarjetas de contacto (nombre arriba + botón) ---- */}
            <div className="contact-grid">
              {contacts.map(({ name, note, phone }, i) => (
                <div className="contact-card" key={i}>
                  <div className="contact-label">
                    <span className="contact-name">{name}</span>
                    {note && <span className="contact-note"> {note}</span>}
                  </div>

                  <a
                    className="btn-whatsapp contact-btn"
                    href={waURL(phone, message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`WhatsApp a ${name}`}
                  >
                    WhatsApp
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
