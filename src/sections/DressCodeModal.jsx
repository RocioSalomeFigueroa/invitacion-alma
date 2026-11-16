// src/components/DressCodeModal.jsx
import { useEffect, useRef } from "react";
import "../style/DressCodeModal.css";
import imgDress from "../assets/dress-code.png";

export default function DressCodeModal({ open, onClose }) {
  const dialogRef = useRef(null);

  // ESC para cerrar
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose?.();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // Lock scroll del body
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Focus en el panel
  useEffect(() => {
    if (open) dialogRef.current?.focus();
  }, [open]);

  if (!open) return null;

  // (Opcional) paleta de colores sugeridos
  const palette = ["#7b3346", "#d9a7b1", "#f6dfe3", "#fff8f6", "#3a1423"];

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-label="Dress Code">
      <div className="modal__backdrop" onClick={onClose} />

      <div className="modal__wrap" onClick={(e) => e.stopPropagation()}>
        {/* badge y X por fuera del panel */}
        <div className="modal__badge modal__badge--outside" aria-hidden="true">
          <img src={imgDress} alt="" />
        </div>
        <button
          className="modal__close modal__close--outside"
          onClick={onClose}
          aria-label="Cerrar"
        >
          ×
        </button>

        {/* panel */}
        <div
          className="modal__panel"
          ref={dialogRef}
          tabIndex={-1}
          aria-labelledby="dc-title"
        >
          <div className="modal__header__music">
            <h2 id="dc-title" className="modal__title">Dress Code</h2>
          </div>

          <div className="modal__body dc-body">
            <ul className="heart-list">
  <li><span className="icon-heart" aria-hidden="true">❤</span> Estilo sugerido: elegante Sport.</li>
  <li><span className="icon-heart" aria-hidden="true">❤</span> Colores prohibidos: bordo y plateado.</li>
  <li><span className="icon-heart" aria-hidden="true">❤</span> Calzado cómodo para bailar toda la noche.</li>
</ul>
          </div>
        </div>
      </div>
    </div>
  );
}
