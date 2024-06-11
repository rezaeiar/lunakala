"use client"
import React from 'react'

export default function BackToTop() {

    const BackToTopHandler = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return (
        <div
            className="bg-gray-50 rounded-full h-16 sm:h-20 w-16 sm:w-20 absolute -top-8 sm:-top-10 left-0 p-1.5 sm:p-2"
            onClick={BackToTopHandler}
        >
            <div className="h-full w-full bg-white rounded-full flex items-center justify-center cursor-pointer group">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 sm:size-6 text-red-900 group-hover:mb-1 transition-all">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                </svg>
            </div>
        </div>
    )
}
