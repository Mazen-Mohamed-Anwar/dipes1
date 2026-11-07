import React from 'react'

import { Route,Routes } from 'react-router-dom'
import Developers from './pages/Developers/Developers'
import Contactus from './pages/Contactus/Contactus'
import Home from './pages/Home/Home'
import Navbar from './components/Navbar';
import Layout from './Layout/Layout';
import Units from './pages/Units/Units'
import Zones from './pages/Zones/Zones'
import ZoneDetails from './pages/Zones/ZoneDetails'
import ZD2 from './pages/Zones/ZD2'
import Card from './Layout/Card'
import RDunits from './pages/Units/RDunits'
import DevProject from './pages/Developers/DevProject'

function App() {
  return (
  <>
 
<Routes> 
<Route element={<Layout/>}>
<Route path='/' element={<Home/>}/>
<Route path='/card' element={<Card/>}/>
<Route path="/units/:id" element={<RDunits/>}/>
<Route path='/units' element={<Units />}/>
<Route path='/zones' element={<Zones />}/>
<Route path='/zones/:id' element={<ZoneDetails/>}/>
<Route path='/zd2/:id' element={<ZD2/>}/>
<Route path='/developers' element={<Developers />}/>
<Route path='/devProject/:id' element={<DevProject/>}/>
<Route path='/contactus' element={<Contactus/>}/>
</Route>
</Routes>
</>
  );
}

export default App

