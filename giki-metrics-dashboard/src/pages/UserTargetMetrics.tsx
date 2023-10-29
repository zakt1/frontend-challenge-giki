import { LabelTextDisplay } from "../components/LabelTextDisplay"
import MetricDisplay from "../components/MetricDisplay"

interface IUserTargetMetricsProps {
  endOfYrTarget: number,
  targetYear: number
  longTermTarget: number,
  currentFootprint: number

}
const carbonEmissionsLabelText = <LabelTextDisplay text={<> of carbon emissions</>} defaultStyle="text-center"/>

export const UserTargetMetrics = ({endOfYrTarget, longTermTarget, targetYear, currentFootprint}: IUserTargetMetricsProps)=>{

    const remainingFootprint = (currentFootprint - endOfYrTarget).toLocaleString()
    const formattedTarget = endOfYrTarget.toLocaleString()
    const formattedLongTermTarget = longTermTarget.toLocaleString()
  return (

        
<section className="flex flex-wrap justify-center pt-10">
  {/* First flexbox row */}
  <div className="w-1/2 sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-1/4 2xl:w-1/4 p-2 pb-0 flex flex-col h-[20%]">
    <div className=" h-full flex flex-col"> 
      {/* flxebox for the 'End of yr target' metric */}
      <div className="flex-1 flex  p-2 pb-0 text-center items-center text-secondary justify-center">
    <LabelTextDisplay text={<> End of <br/> year  target </>} defaultStyle="text-center"/>

      </div>
      <div className="flex-1 flex  items-center  p-2"><MetricDisplay number={formattedTarget} unit="kg"/></div>
      <div className="flex-1 text-primary  p-2">{carbonEmissionsLabelText}</div>
    </div>
  </div>
  
  <div className="w-1/2 sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-1/4 2xl:w-1/4 p-2 pb-0 flex flex-col h-[20%]">
    <div className=" h-full flex flex-col"> 
      <div className="flex-1 flex  p-2 pb-0 items-center justify-center">

      <LabelTextDisplay text={<> Left to cut <br /> this year</>} defaultStyle="text-center text-secondary" />
      </div>      <div className="flex-1 flex items-center  p-2"><MetricDisplay number={remainingFootprint} unit="kg" /></div>
      <div className="flex-1 text-primary  p-2">{carbonEmissionsLabelText}</div>
    </div>
  </div>
  
  {/* 2nd flexbox row  */}
  <div className="w-full p-2 pt-0">
    <div className=" h-24 items-center justify-center  flex">
      <div className=" h-2/3  text-primary bg-background text-xl mt-2 xl:mt-0 py-2 px-8 rounded-full font-body inline-flex items-center sm:text-2xl  hover: focus:outline-none focus:shadow-outline">
      Your {targetYear} target is {formattedLongTermTarget} kg
    </div>
    </div>
  </div>
</section>


    )
}