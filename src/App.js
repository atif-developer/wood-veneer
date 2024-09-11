import React from "react";
import Home from "./component/home/Home";
import Contact from "./component/contact/Contact";
import KitchenProjects from "./component/categoryComponent/KitchenProjects";
import WardrobeList from "./component/categoryComponent/WardrobeList";
import Page404 from "./pageNotFound/Page404";
import ProjectList from "./component/projects/ProjectList";
import Kitchen from "./component/categoryComponent/KitchenComponent/Kitchen";
import Sofa from "./component/categoryComponent/Sofa";
import Corian from "./component/categoryComponent/Corian";
import BedRoom from "./component/categoryComponent/BedRoom";
import Doors from "./component/categoryComponent/Doors";
import WoodVenner from "./component/categoryComponent/WoodVenner";
import MediaWall from "./component/categoryComponent/MediaWall";
// projects
import DhaDefenceRayaLahore from "./component/projects/pages/DhaDefenceRayaLahore";
import DhaDefenceRaya2017 from "./component/projects/pages/DhaDefenceRaya2017";
import DhaPhase8Lahore from "./component/projects/pages/DhaPhase8Lahore";
import DhaIslamabadPhaseV from "./component/projects/pages/DhaIslamabadPhaseV";
import DhaPhase6 from "./component/projects/pages/DhaPhase6";
import DhaEmeLahore from "./component/projects/pages/DhaEmeLahore";
import OAskaro10Lahore2018 from "./component/projects/pages/OAskaro10Lahore2018";
import Askari10Lahore from "./component/projects/pages/Askari10Lahore";
import BahriaTownLahore from "./component/projects/pages/BahriaTownLahore";
import BahriaTownLahoreKashif from "./component/projects/pages/BahriaTownLahoreKashif";
import ApartmentShadmanCanalBankRoad from "./component/projects/pages/ApartmentShadmanCanalBankRoad";
import PCHOTELLAHORE from "./component/projects/pages/PCHOTELLAHORE";
import PUNJABUNIVERSITY from "./component/projects/pages/PUNJABUNIVERSITY"
import MULTANTERNATIONALAIRPORT from "./component/projects/pages/MULTANTERNATIONALAIRPORT"
import JOJOCOMPANYGUJRANWALA from "./component/projects/pages/JOJOCOMPANYGUJRANWALA"
// kitchen pages c
import Onekanal from "./component/categoryComponent/KitchenProject/1-Kanal-house/Onekanal";
import TwoKanal from "./component/categoryComponent/KitchenProject/2-kanal-house/Twokanal";
import FiveKanal from "./component/categoryComponent/KitchenProject/5-kanal-house/Fivekanal";
import TenKanal from "./component/categoryComponent/KitchenProject/10-kanal-house/Tenkanal";
import Claccac from "./component/categoryComponent/KitchenProject/claccac-kitchen/Claccac";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
        <Router>
          <Routes>
            <Route path='/' element={<Home />} ></Route>
            <Route path='/contact' element={<Contact />} ></Route>
            <Route path='/KitchenProjects' element={<KitchenProjects />} ></Route>
            <Route path='/WardrobeList' element={<WardrobeList />} ></Route>
            <Route path='/ProjectList' element={<ProjectList />} ></Route>
            <Route path='/Kitchen' element={<Kitchen />} ></Route>
            <Route path='/Sofa' element={<Sofa />} ></Route>
            <Route path='/Corian' element={<Corian />} ></Route>
            <Route path='/BedRoom' element={<BedRoom />} ></Route>
            <Route path='/Doors' element={<Doors />} ></Route>
            <Route path='/WoodVenner' element={<WoodVenner />} ></Route>
            <Route path='/MediaWall' element={<MediaWall />} ></Route>
            <Route path='/1-DhaDefenceRayaLahore' element={<DhaDefenceRayaLahore />} ></Route>
            <Route path='/2-DhaDefenceRaya2017' element={<DhaDefenceRaya2017 />} ></Route>
            <Route path='/3-DhaPhase8Lahore' element={<DhaPhase8Lahore />} ></Route>
            <Route path='/4-DhaIslamabadPhaseV' element={<DhaIslamabadPhaseV />} ></Route>
            <Route path='/5-DhaPhase6' element={<DhaPhase6 />} ></Route>
            <Route path='/6-DhaEmeLahore' element={<DhaEmeLahore />} ></Route>
            <Route path='/7-OAskaro10Lahore2018' element={<OAskaro10Lahore2018 />} ></Route>
            <Route path='/8-Askari10Lahore' element={<Askari10Lahore />} ></Route>
            <Route path='/9-BahriaTownLahore' element={<BahriaTownLahore />} ></Route>
            <Route path='/10-BahriaTownLahoreKashif' element={<BahriaTownLahoreKashif />} ></Route>
            <Route path='/11-ApartmentShadmanCanalBankRoad' element={<ApartmentShadmanCanalBankRoad />} ></Route>
            <Route path='/12-PcHotelLahore' element={<PCHOTELLAHORE />} ></Route>
            <Route path='/13-PunjabUniversity' element={<PUNJABUNIVERSITY />} ></Route>
            <Route path='/14-MultanInterNationalAirport' element={<MULTANTERNATIONALAIRPORT />} ></Route>
            <Route path='/15-JojoCompanyGujranwala' element={<JOJOCOMPANYGUJRANWALA />} ></Route>
            <Route path='/OnekanalList' element={<Onekanal />} ></Route>
            <Route path='/TwoKanalList' element={<TwoKanal />} ></Route>
            <Route path='/FiveKanalList' element={<FiveKanal />} ></Route>
            <Route path='/TenKanalList' element={<TenKanal />} ></Route>
            <Route path='/ClaccacList' element={<Claccac />} ></Route>
            <Route path='*' element={<Page404 />} />
          </Routes>
        </Router>
  );
}

export default App;
