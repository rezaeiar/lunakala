"use client"
import Card from '@/app/_components/modules/Card/Card'
import Link from 'next/link'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Discounts() {
    return (
        <div className='mb-4 md:mb-6'>
            <div className="container">
                <div className="border-4 border-secondary rounded-2xl p-3 flex flex-col gap-6">
                    <div className="grid grid-cols-3 bg-secondary py-3 px-4 rounded-md items-center">
                        <div className='text-white text-sm font-bold font-dana cursor-default'>
                            تخفیفات رو از دست نده
                        </div>
                        <h5 className='text-2xl text-white font-morabba font-bold flex justify-center cursor-default'>
                            لونآف
                        </h5>
                        <Link href='/' className="flex items-center gap-0.5 text-white justify-end">
                            <span className='text-sm font-semibold'>
                                مشاهده همه
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                            </svg>
                        </Link>
                    </div>
                    <div className="px-10">
                        <Swiper
                            slidesPerView={'auto'}
                            spaceBetween={80}
                            pagination={{
                                clickable: true,
                            }}
                            className="mySwiper"
                        >
                            <SwiperSlide className='!w-fit'>
                                <Card />
                            </SwiperSlide>
                            <SwiperSlide className='!w-fit'>
                                <Card />
                            </SwiperSlide>
                            <SwiperSlide className='!w-fit'>
                                <Card />
                            </SwiperSlide>
                            <SwiperSlide className='!w-fit'>
                                <Card />
                            </SwiperSlide>
                            <SwiperSlide className='!w-fit'>
                                <Card />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}
