import maskGroup from "./assets/Maskgroup.png";

function Cta(){
    return (
        <div className="mt-28 font-poppins font-bold flex flex-col sm:flex-row sm:justify-center overflow-hidden">
            <div className="self-center bg-blobyellow bg-top bg-[length:80%] bg-no-repeat flex-shirnk-1">
                <button className="min-h-[300px] hover:scale-110 transitiohn-all duration-300">
                    <div className="flex flex-col">
                        <img src={maskGroup} alt="maskGroup" className="self-center w-[40%]"/>
                        <div className="self-center">Registering to events?</div>
                        <div className="self-center">Find out how!</div>
                    </div>
                </button>
            </div>

            <div className="self-center bg-blobred bg-top bg-[length:70%] bg-no-repeat flex-shrink-1">
                <button className="min-h-[300px] hover:scale-110 transitiohn-all duration-300">
                    <div className="flex flex-col">
                        <img src={maskGroup} alt="maskGroup" className="self-center w-[40%]"/>
                        <div className="self-center ">How to register <br/>to our <br/>competition?</div>
                    </div>
                </button>
            </div>
            
        </div>
    );
}
export default Cta