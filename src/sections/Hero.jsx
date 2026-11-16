import bohoTop from '../assets/aaaa.png';   // PNG con adorno+formas
import bgFoto  from '../assets/foto-hero.png';  // foto de fondo del hero
import "../style/Hero.css";

export default function Hero({ event }) {
  const bg    = event?.cover     || bgFoto;
  const date  = event?.date      || new Date().toISOString();

  return (
    <header className="hero" >
      <img className="hero__overlay" src={bohoTop} alt="" aria-hidden="true" />
      <div className="hero__content container">
        <div className="hero__date"><span>5-12-26</span></div>
        <h1 className="title">Alma</h1>
        <div className="subtitle">Mis 15 años</div>
        <blockquote className="quote-inline">
        Hay momentos que se convierten en recuerdos para toda la vida, 
        <br/>y me encantaría compartir este momento tan especial con vos.
        <br/>Te espero para celebrar mis XV
        </blockquote>
      </div>
    </header>
  );
}
