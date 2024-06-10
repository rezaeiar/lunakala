import Image from 'next/image'
import React from 'react'

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="flex flex-col">
                    <div className="flex">

                    </div>
                    <div className="flex justify-between items-center py-6">
                        <span className='text-gray-500 font-dana'>
                            تمامی حقوق مادی و معنوی این سایت متعلق به لوناکالا می‌باشد.
                        </span>
                        <div className="flex items-center gap-2">
                            <Image
                                src={'/images/nomads/enamad.png'}
                                alt='nomad'
                                width={500}
                                height={500}
                                className='w-12'
                            />
                            <Image
                                src={'/images/nomads/ettehadie.png'}
                                alt='nomad'
                                width={500}
                                height={500}
                                className='w-12'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
