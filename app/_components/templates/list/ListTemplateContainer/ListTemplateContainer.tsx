import Card from '@/app/_components/modules/Card/Card'
import React from 'react'

export default function ListTemplateContainer() {
    return (
        <div className='pb-6'>
            <div className="container">
                <div className="grid grid-cols-4 gap-8">
                    <div className="col-span-1 rounded-md border border-gray-200 flex flex-col">
                        <div className="flex justify-between items-center p-4 text-gray-700 border-b border-gray-100">
                            <div className='flex items-center gap-1 font-bold text-sm font-dana'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                                    <path d="M6.5 2.25a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0V4.5h6.75a.75.75 0 0 0 0-1.5H6.5v-.75ZM11 6.5a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0v-.75h2.25a.75.75 0 0 0 0-1.5H11V6.5ZM5.75 10a.75.75 0 0 1 .75.75v.75h6.75a.75.75 0 0 1 0 1.5H6.5v.75a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75ZM2.75 7.25H8.5v1.5H2.75a.75.75 0 0 1 0-1.5ZM4 3H2.75a.75.75 0 0 0 0 1.5H4V3ZM2.75 11.5H4V13H2.75a.75.75 0 0 1 0-1.5Z" />
                                </svg>
                                فیلتر:
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-5 text-blue-500">
                                <path fillRule="evenodd" d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <ul>
                            
                        </ul>
                    </div>
                    <div className="col-span-3 flex flex-col gap-8">
                        <div className="flex gap-4">
                            <div className="grow bg-blue-100/50 rounded-md flex items-center justify-between px-4">
                                <div className="flex font-dana items-center gap-6">
                                    <div className='text-gray-800 flex items-center gap-1 font-bold text-sm'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                                        </svg>
                                        ترتیب:
                                    </div>
                                    <ul className='flex items-center gap-3 text-xs text-gray-700 font-dana *:cursor-pointer'>
                                        <li className='font-bold text-blue-500'>
                                            پرفروش ترین
                                        </li>
                                        <li>
                                            بیشترین قیمت
                                        </li>
                                        <li>
                                            کمترین قیمت
                                        </li>
                                        <li>
                                            جدیدترین
                                        </li>
                                        <li>
                                            بیشترین تخفیف
                                        </li>
                                    </ul>
                                </div>
                                <span className='text-xs font-dana text-gray-700'>
                                    232 کالا
                                </span>
                            </div>
                            <div className="px-8 py-3 rounded-md bg-blue-500 text-white font-dana font-semibold text-sm">
                                مقایسه
                            </div>
                        </div>
                        <div className="grid grid-cols-3">
                            <Card />
                            <Card />
                            <Card />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
