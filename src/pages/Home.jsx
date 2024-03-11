// Home.js
import React from 'react';
import WaterCard from '../components/Homepage/WaterCard';
import ProteinCard from '../components/Homepage/ProteinCard';
import CarbohydratesCard from '../components/Homepage/CarbohydratesCard';
import FatsCard from '../components/Homepage/FatsCard';
import FiberCard from '../components/Homepage/FiberCard';
import MineralsCard from '../components/Homepage/MineralsCard';
import VitaminsCard from '../components/Homepage/VitaminsCard';

function Home() {
  return (
    <div>
     
     <ProteinCard/>
     <CarbohydratesCard/>
     <FatsCard/>
     <FiberCard/>
     <VitaminsCard/>
     <MineralsCard/>
     <WaterCard/>
     
    </div>
  );
}

export default Home;
