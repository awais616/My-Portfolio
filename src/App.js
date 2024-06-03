import React from "react";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Features from "./components/features/Features";
import Resume from "./components/resume/Resume";
import Contact from "./components/contact/Contact";
import Footerbottom from "./components/footer/Footerbottom";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-gray-400 px-[50px]">
      <div className=" max-w-screen-xl mx-auto ">
          <Navbar />
          <Banner />
          <Features />
          <Resume />
          <Contact />
          <Footerbottom />


      </div>
    </div>
  );
}

export default App;
