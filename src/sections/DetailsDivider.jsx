import party from "../assets/party.png";
import line2 from "../assets/lineas01.svg";
import "../style/DetailsDivider.css";

export default function DetailsDivider() {
  return (
    <div className="details-divider-fullbleed" aria-hidden="true">
      <img src={line2} alt="" className="details-lines" />
      <div className="details-badge">
        <div className="details-badge__circle">
          <img src={party} alt="" className="details-badge__icon" />
        </div>
      </div>
    </div>
  );
}
