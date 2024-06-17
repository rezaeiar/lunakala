import Link from 'next/link'
import React from 'react'

export default function CartButton() {
    return (
        <Link href='' className='relative p-1 lg:p-1.5 aspect-square flex items-center justify-center border border-gray-300 rounded-md'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-gray-700">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
            <div className="bg-danger h-4 w-4 rounded-full flex items-center justify-center text-[10px] text-white font-dana absolute bottom-0.5 right-0.5 pt-0.5">
                2
            </div>
        </Link>
    )
}
