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
                        <div className="pt-6 flex flex-col gap-4">
                            <h1 className='text-gray-700 font-dana text-xs font-semibold'>
                                تبلت سامسونگ مدل Galaxy Tab S8 5G SM-X706B ظرفیت 128 گیگابایت رم 8 گیگابایت
                            </h1>
                            <div className="flex items-center gap-2 text-gray-700 font-dana text-xs font-semibold">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-4">
                                    <path d="M2.879 7.121A3 3 0 0 0 7.5 6.66a2.997 2.997 0 0 0 2.5 1.34 2.997 2.997 0 0 0 2.5-1.34 3 3 0 1 0 4.622-3.78l-.293-.293A2 2 0 0 0 15.415 2H4.585a2 2 0 0 0-1.414.586l-.292.292a3 3 0 0 0 0 4.243ZM3 9.032a4.507 4.507 0 0 0 4.5-.29A4.48 4.48 0 0 0 10 9.5a4.48 4.48 0 0 0 2.5-.758 4.507 4.507 0 0 0 4.5.29V16.5h.25a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75v-3.5a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0-.75.75v3.5a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1 0-1.5H3V9.032Z" />
                                </svg>
                                <span className='pt-1'>
                                    آتیان فروش
                                </span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-700 font-dana text-xs font-semibold">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-4">
                                    <path fillRule="evenodd" d="M2 3a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H2Zm0 4.5h16l-.811 7.71a2 2 0 0 1-1.99 1.79H4.802a2 2 0 0 1-1.99-1.79L2 7.5ZM10 9a.75.75 0 0 1 .75.75v2.546l.943-1.048a.75.75 0 1 1 1.114 1.004l-2.25 2.5a.75.75 0 0 1-1.114 0l-2.25-2.5a.75.75 0 1 1 1.114-1.004l.943 1.048V9.75A.75.75 0 0 1 10 9Z" clipRule="evenodd" />
                                </svg>
                                <span className='pt-1 text-secondary'>
                                    موجود در انبار لوناکالا
                                </span>
                            </div>
                            <div className="flex">
                                <div className="px-2 py-1 bg-gray-50 border border-tertiary rounded-md text-xs flex items-center gap-1 font-dana text-gray-700">
                                    <div className="h-4 w-4 bg-gray-400 rounded-sm"></div>
                                    <span>
                                    نقره ای
                                    </span>
                                </div>
                            </div>
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
