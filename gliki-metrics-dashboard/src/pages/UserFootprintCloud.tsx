import React from "react";
import MetricDisplay from "../components/MetricDisplay";
import { LabelTextDisplay } from "../components/LabelTextDisplay";

interface ICurrentFootprint {
    currentFootprint: number | string
}
export const UserFootprintCloud = ({currentFootprint}: ICurrentFootprint)=>{
    

    const footprintNumber = typeof currentFootprint === 'number' ? currentFootprint : parseInt(currentFootprint);

    const formattedNumber = footprintNumber.toLocaleString();

    
    return (
        <div className="relative h-full overflow-hidden">

            <img src="/purple_cloud.png" className="absolute w-full h-full top-0 left-0 object-contain pr-5 pl-5" alt="purple-cloud"/>

            {/* leaf group BOTTOM left*/}
            <img src="/leaf1.svg" alt="leaf icon 1" className="absolute  w-[18%] h-[15%] top-[72%] left-[10%]  rotate-180
            sm:w-[18%] sm:h-[18%] sm:top-[72%] sm:left-[7%]
            md:w-[22%] md:h-[18%] md:top-[79%] md:left-[10%]
            lg:w-[25%] lg:h-[18%] lg:top-[80%] lg:left-[18%]
            xl:w-[27%] xl:h-[18%] xl:top-[82%] xl:left-[20%]
            " />
            <img src="/leaft2.svg" alt="leaf icon 2" className="absolute rotate-180 
            top-[67%] left-[5%] h-[15%] w-[18%] 

            sm:w-[18%] sm:h-[14%] sm:top-[68%] sm:left-[1%]
            md:w-[22%] md:h-[14%] md:top-[72%] md:left-[6%]
            lg:w-[25%] lg:h-[14%] lg:top-[74%] lg:left-[14%]
            xl:w-[27%] xl:h-[14%] xl:top-[76%] xl:left-[17%]" />

            {/* leaf group TOP right*/}
            <img src="/leaf1.svg" alt="leaf icon 1 reverse" className="absolute top-[22%] left-[68%] h-[15%] w-[18%]
            
            sm:w-[18%] sm:h-[18%] sm:top-[5%] sm:left-[69%]
            md:w-[22%] md:h-[18%] md:top-[8%] md:left-[62%]
            lg:w-[25%] lg:h-[18%] lg:top-[6%] lg:left-[54%]
            xl:w-[27%] xl:h-[18%] xl:top-[5%] xl:left-[51%]
            " />
            <img src="/leaft2.svg" alt="leaf icon 2 reverse" className="absolute top-[25%] left-[76%] h-[15%] w-[18%]
            
            sm:w-[18%] sm:h-[15%] sm:top-[13%] sm:left-[76%]
            md:w-[18%] md:h-[15%] md:top-[17%] md:left-[70%]
            lg:w-[18%] lg:h-[15%] lg:top-[16%] lg:left-[62%]
            xl:w-[18%] xl:h-[15%] xl:top-[16%] xl:left-[59%]
            " />

            <img src="/white_cloud.png" className="absolute w-full h-full top-0 left-0 object-contain pr-5 pl-5" alt="white-cloud"/>

            <img src="/butterfly.svg" alt="butterfly" className="absolute top-[22%] left-[8%] h-[15%] w-[18%] smooth-transition
            sm:w-[20%] sm:h-[18%] sm:top-[12%] sm:left-[12%]
            md:w-[22%] md:h-[18%] md:top-[12%] md:left-[15%]
            lg:w-[25%] lg:h-[18%] lg:top-[12%] lg:left-[20%]
            xl:w-[27%] xl:h-[18%] xl:top-[12%] xl:left-[22%]
            " />

            {/* Cloud grid container*/}
            <div className="    relative 
            flex flex-col justify-between overlay-flex-position 
            top-[33%] left-[24%] h-[37%] w-[53%] lg:left-[35%] xl:left-[36%] 2xl:left-[39%] md:left-[34%] sm:left-[30%]
            sm:w-[45%] md:w-[32%] lg:w-[30%] xl:w-[27%] 2xl:w-[22%]
            sm:h-[45%] md:h-[49%] lg:h-[50%] xl:h-[27%] 2xl:h-[22%]
            ">
            
            {/* flexbox item 1 */}
            <div className="flex-grow  flex items-center justify-center ">
                <LabelTextDisplay text="Your footprint" defaultStyle="text-secondary m-0 text-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl" />
            </div>


            {/* flexbox item 2 */}


            <MetricDisplay number={formattedNumber} unit="kg" className="text-6xl" />

            {/* flexbox item 3 */}
            <LabelTextDisplay text={<> of carbon emissions</>} defaultStyle="text-center text-lg text-primary" />

            {/* flexbox item 4 */}
            <div className="flex justify-center">

            <button className=" w-2/3 shadow-lg text-sm  sm:text-lg md:text-lg lg:text-xl text-white font-bold xl:mt-0 py-2 px-4 rounded-3xl bg-primary focus:outline-none focus:shadow-outline">
        Take a step
    </button>
            </div>

            </div>

        </div>

    )
}