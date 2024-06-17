import React from 'react'
import { PopularSearchProps } from '@/app/_types/PopularSearch/PopularSearch.types'
import Link from 'next/link'

export default function PopularSearch({ search }: PopularSearchProps) {
    return (
        <Link href={''} className="py-1 px-1.5 rounded-full border border-gray-300 text-gray-700 font-dana text-xs">
            {search}
        </Link>
    )
}
