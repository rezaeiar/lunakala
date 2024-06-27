import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Card() {
    return (
        <>
            <div className="absolute left-0 h-full bg-gray-200 w-px"></div>
            <div className='flex flex-col w-56 items-center gap-4 pt-8 relative mx-10'>
                <div className="absolute top-0 flex justify-between items-center w-full text-sm font-bold text-danger font-dana pb-2 before:h-1 before:rounded-full before:w-full before:bg-danger before:bottom-0 before:absolute">
                    <span>
                        فروش ویژه
                    </span>
                    <span>
                        14:48:13
                    </span>
                </div>
                <Link href={''} className="w-36 md:w-48">
                    <Image
                        src={'/images/product/p2.webp'}
                        alt='festival-banner'
                        width={1000}
                        height={1000}
                        className='block w-full object-cover'
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
                        <div className="p-1 pt-1.5 rounded-sm bg-danger font-dana text-white text-xs h-4 flex items-center mt-1.5">
                            7%
                        </div>
                        <div className="flex flex-col items-end">
                            <div className="text-danger font-dana font-bold">
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
        </>
    )
}
