"use client"
import React, { useState } from 'react'

export default function DesktopSearchBox() {

    const [isFoucs, setIsFoucs] = useState(false)
    return (
        <div className="before:content-[''] before:absolute before:h-full before:w-full before:bg-gray-500/20 before:top-0 before:left-0">
            <div className="flex bg-gray-100 w-[500px] rounded-md h-12">
                <div className="h-full aspect-square flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-gray-400">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </div>
                <input
                    type="text"
                    className='h-full grow bg-transparent outline-none font-dana text-sm text-gray-400 z-40'
                    onFocus={() => setIsFoucs(true)}
                    onBlur={() => setIsFoucs(false)}
                    placeholder='محصول، برند یا دسته بندی خود را جستجو کنید'
                />
            </div>
        </div>
    )
}