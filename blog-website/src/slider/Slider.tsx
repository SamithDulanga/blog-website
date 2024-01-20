import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './Slider.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

interface SliderProps {
    blogs: any[]
}

export function Slider({blogs}: SliderProps) {
    return (
        <div className="border-b-2">
            <div className="text-center text-7xl font-bold mt-3">Top Stories</div>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}

                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >


                {
                    blogs.slice(0,3).map((blog)=>(
                        <SwiperSlide className="shadow-2xl">
                            <img src={blog.image} />
                            <h1 className="text-xl text-center font-semibold">{blog.title}</h1>
                            <h1 className="text-2xl text-center font-bold">#{blog.id}</h1>
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </div>
    );
}