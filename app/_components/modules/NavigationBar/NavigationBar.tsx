import React from 'react'
import Link from 'next/link'
import DesktopSearchBox from '../DesktopSearchBox/DesktopSearchBox'

export default function NavigationBar() {
    return (
        <div className='pt-4'>
            <div className="container">
                <div className="flex flex-col">
                    <div className="flex justify-between items-center">
                        <div className="flex gap-8">
                            <Link href="/" className="flex items-center gap-2 font-bold font-morabba">
                                <div className="flex h-10 w-10 rounded-md bg-primary text-white text-lg items-center justify-center">
                                    ل
                                </div>
                                <div className="text-2xl">
                                    <span className='text-primary'>
                                        لونا
                                    </span>
                                    <span>
                                        کالا
                                    </span>
                                </div>
                            </Link>
                            <DesktopSearchBox />
                        </div>
                        <div className="flex gap-6">
                            <Link href='/account/login' className="flex divide-x-reverse divide-gray-900 rounded-md border border-gray-300 font-dana">
                                <div className="my-1.5 px-4 text-gray-800 border-l border-gray-800">
                                    ورود
                                </div>
                                <div className="my-1.5 px-4 text-gray-800">
                                    ثبت نام
                                </div>
                            </Link>
                            <Link href='' className='relative p-1.5 aspect-square flex items-center justify-center border border-gray-300 rounded-md'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-gray-800">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                </svg>


                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
