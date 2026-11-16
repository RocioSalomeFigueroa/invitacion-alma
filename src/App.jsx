import Hero from "./sections/Hero";
import Details from "./sections/Details";
import Footer from "./sections/Footer";
import Carousel from "./sections/Carousel";
import s1 from "./assets/isa/1.jpeg";
import s2 from "./assets/isa/2.jpeg";
import s3 from "./assets/isa/3.jpeg";
import s4 from "./assets/isa/4.jpeg";
import s5 from "./assets/isa/5.jpeg";
import s6 from "./assets/isa/6.jpeg";
import s7 from "./assets/isa/7.jpeg";
import s8 from "./assets/isa/8.jpeg";
import s9 from "./assets/isa/9.jpeg";
import s10 from "./assets/isa/10.jpeg";
import s11 from "./assets/isa/11.jpeg";
import s12 from "./assets/isa/12.jpeg";
import s13 from "./assets/isa/13.jpeg";
import "./theme.css";
import PartySection from "./sections/PartySection";
import SongModal from "./sections/SongModal";
import { useEffect, useState } from "react";
import DressCodeModal from "./sections/DressCodeModal";
import ContactModal from "./sections/ContactModal";
import GiftSection from "./sections/GiftSection";
import EndSection from "./sections/EndSection";
import RSVPModal from "./sections/RSVPModal";
import CountdownCopy from "./sections/CountdownCopy";

export default function App(){
  const event = {
    slug: import.meta.env.VITE_EVENT_SLUG || "los15dealma",
    title: "Los 15 de Alma",
    date: "2026-12-05T20:00:00-03:00",
    placeName: "Salón Villa María",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Sal%C3%B3n+Villa+Mar%C3%ADa+Mar+del+Plata",
    dressCode: "Elegante",
  };
  const [openSong, setOpenSong] = useState(false);
  const [openDress, setOpenDress] = useState(false);
  const [openContact, setOpenContact] = useState(false);
  const [rsvpOpen, setRsvpOpen] = useState(false);
    const [songOpen, setSongOpen] = useState(false);

  useEffect(() => {
    const openR = () => setRsvpOpen(true);
    const openS = () => setSongOpen(true);
    window.addEventListener("open:rsvp", openR);
    window.addEventListener("open:song", openS);
    return () => {
      window.removeEventListener("open:rsvp", openR);
      window.removeEventListener("open:song", openS);
    };
  }, []);


  return (
    <div>
      <Hero event={event} />

      {/*<Countdown date={event.date} />}*/}
      <CountdownCopy date={event.date} />
      <Details event={event} />
      <Carousel 
      slides={[
        { src: s1 },
        { src: s2},
        { src: s3},
        { src: s4},
        { src: s5},
        { src: s6},
        { src: s7},
        { src: s8},
        { src: s9},
        { src: s10},
        { src: s11},
        { src: s12},
        { src: s13}
      ]}
      speed={1.35}      />
      <PartySection
        onMusicClick={() => setOpenSong(true)}
        onDressClick={() => setOpenDress(true)}
        onContactClick={() => setOpenContact(true)}
      />
      <SongModal open={openSong} onClose={() => setOpenSong(false)} />
      <DressCodeModal open={openDress} onClose={() => setOpenDress(false)} />
      <ContactModal open={openContact} onClose={() => setOpenContact(false)} />
      <GiftSection />
      <EndSection
        onOpenRSVP={() => setRsvpOpen(true)}
        onOpenSong={() => setSongOpen(true)}
      />

      <RSVPModal
        open={rsvpOpen}
        onClose={() => setRsvpOpen(false)}
        // onSubmit={...} // opcional si querés interceptar el guardado
      />

      <SongModal
        open={songOpen}
        onClose={() => setSongOpen(false)}
      />
      <Footer />
    </div>
  );
}
