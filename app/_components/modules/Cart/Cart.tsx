import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Cart() {
    return (
        <div className='absolute flex flex-col justify-between top-10 left-0 bg-white rounded-md shadow-2xl border border-gray-50'>
            <div className="flex justify-between items-center w-96 bg-gray-50 m-4 rounded p-3">
                <div className="flex items-center gap-1 font-dana">
                    <h5 className='text-gray-700 font-semibold text-xs'>
                        سبد خرید شما
                    </h5>
                    <span className='text-gray-400 font-semibold text-[10px]'>
                        2 عدد کالا
                    </span>
                </div>
                <div>
                    <Link href='/' className="flex items-center gap-0.5 text-primary justify-end">
                        <span className='text-xs font-semibold'>
                            مشاهده همه
                        </span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                            <path fillRule="evenodd" d="M9.78 4.22a.75.75 0 0 1 0 1.06L7.06 8l2.72 2.72a.75.75 0 1 1-1.06 1.06L5.47 8.53a.75.75 0 0 1 0-1.06l3.25-3.25a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                        </svg>
                    </Link>
                </div>
            </div>
            <div className="h-96 flex flex-col mx-4">
                <div className="py-4 flex flex-col">
                    <div className="flex justify-between gap-8">
                        <div className="">
                            <h1 className='text-gray-700 font-dana text-xs font-semibold'>
                                تبلت سامسونگ مدل Galaxy Tab S8 5G SM-X706B ظرفیت 128 گیگابایت رم 8 گیگابایت
                            </h1>
                        </div>
                        <div className="w-52">
                            <Image
                                src={'/images/product/p1.webp'}
                                alt='product'
                                width={500}
                                height={200}
                                className=''
                            />
                        </div>
                    </div>
                    <div className=""></div>
                </div>
            </div>
            <div className="border-t border-gray-100 p-3">
                <div className="bg-grass h-12 rounded-lg flex items-center justify-center gap-4 text-white font-dana font-bold p-4">
                    <span>
                        ورود و ثبت سفارش
                    </span>
                    <span className='h-full w-px bg-white'></span>
                    <span>
                        39,650,000
                        تومان
                    </span>
                </div>
            </div>
        </div>
    )
}
