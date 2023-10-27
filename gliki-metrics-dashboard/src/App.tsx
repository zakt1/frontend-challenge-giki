import React from 'react';
import logo from './logo.svg';
import './index.css'
import { UserCarbonFootprint } from './pages/DashboardPage';

function App() {
  return (
    <div className="grid grid-rows-2 h-screen bg-slate-600">
      <div className="relative bg-emerald-500 pt-5 pb-5" >
      <UserCarbonFootprint userFootprint={7565}  />
      </div>
      <div className="bg-orange-200 p4">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur non quidem doloremque facilis cum perspiciatis, porro deleniti magnam dolorem asperiores adipisci quis in eligendi commodi doloribus similique ipsam, maiores beatae?</p>
      </div>
    </div>
  );
}

export default App;
