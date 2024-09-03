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
            <Route path='*' element={<Page404 />} />
          </Routes>
        </Router>
  );
}

export default App;
