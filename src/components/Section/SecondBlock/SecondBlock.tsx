import React from "react";
import Ava from '../../../assets/image/Ellipse 512.svg'
import Marks from '../../../assets/image/Mask.svg'
import '../../../assets/styles/SecondBlock.css'
function SecondBlock(){
    return (
        <section className="second_block">
            <img src={Ava} className="ava"/>
            <img src={Marks} className=" marks"/>
            <h2 className="name_blok1"> Creating an Online Presence is Hard. Jobly Makes it Easy for Recruiters to See you
            </h2>
            <p className="text_blok">Zhao Cui</p>
            <p className="text_min"> Founder at Jobly.co</p>
        </section>
    );
}
export default SecondBlock;