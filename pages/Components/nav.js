import React, { useState } from "react";
import Link from "next/link";
import Arrawo from "../../images/icon-arrow-down.svg";
import Menue from "../../images/icon-hamburger.svg";
import NavCss from "../Components/nav.module.css";
import Model from "./Model";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  function click(){
      if(isOpen){
         setIsOpen(false);
      }else{
          setIsOpen(true);
      }
  }
  return (
    <div className={NavCss.container}>
      <nav className={NavCss.Topbar}>
        <h1>Sunnyside</h1>
        <div className={NavCss.Navigation}>
          <p>Abount</p>
          <p>Service</p>
          <p>Project</p>
          <p>
            <Link href="#Footer">
              <p className={NavCss.Button}>contact</p>
            </Link>
          </p>
          <div className={NavCss.menue}>
            <Menue onClick={click} />
            <Model open={isOpen}>
              <p>Abount</p>
              <p>Service</p>
              <p>Project</p>
              <p>
                <Link href="#Footer">
                  <p className={NavCss.Button}>contact</p>
                </Link>
              </p>
            </Model>
          </div>
        </div>
      </nav>
      <div className={NavCss.Content}>
        <h1>WE ARE CREATIVES</h1>
        <Arrawo />
      </div>
    </div>
  );
}

export default Nav;
