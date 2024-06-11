import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <footer className='bg-white pt-10'>
            <div className="container">
                <div className="flex flex-col">
                    <div className="grid grid-cols-6 py-6 gap-8">
                        <div className="col-span-3 flex flex-col gap-6">
                            <p className='text-gray-600 font-dana font-semibold relative before:rounded-full before:absolute before:w-1 before:h-full before:bg-primary before:right-0'>
                                <span className='text-primary font-bold text-2xl pr-4'>
                                    لوناکالا،
                                </span>
                                کامل ترین فروشگاه اینترنتی کشور
                            </p>
                            <p className='text-gray-500 font-dana text-sm'>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد
                            </p>
                            <div className="grid grid-cols-2 gap-6">
                                <Link href={''} className="flex items-center p-3 rounded-md bg-emerald-600 gap-2 text-sm text-white font-dana shadow-xl hover:scale-105 transition-transform cursor-pointer">
                                    <div className="flex items-center gap-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                        </svg>
                                        <span>
                                            ایمیل پشتیبانی
                                        </span>
                                    </div>
                                    <span className='h-0.5 grow bg-white/20'></span>
                                    <span>
                                        info@luna.ir
                                    </span>
                                </Link>
                                <Link href={''} className="flex items-center p-3 rounded-md bg-purple-600 gap-2 text-sm text-white font-dana shadow-xl hover:scale-105 transition-transform cursor-pointer">
                                    <div className="flex items-center gap-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                        </svg>
                                        <span>
                                            اینستاگرام
                                        </span>
                                    </div>
                                    <span className='h-0.5 grow bg-white/20'></span>
                                    <span>
                                        @lunakala
                                    </span>
                                </Link>
                            </div>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <Link href={''} className='font-bold text-gray-700'>
                                لوناکالا
                            </Link>
                            <ul className='font-dana text-gray-500 flex flex-col gap-3 text-sm *:border-b *:border-gray-100 *:pb-3'>
                                <li className='last:border-none'>
                                    <Link href={'/'}>
                                        لوناکالا چه کمکی میکند؟
                                    </Link>
                                </li>
                                <li className='last:border-none'>
                                    <Link href={'/'}>
                                        فروشگاه ها
                                    </Link>
                                </li>
                                <li className='last:border-none'>
                                    <Link href={'/'}>
                                        کالاهای تخفیف دار
                                    </Link>
                                </li>
                                <li className='last:border-none'>
                                    <Link href={'/'}>
                                        ثبت فروشگاه
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <Link href={''} className='font-bold text-gray-700'>
                                خدمات
                            </Link>
                            <ul className='font-dana text-gray-500 flex flex-col gap-3 text-sm *:border-b *:border-gray-100 *:pb-3'>
                                <li className='last:border-none'>
                                    <Link href={'/'}>
                                        وبلاگ
                                    </Link>
                                </li>
                                <li className='last:border-none'>
                                    <Link href={'/'}>
                                        لیست قیمت گوشی و موبایل
                                    </Link>
                                </li>
                                <li className='last:border-none'>
                                    <Link href={'/'}>
                                        شرایط و قوانین
                                    </Link>
                                </li>
                                <li className='last:border-none'>
                                    <Link href={'/'}>
                                        تماس با ما
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <Link href={''} className='font-bold text-gray-700 flex items-center gap-1'>
                                دانلود
                                <span className='text-purple-500'>
                                    اپلیکیشنمون!
                                </span>
                            </Link>
                            <ul className='font-dana text-gray-500 flex flex-col gap-3 text-sm *:border-b *:border-gray-100 *:pb-3'>
                                <li className='last:border-none'>
                                    <Link href={'/'}>
                                        وبلاگ
                                    </Link>
                                </li>
                                <li className='last:border-none'>
                                    <Link href={'/'}>
                                        لیست قیمت گوشی و موبایل
                                    </Link>
                                </li>
                                <li className='last:border-none'>
                                    <Link href={'/'}>
                                        شرایط و قوانین
                                    </Link>
                                </li>
                                <li className='last:border-none'>
                                    <Link href={'/'}>
                                        تماس با ما
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex justify-between items-center py-6 border-t border-gray-200">
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
