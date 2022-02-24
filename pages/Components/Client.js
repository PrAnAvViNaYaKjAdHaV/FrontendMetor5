import React from "react";
import Image from "next/image";
import emily from '../../images/image-emily.jpg'
import jennie from "../../images/image-jennie.jpg";
import thomas from '../../images/image-thomas.jpg'
import  style from './Client.module.css'
function Client(){
    return(
       <main className={style.main}>
           <h1>CLIENT TESTIMONIALS</h1>
           <div className={style.client}>
                <div className={style.testimonial}>
                    <Image
                    className={style.picture}
                    width="70%"
                    height="70%"
                    src={emily}
                    alt="Emily"
                    />
                    <span>We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</span>
                    <p>Emily R.</p>
                    <p>Marketing Director</p>
                </div>
                <div className={style.testimonial}>
                    <Image
                    className={style.picture}
                    width="70%"
                    height="70%"
                    src={jennie}
                    alt="Jennie Image"
                    />
                    <span>Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.</span>
                    <p>Thomas S.</p>
                    <p>Chief Operating Officer</p>
                </div>
                
                <div className={style.testimonial}>
                    <Image
                    className={style.picture}
                    width="70%"
                    height="70%"
                    src={thomas}
                    alt="thomas"
                    />
                    <span>Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</span>
                    <p>Jennie F.</p>
                    <p>Business Owner</p>
                </div>
        </div>
       </main>
    )
}

export default Client