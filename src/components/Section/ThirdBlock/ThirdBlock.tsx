import React from 'react'
import Ava from '../../../assets/image/Ellipse 512(1).svg'
import Fon from '../../../assets/image/Bitmap.svg'
import Foto1 from '../../../assets/image/Frame 427320285.svg'
import Foto2 from '../../../assets/image/Frame 427320288.svg'
import Foto3 from '../../../assets/image/Frame 427320289.svg'
import '../../../assets/styles/ThirdBlock.css'
import { Link } from 'react-router-dom'
interface PropsCards {
    children: React.ReactNode;
}

function ThirdBlock({ children }: PropsCards) {
    return (
        <section className="third_blok">
            <Link to="/cards" className="name_link"><h2 className="name_blok"> Everything you want to know in one place.
            </h2></Link>
            <div className="backgroundd">
                <img src={Fon} className="background" />
                <div className="big_card_inf">
                    <div className="card_girl">
                        <img src={Ava} className="avas" />
                        <p className="name_girl"> Pristia Candra</p>
                        <p className="work">Senior Product Designer</p>
                        <div className="about_girl">
                            <div className="about">
                                <li className="maps"> Los Angeles, USA</li>
                                <li className="works"> Fulltime Freelancer</li>
                            </div>
                            <div className="design">
                                <ul className="design_li">
                                    <li className="des">Figma</li>
                                    <li className="des">UI Design</li>
                                    <li className="des">UX Design</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="main_about">
                        <div className="with_form">
                            <div className="inf_about">
                                <h2 className="inf_header"> About Me</h2>
                                <p className="text_my"> Hi, I’m a final year student completing a bachelor’s In information
                                    Technology
                                    in
                                    QUT, with experience. We are the company behind the wildly successful DIY channel
                                    5-Minute
                                    Crafts,
                                    the inspirational and creative channel Bright Side.</p>
                            </div>
                            <div className="portfolio">
                                <h2 className="inf_header"> Portfolio</h2>
                                <div className="photo">
                                    <img src={Foto1} className="imgs" />
                                    <img src={Foto2} className="imgs" />
                                    <img src={Foto3} className="imgs" />
                                </div>
                            </div>
                            <div className="work_ex">
                                <h2 className="inf_header"> Work Experience</h2>
                            </div>
                        </div>
                        <div className="form">
                            <form action="">
                                <label className="form_input_em"> <span className="em">Email</span>
                                    <input type="email" name="name" required />
                                </label>
                                <label className="form_input_tel">
                                    <span className="tel">Phone Number</span>
                                    <input type="phone" name="tel" />
                                </label>
                                <button className="buttRes"><b> Download Resume </b></button>
                                <button className="buttMes"><b> Message</b></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {children}
            {/* <div className="cards" id="information-cards">
                <div className="card">
                    <button className="cardbutt"></button>
                    <h2 className="namecard">Professional Profile</h2>
                    <p className="cardtxt">We know finding the right job is stressful, so we’ve made it simple. It only
                        takes a few minutes. Create a free portfolio on briefolio to show your best self and get
                        discovered by recruiter</p>
                </div>
                <div className="card">
                    <button className="cardbutt"></button>
                    <h2 className="namecard">Best Portfolio</h2>
                    <p className="cardtxt">We know finding the right job is stressful, so we’ve made it simple. It only
                        takes a few minutes. Create a free portfolio on briefolio to show your best self and get
                        discovered by recruiter</p>
                </div>
                <div className="card">
                    <button className="cardbutt"></button>
                    <h2 className="namecard">Powerful Resume</h2>
                    <p className="cardtxt">We know finding the right job is stressful, so we’ve made it simple. It only
                        takes a few minutes. Create a free portfolio on briefolio to show your best self and get
                        discovered by recruiter</p>
                </div>
            </div> */}
        </section>
    );
}
export default ThirdBlock;