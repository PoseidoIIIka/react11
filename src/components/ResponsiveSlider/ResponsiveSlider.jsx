import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import s from './ResponsiveSlider.module.css';

function ResponsiveSlider() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className={s.mg50}>
            <div className="slider-container">
                <Slider {...settings}>
                    <div className={s.slide}>
                        <img src="https://www.bmw.tm/content/dam/bmw/common/all-models/m-series/series-overview/bmw-m-series-seo-overview-ms-04.jpg" alt="" />
                    </div>
                    <div className={s.slide}>
                        <img src="src/assets/b0ce6840700b7ee93dc7e31f8602e27fb6b1946a.jpg" alt="" />
                    </div>
                    <div className={s.slide}>
                        <img src="src/assets/5f92fff9c742e80001d7a1f9.jpeg" alt="" />
                    </div>
                    <div className={s.slide}>
                        <img src="src/assets/3ff05de024ae49f7b8e296e506f8abda.jpg" alt="" />
                    </div>
                    <div className={s.slide}>
                        <img src="src/assets/6014060c8d2b4a0001a8b3fe.png" alt="" />
                    </div>
                    <div className={s.slide}>
                        <img src="src/assets/Article_174737_860_575.jpg" alt="" />
                    </div>
                    <div className={s.slide}>
                        <img src="src/assets/bmw_x2_764839.webp" alt="" />
                    </div>
                    <div className={s.slide}>
                        <img src="src/assets/bmw-i7-m70-xdriv_01.jpg" alt="" />
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default ResponsiveSlider;
