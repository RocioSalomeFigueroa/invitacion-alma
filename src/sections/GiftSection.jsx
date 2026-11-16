// src/components/GiftSection.jsx
import { useState } from "react";
import GiftModal from "./GiftModal";
import imgGift from "../assets/gift.png";
import divider from "../assets/divider.png";
import "../style/GiftSection.css"

function GiftIcon() {
  return (
    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4" y="9" width="16" height="11" rx="2" stroke="var(--rosa,#fcd9ce)" strokeWidth="1.6"/>
      <path d="M4 12h16M12 9v11" stroke="var(--rosa,#fcd9ce)" strokeWidth="1.6"/>
      <path d="M12 9s-3.5-1-5-2.6C5.7 5.3 5.9 4.1 6.7 3.6c1-.7 2.9-.1 4 1C11.6 5.4 12 6.6 12 7.7
               M12 9s3.5-1 5-2.6c1.3-1.1 1.1-2.3.3-2.8-1-.7-2.9-.1-4 1C12.4 5.4 12 6.6 12 7.7"
            stroke="var(--rosa,#fcd9ce)" strokeWidth="1.6"/>
    </svg>
  );
}

export default function GiftSection() {
  const [open, setOpen] = useState(false);

  return (
    <section className="gifts">
                      <img src={divider} alt="" className="divider_gift" />
        
      <div className="gifts__head">
        <h2 className="party__title">Regalos</h2>
        <p className="party__subtitle">
          Si deseas regalarme algo más que tu hermosa presencia…
        </p>
        <div className="gifts__icon">
          <img src={imgGift} alt="Gift" />
        <button className="btn-confirm gifts__btn" onClick={() => setOpen(true)}>
          Número de CBU
        </button>
        </div>
      </div>

      <GiftModal open={open} onClose={() => setOpen(false)} />
    </section>
  );
}
