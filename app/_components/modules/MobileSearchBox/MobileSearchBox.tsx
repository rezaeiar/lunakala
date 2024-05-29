"use client"
import React, { useState } from 'react'

export default function MobileSearchBox() {

    const [isFoucs, setIsFoucs] = useState(true)
    return (
        <div className={`${isFoucs ? "bg-white fixed top-0 left-0 w-full h-full p-4": ''} transition-all block md:hidden grow`}>
            <div className={`bg-gray-100 transition-colors flex rounded-md h-10 relative z-30 w-full`}>
                <div className="h-full aspect-square flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-gray-400">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </div>
                <input
                    type="text"
                    className='h-full grow bg-transparent outline-none font-dana text-gray-400 z-40 text-xs'
                    onFocus={() => setIsFoucs(true)}
                    onBlur={() => setIsFoucs(false)}
                    placeholder='محصول، برند یا دسته بندی خود را جستجو کنید'
                />
            </div>
        </div>
    )
}