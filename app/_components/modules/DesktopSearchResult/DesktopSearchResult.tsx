import React from 'react'
import PopularSearch from '../PopularSearch/PopularSearch'
import SearchedItem from '../SearchedItem/SearchedItem'
import { DesktopSearchResultProps } from '@/app/_types/DesktopSearchResult/DesktopSearchResult.types'

export default function DesktopSearchResult({ search }: DesktopSearchResultProps) {
    return (
        <div className="w-full absolute top-12 lg:top-14 bg-white cursor-pointer z-30 rounded-md p-4">
            <div className="flex flex-col gap-4">
                <div className="flex gap-2 items-center text-gray-600 border-b pb-4 border-yellow-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                    </svg>
                    <p className='text-sm flex items-center gap-1 font-dana'>
                        جستجو برای
                        {
                            !search &&
                            <span>...</span>
                        }
                        <span className='font-bold text-primary'>
                            {search}
                        </span>
                    </p>
                </div>
                {
                    search &&
                    <div className="flex flex-col gap-2 overflow-y-auto max-h-60 overflow-auto">
                        <SearchedItem search='گوشی هوشمند مدل سامسونگ A43' />
                        <SearchedItem search='رم 8 لپتاپ لنوو' />
                        <SearchedItem search='رم 8 لپتاپ لنوو' />
                        <SearchedItem search='رم 8 لپتاپ لنوو' />
                        <SearchedItem search='رم 8 لپتاپ لنوو' />
                        <SearchedItem search='رم 8 لپتاپ لنوو' />
                        <SearchedItem search='رم 8 لپتاپ لنوو' />
                        <SearchedItem search='رم 8 لپتاپ لنوو' />
                        <SearchedItem search='رم 8 لپتاپ لنوو' />
                    </div>
                }
            </div>
            {
                !search &&
                <div className={`flex pt-4 gap-4 flex-col`}>
                    <h6 className='text-gray-900 font-dana font-bold text-sm'>
                        جستجو های محبوب
                    </h6>
                    <div className="flex gap-2">
                        <PopularSearch search='سامسونگ' />
                        <PopularSearch search='گلکسی A55' />
                        <PopularSearch search='موبایل' />
                        <PopularSearch search='ایسوز' />
                    </div>
                </div>
            }
        </div>
    )
}
