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
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="">
                        <Image
                            src={'/images/banner/b1.webp'}
                            alt='festival-banner'
                            width={1000}
                            height={1000}
                            className='w-full object-cover'
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="">
                        <Image
                            src={'/images/banner/b1.webp'}
                            alt='festival-banner'
                            width={1000}
                            height={1000}
                            className='w-full object-cover'
                        />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
