import { useState } from "react";

import HeroSection from "./components/HeroSection";
import InfoSection from "./components/InfoSection";
import AboutAbai from "./components/AboutAbai";
import Gallery from "./components/Gallery";
import InvitationText from "./components/InvitationText";
import FinalCTA from "./components/FinalCta";

import FlyingBooks from "./components/FlyingBooks";
import BackgroundMusic from "./components/BackgroundMusic";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <div className="page-root">
      <FlyingBooks />
      <BackgroundMusic />

      <main className="container">
        <HeroSection />
        <InfoSection />
        <AboutAbai />
        <Gallery />
        <InvitationText />

        <FinalCTA />
      </main>

    
    </div>
  );
}
