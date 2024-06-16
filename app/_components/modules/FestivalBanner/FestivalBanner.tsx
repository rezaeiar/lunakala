import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function FestivalBanner() {
    return (
        <Link href={'/fs'} className='hidden'>
            <Image
                src={'/images/festival-banner/banner_TopGifDesktop_Nhibhs_7faa66a4-edc5-43b4-a295-feb75f072891.webp'}
                alt='festival-banner'
                width={2000}
                height={200}
                className='hidden md:block w-full object-cover'
            />
            <Image
                src={'/images/festival-banner/banner_TopGifMobile_c4xG5Q_f6f90fc5-eb65-4ecb-bfe8-6eda7e009ead.gif'}
                alt='festival-banner'
                width={2000}
                height={200}
                className='block md:hidden w-full object-cover'
            />
        </Link>
    )
}