import React from "react";
import Button from "../components/Button";
import Mouse from "../components/Mouse";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const Projet1 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigation />
        <Logo />
        <Button rigth={"/projet-2"} left={"/"} />
      </div>
    </main>
  );
};

export default Projet1;
