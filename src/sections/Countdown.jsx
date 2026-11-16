import { useEffect, useState } from "react";
import waves from "../assets/bbbb.png";
import heart from "../assets/heart.png";
import "../style/Countdown.css";

const pad = n => n.toString().padStart(2, "0");

export default function Countdown({ date }) {
  const target = new Date(date).getTime();

  const calc = () => {
    const d = Math.max(0, target - Date.now());
    const days = Math.floor(d / 86400000);
    const hours = Math.floor((d % 86400000) / 3600000);
    const minutes = Math.floor((d % 3600000) / 60000);
    const seconds = Math.floor((d % 60000) / 1000);
    return { days, hours, minutes, seconds };
  };

  const [left, setLeft] = useState(calc());
  useEffect(() => {
    const id = setInterval(() => setLeft(calc()), 1000);
    return () => clearInterval(id);
  }, [target]);

  return (
    <section className="countdown fullbleed" aria-label="Cuenta regresiva">
      <img src={waves} alt="" className="countdown__bg" />

      <div className="countdown__bubble">
        <h3 className="countdown__title">Faltan</h3>

        <div className="countdown__grid">
          <div className="countdown__item">
            <div className="countdown__num">{left.days}</div>
            <div className="countdown__label">días</div>
          </div>
          <span className="countdown__sep" />
          <div className="countdown__item">
            <div className="countdown__num">{pad(left.hours)}</div>
            <div className="countdown__label">hs</div>
          </div>
          <span className="countdown__sep" />
          <div className="countdown__item">
            <div className="countdown__num">{pad(left.minutes)}</div>
            <div className="countdown__label">min</div>
          </div>
          <span className="countdown__sep" />
          <div className="countdown__item">
            <div className="countdown__num">{pad(left.seconds)}</div>
            <div className="countdown__label">seg</div>
          </div>
        </div>

        {/* Corazón como imagen + animación */}
        <img
          src={heart}
          alt=""
          className="countdown__heart"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
