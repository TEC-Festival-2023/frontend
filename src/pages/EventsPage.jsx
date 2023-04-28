import React from "react";
import HeroEvent from "../components/HeroEvent";
import EventSwiper from "../components/EventSwiper";
import EventBox from "../components/EventBox";
import CtaEvent from "../components/CtaEvent";

const eventCollection = [
  {
    month: "Q1",
    year: "",
    date: "",
    event: "",
    price: "",
    location: "",
  },
];

function EventsPage() {
  return (
    <div>
      <HeroEvent />
      {/* <EventSwiper list={eventCollection} /> */}
      <CtaEvent />
    </div>
  );
}

export default EventsPage;
