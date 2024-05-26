import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function FestivalBanner() {
    return (
        <Link href={'/fs'}>
            <Image
                src={'/images/festival-banner/banner_TopGifDesktop_StXgoM_57c633e6-98b1-42d2-a49c-688e5f4e0430.gif'}
                alt='festival-banner'
                width={1000}
                height={1000}
                className='hidden md:block w-full object-cover'
            />
            <Image
                src={'/images/festival-banner/banner_TopGifMobile_c4xG5Q_f6f90fc5-eb65-4ecb-bfe8-6eda7e009ead.gif'}
                alt='festival-banner'
                width={1000}
                height={1000}
                className='block md:hidden w-full object-cover'
            />
        </Link>
    )
}