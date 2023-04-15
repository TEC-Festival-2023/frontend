import React from "react";
import Miniquiz from "../components/Miniquiz";
import HeroTECFestTalks from "../components/HeroTECFestTalks";
import CtaTECFestTalks from "../components/CtaoTECFestTalks";
import FooterTECFestTalks from "../components/FooterTECFestTalks";

function TECFestTalks() {
    return (
        <div>
            <HeroTECFestTalks />
            <Miniquiz />
            <CtaTECFestTalks />
            <FooterTECFestTalks />
        </div>
    );
}

export default TECFestTalks;