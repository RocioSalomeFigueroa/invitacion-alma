// src/components/SongModal.jsx
import { useEffect, useRef, useState } from "react";
import { supabase } from "../lib/supabase";
import imgMusic from "../assets/music.png";
import "../style/SongModal.css"

export default function SongModal({ open, onClose }) {
  const dialogRef = useRef(null);
  const [name, setName] = useState("");
  const [song, setSong] = useState("");
  const [link, setLink] = useState("");
  const [loading, setLoading] = useState(false);

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
    if (open) dialogRef.current?.querySelector("input")?.focus();
  }, [open]);

  if (!open) return null;

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const payload = { name: name.trim(), song: song.trim(), link: link.trim() || null };
    const { error } = await supabase.from("music_suggestions").insert([payload]);
    setLoading(false);
    if (error) return alert("No se pudo guardar la sugerencia:\n" + error.message);
    onClose?.();
    setName(""); setSong(""); setLink("");
  };

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-label="Sugerir canción">
      <div className="modal__backdrop" onClick={onClose} />

      {/* WRAP relativo: acá “anclamos” los flotantes */}
      <div className="modal__wrap">
        {/* Badge FUERA del panel */}
        <div className="modal__badge modal__badge--outside" aria-hidden="true">
          <img src={imgMusic} alt="" />
        </div>

        {/* Botón cerrar FUERA del panel */}
        <button
          className="modal__close modal__close--outside"
          onClick={onClose}
          aria-label="Cerrar"
          disabled={loading}
        >
          ×
        </button>

        {/* PANEL (tiene overflow:hidden y bordes redondeados) */}
        <div className="modal__panel" ref={dialogRef} onClick={(e)=>e.stopPropagation()}>
          <div className="modal__header__music">
            <h2 className="modal__title">Sugerir Canción</h2>
          </div>

          <div className="modal__body">
            <form id="song-form" onSubmit={submit} className="modal__form music" aria-busy={loading}>
              <fieldset disabled={loading} style={{ border:0, padding:0, margin:0 }}>
                <label>
                  <span>Tu nombre</span>
                  <input required value={name} onChange={(e)=>setName(e.target.value)} />
                </label>

                <label>
                  <span>Nombre de la canción y autor</span>
                  <input required value={song} onChange={(e)=>setSong(e.target.value)} />
                </label>

                <label>
                  <span>Si lo desea ingrese el link de YouTube, Spotify, etc.</span>
                  <input type="url" placeholder="https://..." value={link} onChange={(e)=>setLink(e.target.value)} />
                </label>
              </fieldset>
            </form>
          </div>

          <div className="modal__actions">
            <button type="button" className="btn-cancel" onClick={onClose} disabled={loading}>
              Cancelar
            </button>
            <button type="submit" form="song-form" className="btn--confirm" disabled={loading || !name || !song}>
              {loading ? "Guardando…" : "Sugerir canción"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
