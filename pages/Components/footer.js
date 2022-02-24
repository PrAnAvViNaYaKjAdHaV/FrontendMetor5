import React from "react";
import Image from "next/image";
import bottel from "../../images/desktop/image-gallery-milkbottles.jpg";
import orange from "../../images/desktop/image-gallery-orange.jpg";
import cone from "../../images/desktop/image-gallery-cone.jpg"
import sugarcube from "../../images/desktop/image-gallery-sugarcubes.jpg"
import Instagram from "../../images/icon-instagram.svg"
import Facebook from "../../images/icon-facebook.svg"
import Twitter from "../../images/icon-twitter.svg"
import Pinterest from "../../images/icon-pinterest.svg"
import style from "./footer.module.css"
function footer(){
    return (
       <main>
         <div className={style.container}>
            <Image
            src={bottel}
            boject-objectFit="content"
            />
            <Image
            src={orange}
            />
            <Image
            src={cone}
            />
            <Image
            src={sugarcube}
            />
         </div>
         <div id="Footer" className={style.footer}>
             <h1>SUNNYSIDE</h1>
             <div className={style.service}>
                 <p>About</p>
                 <p>Services</p>
                 <p>Projects</p>
             </div>
            <div className={style.socialMedia}>
            <Facebook/>
            <Instagram/>
            <Twitter/>
            <Pinterest/>
           </div>
         </div>
       </main>
    )
}

export default footer;