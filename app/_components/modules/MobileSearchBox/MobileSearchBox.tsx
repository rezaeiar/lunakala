"use client"
import React, { useState } from 'react'
import PopularSearch from '../PopularSearch/PopularSearch'
import SearchedItem from '../SearchedItem/SearchedItem'

export default function MobileSearchBox() {

    const [isFoucs, setIsFoucs] = useState(false)
    const [searchedValue, setSearchedValue] = useState("")
    return (
        <div className={`${isFoucs ? "bg-white fixed top-0 left-0 w-full h-full p-4" : ''} flex flex-col gap-4 md:hidden grow divide-y`}>
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
                        onChange={e => setSearchedValue(e.target.value)}
                        value={searchedValue}
                        placeholder='محصول، برند یا دسته بندی خود را جستجو کنید'
                    />
                </div>
                {
                    !!isFoucs &&
                    <div
                        className="cursor-pointer text-gray-700"
                        onClick={() => setIsFoucs(false)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </div>
                }
            </div>
            {
                isFoucs && searchedValue ? (
                    <div className="flex pt-4 flex-col gap-4 h-screen">
                        <div className="flex gap-2 items-center text-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                            </svg>
                            <p className='text-sm flex items-center gap-1 font-dana'>
                                شما درحال جستجوی
                                <span className='font-bold text-secondary'>
                                    {searchedValue}
                                </span>
                                هستید.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 overflow-y-auto h-full">
                            <SearchedItem search='گوشی هوشمند مدل سامسونگ A43' />
                            <SearchedItem search='رم 8 لپتاپ لنوو' />
                        </div>
                    </div>
                ) : (
                    <div className={`${isFoucs ? 'flex' : 'hidden'} pt-4 gap-4 flex-col`}>
                        <h6 className='text-gray-700 font-dana font-bold text-sm'>
                            جستجو های محبوب
                        </h6>
                        <div className="flex gap-2">
                            <PopularSearch search='سامسونگ' />
                            <PopularSearch search='گلکسی A55' />
                            <PopularSearch search='موبایل' />
                            <PopularSearch search='ایسوز' />
                        </div>
                    </div>
                )
            }
        </div>
    )
}