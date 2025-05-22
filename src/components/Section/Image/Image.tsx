import React, { ReactNode } from "react";
import Rectangle2 from '../../../assets/image/Rectangle 2.svg'
import '../../../assets/styles/Image.css'

interface propsFon{
    children: ReactNode;
}
function Image({children}:propsFon) {
    return (
        <>
        <section className="image">
        <div className="swiper">
           <div className="swiper-wrapper">
               <div className="swiper-slide"><img src={Rectangle2}className="first_img"/></div>
               {/* <div className="swiper-slide"><img src={Rectangle2} className="first_img"/></div> */}
           </div>
       </div>
       {children}
       </section>
       </>
    );
}
export default Image;