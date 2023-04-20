import React from "react";
import HeroEvent from "../components/HeroEvent";
import EventSwiper from "../components/EventSwiper";
import EventBox from "../components/EventBox";
import CtaEvent from "../components/CtaEvent";

function EventsPage() {
  return (
    <div>
      <HeroEvent />
      <EventSwiper />
      <CtaEvent />
    </div>
  );
}

export default EventsPage;
