import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

import "./index.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-white dark:bg-black duration-100">
        <div>
          <Navbar />
          <div className="relative z-0  pt-6 ">
            <Hero />
            <StarsCanvas starsColor={`#FC4C02`} />
          </div>
        </div>
        <About />
        <div className="relative">
          <StarsCanvas starsColor={`#FC4C02`} />
          <Tech />
        </div>
        <Works />
        <div className="relative z-0">
          <StarsCanvas starsColor={`#FC4C02`} />
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
