import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function FullWidthBanner() {
    return (
        <div className='mb-12'>
            <Link href={''} className="hidden md:block">
                <Image
                    src={'/images/banner/fw.webp'}
                    alt='full-width-banner'
                    width={2000}
                    height={800}
                />
            </Link>
            <div className="container block md:hidden">
                <Link href={''} className="">
                    <Image
                        src={'/images/banner/fwm.png'}
                        alt='full-width-banner'
                        width={2000}
                        height={800}
                        className='rounded-md'
                    />
                </Link>
            </div>
        </div>
    )
}
