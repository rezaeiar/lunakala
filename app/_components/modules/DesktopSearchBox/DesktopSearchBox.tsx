"use client"
import React, { useState } from 'react'
import DesktopSearchResult from '../DesktopSearchResult/DesktopSearchResult'

export default function DesktopSearchBox() {

    const [isFoucs, setIsFoucs] = useState(false)
    const [searchedValue, setSearchedValue] = useState("")
    return (
        <div className={`${isFoucs ? 'before:visible before:opacity-100' : 'before:invisible before:opacity-0'} before:content-[''] before:fixed before:transition-all before:h-full before:w-full before:bg-black/20 before:top-0 before:left-0 before:z-10 hidden md:block`}>
            <div className={`${isFoucs ? 'bg-white' : 'bg-gray-100'} transition-colors flex w-[330px] lg:w-[540px] rounded-md h-10 lg:h-12 relative z-30`}>
                <div className="h-full aspect-square flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 lg:size-6 text-gray-400">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </div>
                <input
                    type="text"
                    className='h-full grow bg-transparent outline-none font-dana text-gray-400 z-40 text-xs lg:text-sm'
                    onFocus={() => setIsFoucs(true)}
                    onBlur={() => setIsFoucs(false)}
                    onChange={e => setSearchedValue(e.target.value)}
                    value={searchedValue}
                    placeholder='محصول، برند یا دسته بندی خود را جستجو کنید'
                />
                {
                    isFoucs &&
                    <DesktopSearchResult search={searchedValue} />
                }
            </div>
        </div>
    )
}