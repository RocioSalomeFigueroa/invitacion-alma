// src/components/GiftModal.jsx
import { useEffect, useRef, useState } from "react";
import imgGift from "../assets/gift.png";
import "../style/GiftModal.css";

export default function GiftModal({
  open,
  onClose,
  bank = import.meta.env.VITE_GIFT_BANK || "Mercado Pago",
  titular = import.meta.env.VITE_GIFT_TITULAR || "Alma Heredia",
  cbu = import.meta.env.VITE_GIFT_CBU || "0000003100042513356801",
}) {
  const panelRef = useRef(null);
  const [copied, setCopied] = useState("");

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose?.();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    if (open) panelRef.current?.focus();
  }, [open]);

  if (!open) return null;

  const copy = async (text, key) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(key);
      setTimeout(() => setCopied(""), 1800);
    } catch {
      // fallback silencioso
    }
  };

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-label="Regalos">
      <div className="modal__backdrop" onClick={onClose} />

      <div className="modal__wrap" onClick={(e) => e.stopPropagation()}>
        <div className="modal__badge modal__badge--outside" aria-hidden="true">
          <img src={imgGift} alt="Gift" />
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
            <h2 className="modal__title">Regalos</h2>
          </div>

          <div className="modal__body__gift">
            <div className="gift-list-card">
              <ul className="gift-list">
                <li className="gift-item">
                  <span className="gift-item__label">Banco</span>
                  <span className="gift-item__value">{bank}</span>
                </li>

                <li className="gift-item">
                  <span className="gift-item__label">Titular</span>
                  <span className="gift-item__value">{titular}</span>
                </li>

                <li className="gift-item">
                  <span className="gift-item__label">CBU</span>
                  <span className="gift-item__value">
                    <span className="gift-item__value">{cbu}</span>

                    <button
                      className={`btn-copy icon-only ${copied === "cbu" ? "is-ok" : ""}`}
                      onClick={() => copy(cbu, "cbu")}
                      aria-label="Copiar CBU"
                      title={copied === "cbu" ? "Copiado" : "Copiar CBU"}
                    >
                      <span className="material-symbols-outlined" aria-hidden="true">
                        content_copy
                      </span>
                    </button>

                    {copied === "cbu" && (
                      <span className="copy-ok" role="status" aria-live="polite">
                        Copiado
                      </span>
                    )}
                  </span>
                </li>

              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
