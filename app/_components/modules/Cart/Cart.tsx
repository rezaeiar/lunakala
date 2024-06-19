import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Cart() {
    return (
        <div className='absolute flex flex-col justify-between top-10 left-0 bg-white rounded-md shadow-3xl border border-gray-50 opacity-0 invisible transition-all group-hover:opacity-100 group-hover:visible'>
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
            <div className="h-96 flex flex-col mx-1 px-3 overflow-auto divide-y">
                <div className="py-6 flex flex-col gap-4">
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
                    <div className="flex items-end justify-between">
                        <div className="flex items-center gap-6">
                            <div className="h-10 w-10 flex items-center justify-center shadow-xl text-primary border border-gray-200 rounded">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                                    <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
                                </svg>
                            </div>
                            <span className='font-dana text-gray-700'>
                                2
                            </span>
                            <div className="h-10 w-10 flex items-center justify-center shadow-xl text-primary border border-gray-200 rounded">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                                    <path fillRule="evenodd" d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1 items-end">
                            <div className="p-1 pt-1.5 rounded-sm w-fit bg-danger font-dana text-white text-xs h-4 flex items-center mt-1.5">
                                7%
                            </div>
                            <div className="text-gray-500 font-dana font-bold">
                                <span className='text-sm line-through'>
                                    5,300,000
                                </span>
                                <span className='text-xs'>
                                    تومان
                                </span>
                            </div>
                            <div className="text-danger font-dana font-bold">
                                <span className='text-base'>
                                    5,300,000
                                </span>
                                <span className='text-xs'>
                                    تومان
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-6 flex flex-col gap-4">
                    <div className="flex justify-between gap-8 opacity-50">
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
                    <div className="flex items-center gap-4">
                        <span className='h-px grow bg-gray-300'></span>
                        <span className='font-dana font-bold text-gray-700'>
                            نا موجود
                        </span>
                        <span className='h-px grow bg-gray-300'></span>
                    </div>
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
