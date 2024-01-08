import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import '../App.css'
import SwiperCard from "./SwiperCard";
import { slider_1, slider_2 } from "./CardData";
import { Pagination, Navigation } from "swiper/modules";

export default function SwiperSlider() {

    console.log(slider_1)

    return (
        <div className="lg:px-[100px] max-w-[1440px] mx-auto">
            <Swiper
                pagination={{
                    type: "fraction",
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper pt-8 pb-20 lg:pt-0 mb-14 mx-6 lg:mx-0"
            >
                <SwiperSlide className="slider">
                    <h2 className='text-center text-[#0E2368] lg:text-left text-[45px] font-semibold max-w-[380px] mb-14'>
                        Latest Articles
                    </h2>
                    <div className="lg:grid grid-cols-3 gap-10">
                        {slider_1.map((card) => (
                            <SwiperCard
                                key={card.id}
                                img={card.img}
                                title={card.title}
                                desc={card.desc}
                            />
                        ))}
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slider">
                    <h2 className='text-center text-[#0E2368] lg:text-left text-[45px] font-semibold max-w-[380px] mb-14'>
                        Latest Articles
                    </h2>
                    <div className="lg:grid grid-cols-3 gap-10">
                        {slider_2.map((card) => (
                            <SwiperCard
                                key={card.id}
                                img={card.img}
                                title={card.title}
                                desc={card.desc}
                            />
                        ))}
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
}
