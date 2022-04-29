import React from 'react';

import Button from "../components/Button";
import Mouse from "../components/Mouse";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Projects from "../components/Projects";

const Projet2 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigation />
        <Logo />
        <Projects projetNumber={1} />
        <Button rigth={"/projet-3"} left={"/projet-1"} />
      </div>
    </main>
  );
};


export default Projet2;