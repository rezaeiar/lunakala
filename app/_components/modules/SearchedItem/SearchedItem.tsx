import React from 'react'
import Image from 'next/image'
import { SearchedItemProps } from '@/app/_types/SearchedItem/SearchedItem.types'

export default function SearchedItem({ search }: SearchedItemProps) {
    return (
        <div className="p-1.5 rounded-md flex items-center gap-3 bg-secondary/10">
            <div className="h-14 aspect-square">
                <Image
                    src={'/images/product/p1.webp'}
                    alt='product'
                    width={1000}
                    height={1000}
                    className='w-full'
                />
            </div>
            <p className='text-sm text-gray-900 font-dana font-semibold'>
                {search}
            </p>
        </div>
    )
}
