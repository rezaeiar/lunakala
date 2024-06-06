"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import Image from 'next/image';

export default function SliderShowcase() {
    return (
        <div className="mb-6 relative select-none group">
            <div className="absolute bottom-10 right-10 invisible opacity-0 flex transition-all gap-2 items-center z-20 group-hover:visible group-hover:opacity-100">
                <div className="new-releases-prev border-gray-400 bg-gray-100 rounded-full h-10 w-10 flex items-center justify-center cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-gray-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </div>
                <div className="new-releases-next border-gray-400 bg-gray-100 rounded-full h-10 w-10 flex items-center justify-center cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-gray-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                </div>
            </div>
            <div id="showcase-pagination" className='z-20 absolute bottom-0 w-full h-10 flex items-center gap-2 justify-center'></div>
            <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    el: "#showcase-pagination",
                    type: "bullets",
                    bulletClass: "h-1.5 w-1.5 bg-gray-900/50 rounded-full block cursor-pointer transition-all",
                    bulletActiveClass: "!bg-white w-3",
                    clickable: true,
                }}
                loop={true}
                effect='fade'
                className="mySwiper"
                navigation={{
                    prevEl: '.new-releases-prev',
                    nextEl: '.new-releases-next',
                }}
            >
                <SwiperSlide>
                    <div className="">
                        <Image
                            src={'/images/banner/b2.webp'}
                            alt='festival-banner'
                            width={5000}
                            height={5000}
                            className='w-full h-96 object-cover'
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="">
                        <Image
                            src={'/images/banner/b1.webp'}
                            alt='festival-banner'
                            width={5000}
                            height={5000}
                            className='w-full h-96 object-cover'
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="">
                        <Image
                            src={'/images/banner/b2.webp'}
                            alt='festival-banner'
                            width={5000}
                            height={5000}
                            className='w-full h-96 object-cover'
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="">
                        <Image
                            src={'/images/banner/b1.webp'}
                            alt='festival-banner'
                            width={5000}
                            height={5000}
                            className='w-full h-96 object-cover'
                        />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
