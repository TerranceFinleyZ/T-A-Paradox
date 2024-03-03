'use client';

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import React from 'react'
import Image from 'next/image';
import { Test } from '@/constants';

const Reviews = () => {
  return (
    <section>
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
      <h2 className='text-white text-center text-[55px] font-semibold mb-12'>
          Some <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7614d2] via-orange-400 to-[#7614d2]"> Reviews </span>
          </h2>
      </div>
      <Swiper slidesPerView={1} breakpoints= {{
        640: { slidesPerView: 2 },
        1400: { slidesPerView: 3},
      }}>
            {Test.map((person, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="text-white">Card</div>
                </SwiperSlide>
              )
            })}
          </Swiper>
    </section>
  )
};

export default Reviews;
