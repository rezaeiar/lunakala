"use client"
import Card from '@/app/_components/modules/Card/Card'
import Link from 'next/link'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

export default function CardBox() {
    return (
        <div>
            <div className="container">
                <div className="flex flex-col border border-gray-200 rounded-2xl p-8 gap-8">
                    <div className="flex justify-between items-center">
                        <h3 className='text-xl font-morabba'>
                            گوشی بر اساس قیمت
                        </h3>
                        <Link href={''} className='font-dana text-primary font-semibold flex gap-1 items-center'>
                            مشاهده همه
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                            </svg>
                        </Link>
                    </div>
                    <div className="">
                        <Swiper
                            slidesPerView={'auto'}
                            // spaceBetween={80}
                            pagination={{
                                clickable: true,
                            }}
                            className="mySwiper"
                        >
                            <SwiperSlide className='!w-fit px-12 relative'>
                                <Card />
                            </SwiperSlide>
                            <SwiperSlide className='!w-fit px-12 relative'>
                                <Card />
                            </SwiperSlide>
                            <SwiperSlide className='!w-fit px-12 relative'>
                                <Card />
                            </SwiperSlide>
                            <SwiperSlide className='!w-fit px-12 relative'>
                                <Card />
                            </SwiperSlide>
                            <SwiperSlide className='!w-fit px-12 relative'>
                                <Card />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}
