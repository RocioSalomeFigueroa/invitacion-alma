// src/components/PartySection.jsx
import line1 from "../assets/lineas02.svg";
import music from "../assets/music.png";
import dress from "../assets/dress-code.png";
import phone from "../assets/phone.png";
import "../style/PartySection.css";

export default function PartySection({ onMusicClick, onDressClick, onContactClick }) {
  const cards = [
    {
      kind: "music",
      title: "Música",
      img: music,
      alt: "Ícono de música",
      text: "¿Cuál es la canción que no debe faltar en la playlist de la fiesta?",
      cta: "Sugerir canción",
      onClick: onMusicClick,
    },
    {
      kind: "dress",
      title: "Dress Code",
      img: dress,
      alt: "Ícono de moño para dress code",
      text: "Una orientación para tu vestuario",
      cta: "Ver más",
      onClick: onDressClick,
    },
  ];

  return (
    <section className="party">
      <div className="details-divider-fullbleed" aria-hidden="true">
        <img src={line1} alt="" className="details-lines" />
      </div>

      <div className="party__content">
        <div className="party__head">
          <h2 className="party__title">Una gran fiesta con vos
</h2>
          <p className="party__subtitle">
            Hagamos juntos una fiesta épica. Aquí algunos detalles a tener en cuenta.
          </p>
        </div>

        <div className="party__grid">
          {cards.map(({ kind, title, img, alt, text, cta, onClick }, i) => (
            <article className={`party-card party-card--${kind}`} key={i}>
              <h3 className="party-card__title">{title}</h3>

              <div className={`party-card__icon party-card__icon--${kind}`}>
                {/* Si el ícono es decorativo podés dejar alt="" y aria-hidden */}
                <img src={img} alt={alt} />
              </div>

              <p className="party-card__text">{text}</p>

              <button type="button" className="party-card__btn" onClick={onClick}>
                {cta}
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
