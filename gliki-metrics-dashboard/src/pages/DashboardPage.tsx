import React from "react";

interface IUserFootprint {
    userFootprint: number
}
export const UserCarbonFootprint = (userFootprint: IUserFootprint)=>{
    return (
        <div className="relative h-full overflow-hidden">

            <img src="/purple_cloud.png" className="absolute w-full h-full top-0 left-0 object-contain pr-5 pl-5" alt="purple-cloud"/>

            {/* leaf group BOTTOM left*/}
            <img src="/leaf1.svg" className="absolute  w-[18%] h-[15%] top-[72%] left-[10%]  rotate-180
            sm:w-[18%] sm:h-[18%] sm:top-[72%] sm:left-[7%]
            md:w-[22%] md:h-[18%] md:top-[79%] md:left-[10%]
            lg:w-[25%] lg:h-[18%] lg:top-[80%] lg:left-[18%]
            xl:w-[27%] xl:h-[18%] xl:top-[82%] xl:left-[20%]
            " />
            <img src="/leaft2.svg" className="absolute rotate-180 
            top-[67%] left-[5%] h-[15%] w-[18%] 

            sm:w-[18%] sm:h-[14%] sm:top-[68%] sm:left-[1%]
            md:w-[22%] md:h-[14%] md:top-[72%] md:left-[6%]
            lg:w-[25%] lg:h-[14%] lg:top-[74%] lg:left-[14%]
            xl:w-[27%] xl:h-[14%] xl:top-[76%] xl:left-[17%]
            
            " />

            {/* leaf group TOP right*/}
            <img src="/leaf1.svg" className="absolute top-[22%] left-[68%] h-[15%] w-[18%]" />
            <img src="/leaft2.svg" className="absolute top-[25%] left-[76%] h-[15%] w-[18%]" />

            <img src="/white_cloud.png" className="absolute w-full h-full top-0 left-0 object-contain pr-5 pl-5" alt="white-cloud"/>

            <img src="/butterfly.svg" className="absolute top-[22%] left-[8%] h-[15%] w-[18%] smooth-transition
            sm:w-[20%] sm:h-[18%] sm:top-[12%] sm:left-[12%]
            md:w-[22%] md:h-[18%] md:top-[12%] md:left-[15%]
            lg:w-[25%] lg:h-[18%] lg:top-[12%] lg:left-[20%]
            xl:w-[27%] xl:h-[18%] xl:top-[12%] xl:left-[22%]
            " />

            <div className="relative grid grid-rows-4 overlay-grid-position 
            top-[36%] left-[24%] h-[37%] w-[53%]

            lg:left-[35%] md:left-[34%] sm:left-[30%]
             sm:w-[40%] md:w-[32%] lg:w-[30%] xl:w-70% place-items-center bg-cyan-400">

            <h2 className="text-h2 text-center align-center font-h2">Your footprint</h2>
            <h2 className="text-h2 text-center align-center font-h2">Your footprint</h2>
            <h2 className="text-h2 text-center align-center font-h2">Your footprint</h2>
            <h2 className="text-h2 text-center align-center font-h2">Your footprint</h2>
            </div>

        </div>

    )
}