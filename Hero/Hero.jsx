import { Swiper, SwiperSlide } from "swiper/react";

import {
    Autoplay,
    Pagination,
    EffectFade,
    Navigation,
    Keyboard,
    Mousewheel,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import "./Hero.css";
import slides from "./slides";
import Categories from "./Categories/Categories";

function Hero() {
    return (
        <>
            <section className="hero">

                <Swiper
                    modules={[
                        Autoplay,
                        Pagination,
                        EffectFade,
                        Navigation,
                        Keyboard,
                        Mousewheel,
                    ]}
                    effect="fade"
                    loop={true}
                    speed={1200}
                    autoplay={{
                        delay: 4500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    keyboard={{
                        enabled: true,
                    }}
                    mousewheel={false}
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className="hero-slide"
                                style={{
                                    backgroundImage: `url(${slide.image})`,
                                }}
                            >
                                <div className="overlay"></div>

                                <div className="hero-content">

                                    <span className="hero-subtitle">
                                        {slide.subtitle}
                                    </span>

                                    <h1 className="hero-title">
                                        {slide.title}
                                    </h1>

                                    <p className="hero-text">
                                        {slide.text}
                                    </p>

                                    <button className="hero-btn">
                                        SHOP NOW
                                        <span>→</span>
                                    </button>

                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </section>

            <Categories />
        </>
    );
}

export default Hero;