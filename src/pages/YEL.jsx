import CarouselYEL from "../components/CarouselYEL";
import HeroYouthentrepreneurLab from "../components/HeroYouthEntrepreneurLab";
import SpeakerYEL from "../components/SpeakerYEL";

function YEL() {
    return (
        // GAMBAR JADI BACKGROUND
        // <div>
        //     <div style={{
        //         backgroundImage: "url('/assets/bgYel.png')",
        //         backgroundRepeat: "no-repeat",
        //     }}
        //         className="bg-no-repeat bg-[length:120%_40%] bg-left-top sm:bg-[length:100%_60%] sm:bg-left-top lg:bg-contain -translate-y-4" >
        //         <HeroYouthentrepreneurLab />
        //         <CarouselYEL />
        //     </div>
        //     <SpeakerYEL />
        // </div>

        // GAMBAR JDI KOMPONEN
        <div className="">
            <div className="flex justify-center">
                <img src={"/assets/bgYel.png"} className="w-1/2 lg:w-1/3 rounded-3xl pt-7" />
            </div>
            <HeroYouthentrepreneurLab />
            <CarouselYEL />
            <SpeakerYEL />
        </div>
    );
}

export default YEL;