import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Card() {
    return (
        <div className='flex flex-col w-52 items-center gap-4 pt-8 relative'>
            <div className="absolute top-0 flex justify-between items-center w-full text-sm font-bold text-secondary font-dana pb-2 before:h-1 before:rounded-full before:w-full before:bg-secondary before:bottom-0 before:absolute">
                <span>
                    فروش ویژه
                </span>
                <span>
                    14:48:13
                </span>
            </div>
            <Link href={''} className="w-44">
                <Image
                    src={'/images/product/p2.webp'}
                    alt='festival-banner'
                    width={1000}
                    height={1000}
                    className='hidden md:block w-full object-cover'
                />
            </Link>
            <div className="flex flex-col gap-4">
                <Link href={''} className='line-clamp-2 font-dana text-gray-800'>
                    گوشی موبایل سامسونگ Galaxy S24 Ultra 5G ظرفیت 1 ترابایت رم
                </Link>
                <div className="text-gray-900 font-bold font-dana text-end hidden">
                    <span className='text-base'>
                        5,300,000
                    </span>
                    <span className='text-xs'>
                        تومان
                    </span>
                </div>
                <div className="flex justify-between">
                    <div className="p-1 pt-1.5 rounded-sm bg-secondary font-dana text-white text-xs h-4 flex items-center mt-1.5">
                        7%
                    </div>
                    <div className="flex flex-col items-end">
                        <div className="text-secondary font-dana font-bold">
                            <span className='text-base'>
                                5,300,000
                            </span>
                            <span className='text-xs'>
                                تومان
                            </span>
                        </div>
                        <div className="text-gray-500 font-dana font-bold">
                            <span className='text-sm line-through'>
                                5,300,000
                            </span>
                            <span className='text-xs'>
                                تومان
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
