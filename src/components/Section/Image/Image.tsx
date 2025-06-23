import { JSX } from "react";
import Rectangle2 from '../../../assets/image/Rectangle 2.svg'
import '../../../assets/styles/Image.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/swiper-bundle.css';
import PeopleOffice from '../../../assets/image/0x0.webp'
// import PeopleOffice1 from '../../../assets/image/slider.webp'
interface PropsFon {
    children: JSX.Element;
}

function Image({ children }: PropsFon) {
    return (
        <>
            <section className="image">
                <Swiper
                    slidesPerView={1}
                    loop={true}
                    rewind={false}
                    modules={[
                        Autoplay
                    ]}
                    autoplay={{
                        delay: 300,
                        disableOnInteraction: false,
                    }}
                >
                    <SwiperSlide><img src={Rectangle2} className="first_img" /></SwiperSlide>
                    <SwiperSlide><img src={PeopleOffice} className="first_img" /></SwiperSlide>
                </Swiper>
                {children}
            </section>
        </>
    );
}
export default Image;