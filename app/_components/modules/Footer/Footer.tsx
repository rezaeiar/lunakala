import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <footer className='bg-white pt-10'>
            <div className="container">
                <div className="flex flex-col">
                    <div className="grid grid-cols-2 py-6">
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-6 items-center">
                                <Link href="/" className="flex items-center gap-1 md:gap-2 font-bold font-morabba">
                                    <div className="flex h-8 md:h-10 w-8 md:w-10 rounded-md bg-blue-700 text-white text-lg items-center justify-center">
                                        ل
                                    </div>
                                </Link>
                                <p className='text-gray-700 font-dana font-semibold border-r pr-6'>
                                    <span className='text-primary font-bold'>لوناکالا،</span> کامل ترین فروشگاه اینترنتی کشور
                                </p>
                            </div>
                            <p className='text-gray-400 font-dana text-sm'>
                                ایمالز اولین وبسایت مقایسه قیمت در ایران است. ایمالز جستجوگر کالا در بین فروشگاه‌های اینترنتی است، و به خریدار کمک می‌کند تمام انتخاب‌های خود را در یک جا مشاهده کرده و کالاها را با قیمت ارزان‌تری تهیه کند. همچنین این امر موجب خرید بهتر، ارزان‌تر و آگاهی از قیمت واقعی اجناس می‌شود. لازم به ذکر است که ایمالز فروشگاه اینترنتی نیست و تنها مرجعی برای جستجو، مقایسه و معرفی کالا و فروشگاه‌های اینترنتی می باشد.
                            </p>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="flex items-center p-3 rounded-xl bg-red-400 gap-4 text-sm text-white font-dana">
                                    <div className="flex items-center gap-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                        </svg>
                                        <span className=''>
                                            ایمیل پشتیبانی
                                        </span>
                                    </div>
                                    <span className='h-px grow bg-white'></span>
                                    <span>
                                        info@emalls.ir
                                    </span>
                                </div>
                                <div className="flex items-center p-3 rounded-xl bg-blue-900 gap-4 text-sm text-white font-dana">
                                    <div className="flex items-center gap-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                        </svg>
                                        <span className=''>
                                            ایمیل پشتیبانی
                                        </span>
                                    </div>
                                    <span className='h-px grow bg-white'></span>
                                    <span>
                                        info@emalls.ir
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between gap-4">
                            <ul className='font-dana text-gray-500 flex flex-col gap-3 text-sm'>
                                <li className='font-bold text-black'>
                                    ایمالز
                                </li>
                                <li className='border-b'>
                                    ایمالز چه کمکی میکند؟
                                </li>
                                <li className='border-b'>
                                    فروشگاه ها
                                </li>
                                <li className='border-b'>
                                    کالاهای تخفیف دار
                                </li>
                                <li>
                                    ثبت فروشگاه
                                </li>
                            </ul>
                            <ul className='font-dana text-gray-500 flex flex-col gap-3 text-sm'>
                                <li className='font-bold text-black'>
                                    ایمالز
                                </li>
                                <li className='border-b'>
                                    ایمالز چه کمکی میکند؟
                                </li>
                                <li className='border-b'>
                                    فروشگاه ها
                                </li>
                                <li className='border-b'>
                                    کالاهای تخفیف دار
                                </li>
                                <li>
                                    ثبت فروشگاه
                                </li>
                            </ul>
                            <ul className='font-dana text-gray-500 flex flex-col gap-3 text-sm'>
                                <li className='font-bold text-black'>
                                دانلود اپلیکیشنمون!
                                </li>
                                <li className='p-3 rounded-md bg-green-700 text-white flex items-center justify-center'>
                                    ثبت فروشگاه
                                </li>
                                <li className='p-3 rounded-md bg-red-700 text-white flex items-center justify-center'>
                                    ثبت فروشگاه
                                </li>
                                <li className='p-3 rounded-md bg-blue-700 text-white flex items-center justify-center'>
                                    ثبت فروشگاه
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex justify-between items-center py-6 border-t border-gray-200">
                        <span className='text-gray-500 font-dana'>
                            تمامی حقوق مادی و معنوی این سایت متعلق به لوناکالا می‌باشد.
                        </span>
                        <div className="flex items-center gap-2">
                            <Image
                                src={'/images/nomads/enamad.png'}
                                alt='nomad'
                                width={500}
                                height={500}
                                className='w-12'
                            />
                            <Image
                                src={'/images/nomads/ettehadie.png'}
                                alt='nomad'
                                width={500}
                                height={500}
                                className='w-12'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
