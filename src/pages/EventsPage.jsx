import React from "react";
import HeroEvent from "../components/HeroEvent";
import EventSwiper from "../components/EventSwiper";
import EventBox from "../components/EventBox";
import CTA from "../components/CTA";

const eventCollection = [
  {
    event: "TECFest Talks",
    month: "Q1",
    year: "",
    date: "",
    price: "",
    desc: "TECFest Talks merupakan kegiatan untuk memperkaya wawasan serta membangkitkan jiwa dan semangat wirausaha khususnya pada generasi muda dengan melibatkan narasumber pilihan.",
    link: "/events/tecfest-talks",
  },
  {
    event: "Youth Entrepreneur Lab",
    month: "Q1",
    year: "",
    date: "",
    price: "",
    desc: "YEL merupakan kegiatan untuk mengenalkan pengetahuan bisnis kepada pelajar dengan pemaparan materi oleh narasumber. YEL bekerja sama dengan institusi pendidikan.",
    link: "/events/youth-entrepreneur-lab",
  },
  {
    event: "Start-Up Expo",
    month: "",
    year: "",
    date: "",
    price: "",
    desc: "Start-Up Expo merupakan kegiatan pameran yang menampilkan produk unggulan dari berbagai start-up di Indonesia yang memiliki inovasi dan perkembangan teknologi terkini.",
    link: "/events/startup-expo",
  },
  {
    event: "Grand Summit",
    month: "",
    year: "",
    date: "",
    price: "",
    location: "",
    desc: "Grand Summit merupakan kegiatan yang menjadi acara puncak dari rangkaian kegiatan TECFest 2023 yang terdiri dari Pitching Day dan Gala Dinner.",
    link: "/events/grand-summit",
  },
];

function EventsPage() {
  return (
    <div>
      <HeroEvent />
      {/* <EventSwiper list={eventCollection} /> */}
      <EventBox list={eventCollection} />
      <CTA compe={false} event={true} />
    </div>
  );
}

export default EventsPage;
