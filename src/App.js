import React from "react";
import Home from "./component/home/Home";
import Contact from "./component/contact/Contact";
import KitchenProjects from "./component/categoryComponent/KitchenProjects";
import WardrobeList from "./component/categoryComponent/WardrobeList";
import Page404 from "./pageNotFound/Page404";
import ProjectList from "./component/projects/ProjectList";
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
            <Route path='*' element={<Page404 />} />
          </Routes>
        </Router>
  );
}

export default App;
