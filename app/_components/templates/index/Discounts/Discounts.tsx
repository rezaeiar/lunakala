import Link from 'next/link'
import React from 'react'

export default function Discounts() {
    return (
        <div>
            <div className="container">
                <div className="border-4 border-secondary rounded-2xl p-3">
                    <div className="grid grid-cols-3 bg-secondary py-3 px-4 rounded-md items-center">
                        <div></div>
                        <h5 className='text-2xl text-white font-morabba font-bold flex justify-center'>
                            لونآف
                        </h5>
                        <Link href='/' className="flex items-center gap-0.5 text-white justify-end">
                            <span className='text-sm'>
                                مشاهده همه
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
