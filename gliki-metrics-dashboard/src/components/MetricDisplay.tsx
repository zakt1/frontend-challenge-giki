import React from 'react';

interface MetricDisplayProps {
  number: number | string; 
  unit?: string; 
  className?: string; 
}

const MetricDisplay: React.FC<MetricDisplayProps> = ({ number, unit, className }) => {

  const combinedClassName = `m-0 text-4xl text-center md:text-5xl lg:text-6xl xl:text-8xl ${className}`;

  return (
    <div className="flex-grow flex text-primary items-end justify-center">
      <h2 className={combinedClassName}>{number}</h2>
      {unit && <p className="ml-1 ">{unit}</p>} {/* all metrics need a unit to render */}
    </div>
  );
};

export default MetricDisplay;