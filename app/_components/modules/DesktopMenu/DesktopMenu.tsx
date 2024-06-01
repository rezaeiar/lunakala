import Link from 'next/link'
import React from 'react'

export default function DesktopMenu() {
    return (
        <ul className="hidden lg:flex pt-5 items-center gap-5 font-dana font-semibold text-gray-600 text-xs *:cursor-default">
            <li>
                موبایل
            </li>
            <li>
                لپتاپ
            </li>
            <li>
                هدفون
            </li>
            <li>
                تبلت
            </li>
            <li>
                طلا و جواهر
            </li>
            <li>
                ساعت و بند هوشمند
            </li>
            <li>
                گیمینگ
            </li>
            <li>
                صوتی و تصویری
            </li>
            <li>
                شبکه سازی و ذخیره
            </li>
            <li>
                صوتی و تصویری
            </li>
            <li>
                لوازم خانگی
            </li>
            <Link href='/' className='text-primary ps-5 border-s border-gray-300'>
                فروشنده شو
            </Link>
        </ul>
    )
}
