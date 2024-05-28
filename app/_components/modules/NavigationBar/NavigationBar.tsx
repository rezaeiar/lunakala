import React from 'react'
import Link from 'next/link'
import DesktopSearchBox from '../DesktopSearchBox/DesktopSearchBox'
import MobileSearchBox from '../MobileSearchBox/MobileSearchBox'

export default function NavigationBar() {
    return (
        <div className='pt-3 md:pt-4'>
            <div className="container">
                <div className="flex flex-col gap-3">
                    <div className="flex justify-between items-center">
                        <div className="flex justify-between md:justify-start w-full md:w-auto gap-6 lg:gap-8">
                            <div className="flex xl:hidden items-center text-gray-600">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </div>
                            <Link href="/" className="flex items-center gap-1 md:gap-2 font-bold font-morabba">
                                <div className="flex h-8 md:h-10 w-8 md:w-10 rounded-md bg-primary text-white text-lg items-center justify-center">
                                    ل
                                </div>
                                <div className="text-xl md:text-2xl">
                                    <span className='text-primary'>
                                        لونا
                                    </span>
                                    <span>
                                        کالا
                                    </span>
                                </div>
                            </Link>
                            <Link href='/' className="flex md:hidden items-center gap-1 text-black">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
                                </svg>
                                <span className='text-xs font-dana'>
                                    ورود
                                </span>
                            </Link>
                            <DesktopSearchBox />
                        </div>
                        <div className="gap-4 lg:gap-6 hidden md:flex">
                            <Link href='/account/login' className="flex divide-x-reverse divide-gray-900 rounded-md border border-gray-300 font-dana">
                                <div className="my-1.5 px-4 text-gray-800 border-l border-gray-800 text-sm lg:text-base">
                                    ورود
                                </div>
                                <div className="my-1.5 px-4 text-gray-800 text-sm lg:text-base">
                                    ثبت نام
                                </div>
                            </Link>
                            <Link href='' className='relative p-1 lg:p-1.5 aspect-square flex items-center justify-center border border-gray-300 rounded-md'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-gray-800">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className="flex md:hidden items-center gap-6">
                        <MobileSearchBox />
                        <Link href='/cart'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-gray-800">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
