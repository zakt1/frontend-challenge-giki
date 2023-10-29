import React from 'react';
import './index.css'
import { UserFootprintCloud } from './pages/UserFootprintCloud';
import { UserTargetMetrics } from './pages/UserTargetMetrics';
function App() {
  return (
    <div className="grid grid-rows-2 h-screen bg-contrast">
      <div className="relative  pt-5 pb-5" >
      <UserFootprintCloud currentFootprint={7565}  />
      </div>
      <div className="p4">
        <UserTargetMetrics endOfYrTarget={5855} targetYear={2030} longTermTarget={2500} currentFootprint={7565} />
      </div>
    </div>
  );
}

export default App;
