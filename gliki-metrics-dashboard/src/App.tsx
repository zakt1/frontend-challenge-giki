import React from 'react';
import logo from './logo.svg';
import './index.css'
import { UserCarbonFootprint } from './pages/UserFootprintCloud';
function App() {
  return (
    <div className="grid grid-rows-2 h-screen bg-slate-600">
      <div className="relative bg-emerald-500 pt-5 pb-5" >
      <UserCarbonFootprint userFootprint={7565}  />
      </div>
      <div className="bg-orange-200 p4">

      </div>
    </div>
  );
}

export default App;
