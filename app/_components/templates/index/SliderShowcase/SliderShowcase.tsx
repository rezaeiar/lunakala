"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import Image from 'next/image';


export default function SliderShowcase() {
    return (
        <div className="mb-6">
            <div className="">
                <div className="new-releases-prev">
                    l
                </div>
                <div className="new-releases-prev">
                    r
                </div>
            </div>
            <Swiper
                cssMode={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
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
            </Swiper>
        </div>
    )
}
