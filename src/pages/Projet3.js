import React from 'react';

import Button from "../components/Button";
import Mouse from "../components/Mouse";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Projects from "../components/Projects";

const Projet3 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigation />
        <Logo />
        <Projects projetNumber={2} />
        <Button rigth={"/projet-4"} left={"/projet-1"} />
      </div>
    </main>
  );
};


export default Projet3;