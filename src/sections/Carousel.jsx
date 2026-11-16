import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import divider from "../assets/divider.png";
import camera from "../assets/camera.png";
import "../style/Carousel.css";

export default function CarouselAutoScrollCards({
  slides = [],                 // [{ src, color? }]  color opcional (fallback alterna)
  speed = 1.2,                 // > más rápido | 1–2 suele andar bien
  pauseOnHover = true
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      dragFree: true,
      containScroll: "trimSnaps"
    },
    [
      AutoScroll({
        speed,
        playOnInit: true,
        stopOnInteraction: false,
        stopOnMouseEnter: pauseOnHover
      })
    ]
  );

  const autoScroll = emblaApi?.plugins()?.autoScroll;

  return (
    <div className="embla embla--gutter">
              <img src={divider} alt="" className="divider" />
              <div className="title_galery_container">
            <h2 className="title_galery">Un recorrido de estos 15 años</h2>
            <img src={camera} alt="" className="camera"/>
        </div>
      <div
        className="embla__viewport"
        ref={emblaRef}
        onMouseLeave={() => autoScroll?.play()}
      >
        <div className="embla__container">
          {slides.map((item, i) => (
            <div className="embla__slide embla__slide--card" key={i}
            style={{
                    background:
                      item.color ??
                      (i % 2 === 0 ? "#dfe3e6" : "#d3919b")
                  }}>
              <article className="card">
                <div className="card__media">
                  <img src={item.src} alt={`slide-${i}`} loading="lazy" />
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
