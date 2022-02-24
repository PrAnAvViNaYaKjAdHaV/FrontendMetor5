import React from "react";
import Image from 'next/image'
import Style from './main.module.css'
import egg from '../../images/desktop/image-transform.jpg'
import cup from '../../images/desktop/image-stand-out.jpg'
function Main(){
    return(
         <main className={Style.main}>
            <div className={Style.Info}>
                <h1>Transform your brand</h1>
                <p>We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</p>
                <p>Learn more</p>
            </div>
            <div className={Style.images}>
               <Image 
               src={egg} 
               alt="Image of Egg"
               layout="fill"
               objectFit="cover"
               />
            </div>
            <div className={Style.images}>
               <Image 
               src={cup} 
               alt ="Cup image"
               layout="fill"
               objectFit="cover"
               />
            </div>
            <div className={Style.Info}>
                <h1>Stand out to the right audience</h1>
                <p>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. </p>
                <p>Learn more</p>
            </div>
            <div className={Style.InfobcImage1}>
                <h1>Graphic design</h1>
                <p>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</p>
            </div>
            <div className={Style.InfobcImage2}>
                <h1>Photography</h1>
                <p>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.
</p>
            </div>
         </main>
    )
}

export default Main;