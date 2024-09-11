import React from "react";
import ImageSlider from "../ImageSlider";
import Header from "../header/Header";
import Projects from "../projects/Projects";
import Footer from "../footer/Footer";
import About from "../about/About";
import News from "../newaLetter/News";
import Furniture from '../wrapper/Furniture'
import Categories from "../categoryComponent/Categories";
// import WelcomeModel from "../../welcomeScreen/WelcomeModel";

export const Home = () => {
  // const [showWelcome, setShowWelcome] = useState(true);

  // const closeWelcomeModal = () => {
  //   setShowWelcome(false);
  // };
  return (
    <div>
      {/* {showWelcome && <WelcomeModel closeModal={closeWelcomeModal} />} */}
      <Header />
      <ImageSlider />
      <Categories />
      <Furniture />
      <Projects />
      <About />
      <News />
      <Footer />
    </div>
  );
};
export default Home;
