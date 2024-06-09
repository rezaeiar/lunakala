import Link from 'next/link'
import React from 'react'

export default function FilterBoxes() {
    return (
        <div className='mb-8 md:mb-12'>
            <div className="container">
                <div className="grid grid-cols-2 gap-8">
                    <div className="flex flex-col gap-4 bg-white p-8 rounded-3xl border border-gray-200">
                        <h3 className='text-xl font-morabba font-bold'>
                            گوشی بر اساس قیمت
                        </h3>
                        <div className="grid grid-cols-3 gap-3">
                            <Link href={''} className="flex items-center justify-center font-dana bg-blue-100 border border-blue-200 outline outline-2 outline-transparent rounded-xl p-6 font-semibold text-base transition-all hover:outline-blue-200">
                                گوشی ساده و ارزان
                            </Link>
                            <Link href={''} className="flex items-center justify-center font-dana bg-blue-100 border border-blue-200 outline outline-2 outline-transparent rounded-xl p-6 font-semibold text-base transition-all hover:outline-blue-200">
                                تا <span className='font-bold text-2xl'>15</span> میلیون
                            </Link>
                            <Link href={''} className="flex items-center justify-center font-dana bg-blue-100 border border-blue-200 outline outline-2 outline-transparent rounded-xl p-6 font-semibold text-base transition-all hover:outline-blue-200">
                                تا <span className='font-bold text-2xl'>50</span> میلیون
                            </Link>
                            <Link href={''} className="flex items-center justify-center font-dana bg-blue-100 border border-blue-200 outline outline-2 outline-transparent rounded-xl p-6 font-semibold text-base transition-all hover:outline-blue-200">
                                تا <span className='font-bold text-2xl'>5</span> میلیون
                            </Link>
                            <Link href={''} className="flex items-center justify-center font-dana bg-blue-100 border border-blue-200 outline outline-2 outline-transparent rounded-xl p-6 font-semibold text-base transition-all hover:outline-blue-200">
                                تا <span className='font-bold text-2xl'>30</span> میلیون
                            </Link>
                            <Link href={''} className="flex items-center justify-center font-dana bg-blue-100 border border-blue-200 outline outline-2 outline-transparent rounded-xl p-6 font-semibold text-base transition-all hover:outline-blue-200">
                                تا <span className='font-bold text-2xl'>75</span> میلیون
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 bg-white p-8 rounded-3xl border border-gray-200">
                        <h3 className='text-xl font-morabba font-bold'>
                            گوشی بر اساس قیمت
                        </h3>
                        <div className="grid grid-cols-3 gap-3">
                            <Link href={''} className="flex items-center justify-center font-dana bg-blue-100 border border-blue-200 outline outline-2 outline-transparent rounded-xl p-6 font-semibold text-base transition-all hover:outline-blue-200">
                                گوشی ساده و ارزان
                            </Link>
                            <Link href={''} className="flex items-center justify-center font-dana bg-blue-100 border border-blue-200 outline outline-2 outline-transparent rounded-xl p-6 font-semibold text-base transition-all hover:outline-blue-200">
                                تا <span className='font-bold text-2xl'>15</span> میلیون
                            </Link>
                            <Link href={''} className="flex items-center justify-center font-dana bg-blue-100 border border-blue-200 outline outline-2 outline-transparent rounded-xl p-6 font-semibold text-base transition-all hover:outline-blue-200">
                                تا <span className='font-bold text-2xl'>50</span> میلیون
                            </Link>
                            <Link href={''} className="flex items-center justify-center font-dana bg-blue-100 border border-blue-200 outline outline-2 outline-transparent rounded-xl p-6 font-semibold text-base transition-all hover:outline-blue-200">
                                تا <span className='font-bold text-2xl'>5</span> میلیون
                            </Link>
                            <Link href={''} className="flex items-center justify-center font-dana bg-blue-100 border border-blue-200 outline outline-2 outline-transparent rounded-xl p-6 font-semibold text-base transition-all hover:outline-blue-200">
                                تا <span className='font-bold text-2xl'>30</span> میلیون
                            </Link>
                            <Link href={''} className="flex items-center justify-center font-dana bg-blue-100 border border-blue-200 outline outline-2 outline-transparent rounded-xl p-6 font-semibold text-base transition-all hover:outline-blue-200">
                                تا <span className='font-bold text-2xl'>75</span> میلیون
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
