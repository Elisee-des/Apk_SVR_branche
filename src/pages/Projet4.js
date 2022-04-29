import React from 'react';

import Button from "../components/Button";
import Mouse from "../components/Mouse";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Projects from "../components/Projects";

const Projet4 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigation />
        <Logo />
        <Projects projetNumber={3} />
        <Button rigth={"/contact"} left={"/projet-4"} />
      </div>
    </main>
  );
};

export default Projet4;