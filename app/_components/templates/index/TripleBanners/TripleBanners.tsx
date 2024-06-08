import Image from 'next/image'
import React from 'react'
import TripleBanner from '../TripleBanner/TripleBanner'

export default function TripleBanners() {
    return (
        <div className='mb-4 md:mb-6'>
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
                   <TripleBanner />
                   <TripleBanner />
                   <TripleBanner />
                </div>
            </div>
        </div>
    )
}
