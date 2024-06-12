import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Blog() {
    return (
        <div className='mb-16'>
            <div className="container">
                <div className="flex flex-col gap-8">
                    <div className="flex justify-between items-center">
                        <h4 className='text-xl font-morabba font-bold'>
                            خواندنی های لوناکالا
                        </h4>
                        <Link href={'/'} className='text-blue-500 font-dana flex items-center text-xs font-semibold'>
                            مطالب بیشتر در لوناوب
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                                <path fillRule="evenodd" d="M9.78 4.22a.75.75 0 0 1 0 1.06L7.06 8l2.72 2.72a.75.75 0 1 1-1.06 1.06L5.47 8.53a.75.75 0 0 1 0-1.06l3.25-3.25a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                            </svg>
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="flex flex-col rounded-lg overflow-hidden shadow-sm border-gray-200">
                            <div className="grow">
                                <Image
                                    src={'/images/blog/1.jpg'}
                                    alt='blog-card'
                                    width={2000}
                                    height={200}
                                    className='h-full object-cover'
                                />
                            </div>
                            <div className="p-4 bg-white flex flex-col font-dana gap-2">
                                <p className='text-sm text-gray-800'>
                                    بررسی ساندبار انکر INFINI 2؛ مینیمال و همه‌فن‌حریف
                                </p>
                                <span className='text-blue-500 text-xs text-end'>
                                    14 خرداد 1403
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col rounded-lg overflow-hidden shadow-sm border-gray-200">
                            <div className="grow">
                                <Image
                                    src={'/images/blog/2.jpg'}
                                    alt='blog-card'
                                    width={2000}
                                    height={200}
                                    className='h-full object-cover'
                                />
                            </div>
                            <div className="p-4 bg-white flex flex-col font-dana gap-2">
                                <p className='text-sm text-gray-800'>
                                    بررسی ساندبار انکر INFINI 2؛ مینیمال و همه‌فن‌حریف
                                </p>
                                <span className='text-blue-500 text-xs text-end'>
                                    14 خرداد 1403
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col rounded-lg overflow-hidden shadow-sm border-gray-200">
                            <div className="grow">
                                <Image
                                    src={'/images/blog/3.jpeg'}
                                    alt='blog-card'
                                    width={2000}
                                    height={200}
                                    className='h-full object-cover'
                                />
                            </div>
                            <div className="p-4 bg-white flex flex-col font-dana gap-2">
                                <p className='text-sm text-gray-800'>
                                    بررسی ساندبار انکر INFINI 2؛ مینیمال و همه‌فن‌حریف
                                </p>
                                <span className='text-blue-500 text-xs text-end'>
                                    14 خرداد 1403
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col rounded-lg overflow-hidden shadow-sm border-gray-200">
                            <div className="grow">
                                <Image
                                    src={'/images/blog/4.jpg'}
                                    alt='blog-card'
                                    width={2000}
                                    height={200}
                                    className='h-full object-cover'
                                />
                            </div>
                            <div className="p-4 bg-white flex flex-col font-dana gap-2">
                                <p className='text-sm text-gray-800'>
                                    بررسی ساندبار انکر INFINI 2؛ مینیمال و همه‌فن‌حریف
                                </p>
                                <span className='text-blue-500 text-xs text-end'>
                                    14 خرداد 1403
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
