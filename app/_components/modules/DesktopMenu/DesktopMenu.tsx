import Link from 'next/link'
import React from 'react'

export default function DesktopMenu() {
    return (
        <ul className="hidden lg:flex pt-5 items-center gap-5 font-dana font-semibold text-gray-600 text-xs *:cursor-default *:relative">
            <li className=''>
                موبایل
                <div className="absolute hidden top-5 overflow-hidden h-96 right-0 shadow-3xl rounded-lg bg-white">
                    <div className="bg-white px-4 py-8 flex flex-col gap-6">
                        <div className="flex items-center justify-between w-60 group">
                            <div className="">
                                <h2 className='text-base font-dana font-bold text-gray-900'>
                                    موبایل
                                </h2>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 text-primary hidden group-hover:block">
                                <path fillRule="evenodd" d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="flex items-center justify-between w-60 group">
                            <div className="">
                                <h2 className='text-base font-dana font-bold text-gray-900'>
                                    لوازم جانبی موبایل
                                </h2>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 text-primary hidden group-hover:block">
                                <path fillRule="evenodd" d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="flex items-center justify-between w-60 group">
                            <div className="">
                                <h2 className='text-base font-dana font-bold text-gray-900'>
                                    پاد
                                </h2>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 text-primary hidden group-hover:block">
                                <path fillRule="evenodd" d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                    <div className="bg-secondary/10 px-4 py-8 flex flex-col gap-6">
                        <div className="flex items-center gap-1 w-max">
                            <h5 className='text-gray-700 font-dana'>
                                قیمت گوشی
                            </h5>
                            <span className='text-gray-600 font-dana font-light text-xs'>
                                (همه محصولات)
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                                <path fillRule="evenodd" d="M9.78 4.22a.75.75 0 0 1 0 1.06L7.06 8l2.72 2.72a.75.75 0 1 1-1.06 1.06L5.47 8.53a.75.75 0 0 1 0-1.06l3.25-3.25a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <ul className="h-full">
                            <li className='text-gray-700 font-dana font-bold w-28 mb-6 inline-block'>
                                سامسونگ
                            </li>
                            <li className='text-gray-700 font-dana font-bold w-28 mb-6 inline-block'>
                                سامسونگ
                            </li>
                            <li className='text-gray-700 font-dana font-bold w-28 mb-6 inline-block'>
                                سامسونگ
                            </li>
                            <li className='text-gray-700 font-dana font-bold w-28 mb-6 inline-block'>
                                سامسونگ
                            </li>
                            <li className='text-gray-700 font-dana font-bold w-28 mb-6 inline-block'>
                                سامسونگ
                            </li>
                            <li className='text-gray-700 font-dana font-bold w-28 mb-6 inline-block'>
                                سامسونگ
                            </li>
                            <li className='text-gray-700 font-dana font-bold w-28 mb-6 inline-block'>
                                سامسونگ
                            </li>
                            <li className='text-gray-700 font-dana font-bold w-28 mb-6 inline-block'>
                                سامسونگ
                            </li>
                            <li className='text-gray-700 font-dana font-bold w-28 mb-6 inline-block'>
                                سامسونگ
                            </li>
                            <li className='text-gray-700 font-dana font-bold w-28 mb-6 inline-block'>
                                سامسونگ
                            </li>
                            <li className='text-gray-700 font-dana font-bold w-28 mb-6 inline-block'>
                                سامسونگ
                            </li>
                            <li className='text-gray-700 font-dana font-bold w-28 mb-6 inline-block'>
                                سامسونگ
                            </li>
                            <li className='text-gray-700 font-dana font-bold w-28 mb-6 inline-block'>
                                سامسونگ
                            </li>
                            <li className='text-gray-700 font-dana font-bold w-28 mb-6 inline-block'>
                                سامسونگ
                            </li>
                            <li className='text-gray-700 font-dana font-bold w-28 mb-6 inline-block'>
                                سامسونگ
                            </li>
                            <li className='text-gray-700 font-dana font-bold w-28 mb-6 inline-block'>
                                سامسونگ
                            </li>
                            <li className='text-gray-700 font-dana font-bold w-28 mb-6 inline-block'>
                                سامسونگ
                            </li>
                            <li className='text-gray-700 font-dana font-bold w-28 mb-6 inline-block'>
                                سامسونگ
                            </li>
                            <li className='text-gray-700 font-dana font-bold w-28 mb-6 inline-block'>
                                سامسونگ
                            </li>
                        </ul>
                    </div>
                </div>
            </li>
            <li>
                لپتاپ
            </li>
            <li>
                هدفون
            </li>
            <li>
                تبلت
            </li>
            <li>
                طلا و جواهر
            </li>
            <li>
                ساعت و بند هوشمند
            </li>
            <li>
                گیمینگ
            </li>
            <li>
                صوتی و تصویری
            </li>
            <li>
                شبکه سازی و ذخیره
            </li>
            <li>
                صوتی و تصویری
            </li>
            <li>
                لوازم خانگی
            </li>
            <Link href='/' className='text-primary ps-5 border-s border-gray-300'>
                فروشنده شو
            </Link>
        </ul>
    )
}
