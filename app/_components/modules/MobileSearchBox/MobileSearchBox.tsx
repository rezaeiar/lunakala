"use client"
import React, { useState } from 'react'

export default function MobileSearchBox() {

    const [isFoucs, setIsFoucs] = useState(false)
    return (
        <div className={`${isFoucs ? "bg-white fixed top-0 left-0 w-full h-full p-4" : ''} flex md:hidden grow`}>
            <div className="flex items-center gap-2 w-full h-fit">
                <div className={`bg-gray-100 transition-colors flex rounded-md h-9 relative z-30 w-full`}>

                    <div className="h-full aspect-square flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-gray-400">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </div>
                    <input
                        type="text"
                        className='h-full grow bg-transparent outline-none font-dana text-gray-400 z-40 text-xs'
                        onFocus={() => setIsFoucs(true)}
                        placeholder='محصول، برند یا دسته بندی خود را جستجو کنید'
                    />
                </div>
                {
                    !!isFoucs &&
                    <div
                        className="cursor-pointer"
                        onClick={() => setIsFoucs(false)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </div>
                }
            </div>
        </div>
    )
}