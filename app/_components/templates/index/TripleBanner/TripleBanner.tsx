import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function TripleBanner() {
    return (
        <Link href={'/'} className="rounded-md overflow-hidden">
            <Image
                src={'/images/banner/CenterTripletBanners.webp'}
                alt='triple-banner'
                width={5000}
                height={5000}
                className='w-full object-cover'
            />
        </Link>
    )
}
