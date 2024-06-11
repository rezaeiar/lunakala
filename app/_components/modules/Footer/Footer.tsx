import Link from 'next/link'
import React from 'react'
import BackToTop from '../BackToTop/BackToTop'

export default function Footer() {
    return (
        <footer className='bg-white'>

            <div className="container">
                <div className="flex flex-col pt-10 relative">
                    <BackToTop />
                    <div className="grid grid-cols-6 py-6 gap-4 sm:gap-x-8 gap-y-8">
                        <div className="col-span-6 lg:col-span-3 flex flex-col gap-6">
                            <p className='text-gray-600 font-dana font-semibold relative before:rounded-full before:absolute before:w-1 before:h-full before:bg-primary before:right-0'>
                                <span className='text-primary font-bold text-2xl pr-4'>
                                    لوناکالا،
                                </span>
                                کامل ترین فروشگاه اینترنتی کشور
                            </p>
                            <p className='text-gray-500 font-dana text-sm'>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
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
                        <div className='col-span-3 sm:col-span-2 lg:col-span-1 flex flex-col gap-4'>
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
                        <div className='col-span-3 sm:col-span-2 lg:col-span-1 flex flex-col gap-4'>
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
                        <div className='col-span-6 sm:col-span-2 lg:col-span-1 flex flex-col gap-4'>
                            <Link href={''} className='font-bold text-gray-700 flex items-center gap-1'>
                                دانلود
                                <span className='text-purple-500'>
                                    اپلیکیشنمون!
                                </span>
                            </Link>
                            <ul className='font-dana flex flex-col gap-3 text-sm'>
                                <li>
                                    <Link href={'/'} className='bg-green-500 p-3 rounded-md text-white flex items-center justify-between shadow-md'>
                                        <span>
                                            از طریق بازار
                                        </span>
                                        <svg width="36" height="24" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.7901 15.1686C14.5127 15.1686 14.238 15.1139 13.9817 15.0078C13.7254 14.9016 13.4925 14.746 13.2963 14.5499C13.1002 14.3537 12.9446 14.1208 12.8384 13.8645C12.7322 13.6082 12.6776 13.3335 12.6776 13.0561V2.49236C12.6776 2.21494 12.7322 1.94025 12.8384 1.68395C12.9446 1.42765 13.1002 1.19477 13.2963 0.998613C13.4925 0.802451 13.7254 0.646847 13.9817 0.540685C14.238 0.434523 14.5127 0.379883 14.7901 0.379883C15.0675 0.379883 15.3422 0.434523 15.5985 0.540685C15.8548 0.646847 16.0877 0.802451 16.2838 0.998613C16.48 1.19477 16.6356 1.42765 16.7417 1.68395C16.8479 1.94025 16.9025 2.21494 16.9025 2.49236V13.0561C16.9025 14.2216 15.957 15.1686 14.7901 15.1686ZM7.39572 17.2811H2.11247C1.55221 17.2811 1.0149 17.0585 0.618729 16.6623C0.222563 16.2662 0 15.7288 0 15.1686C0 14.6083 0.222563 14.071 0.618729 13.6748C1.0149 13.2787 1.55221 13.0561 2.11247 13.0561H6.3388V6.71731C6.3388 6.15704 6.56136 5.61973 6.95753 5.22356C7.3537 4.8274 7.89101 4.60483 8.45128 4.60483C9.01154 4.60483 9.54885 4.8274 9.94502 5.22356C10.3412 5.61973 10.5638 6.15704 10.5638 6.71731V14.113C10.563 14.953 10.229 15.7584 9.63505 16.3524C9.04109 16.9463 8.23571 17.2803 7.39572 17.2811Z" fill="white"></path>
                                            <path d="M20.0625 21.5074H14.7902C14.2299 21.5074 13.6926 21.2848 13.2965 20.8886C12.9003 20.4925 12.6777 19.9552 12.6777 19.3949C12.6777 18.8346 12.9003 18.2973 13.2965 17.9011C13.6926 17.505 14.2299 17.2824 14.7902 17.2824H19.0165V10.9436C19.0165 10.6662 19.0712 10.3915 19.1773 10.1352C19.2835 9.87891 19.4391 9.64603 19.6353 9.44987C19.8314 9.25371 20.0643 9.0981 20.3206 8.99194C20.5769 8.88578 20.8516 8.83114 21.129 8.83114C21.4064 8.83114 21.6811 8.88578 21.9374 8.99194C22.1937 9.0981 22.4266 9.25371 22.6228 9.44987C22.8189 9.64603 22.9745 9.87891 23.0807 10.1352C23.1868 10.3915 23.2415 10.6662 23.2415 10.9436V18.3283C23.2408 19.1713 22.9056 19.9794 22.3096 20.5754C21.7135 21.1715 20.9054 21.5066 20.0625 21.5074ZM33.8066 17.281H28.5522C27.7046 17.2803 26.8919 16.9433 26.2925 16.3439C25.6931 15.7445 25.3561 14.9318 25.3553 14.0842V4.60344C25.3553 4.04318 25.5779 3.50586 25.9741 3.1097C26.3702 2.71353 26.9075 2.49097 27.4678 2.49097C28.0281 2.49097 28.5654 2.71353 28.9616 3.1097C29.3577 3.50586 29.5803 4.04318 29.5803 4.60344V13.0547H33.8066C34.3671 13.0547 34.9045 13.2774 35.3008 13.6736C35.6971 14.0699 35.9198 14.6074 35.9198 15.1679C35.9198 15.7283 35.6971 16.2658 35.3008 16.6621C34.9045 17.0584 34.3671 17.281 33.8066 17.281Z" fill="white"></path>
                                            <path d="M21.1291 6.71592C22.2958 6.71592 23.2416 5.77013 23.2416 4.60344C23.2416 3.43675 22.2958 2.49097 21.1291 2.49097C19.9624 2.49097 19.0166 3.43675 19.0166 4.60344C19.0166 5.77013 19.9624 6.71592 21.1291 6.71592Z" fill="white"></path>
                                            <path d="M27.4679 23.62C28.6346 23.62 29.5804 22.6742 29.5804 21.5075C29.5804 20.3408 28.6346 19.395 27.4679 19.395C26.3013 19.395 25.3555 20.3408 25.3555 21.5075C25.3555 22.6742 26.3013 23.62 27.4679 23.62Z" fill="white"></path>
                                        </svg>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/'} className='bg-blue-500 p-3 rounded-md text-white flex items-center justify-between shadow-md'>
                                        <span>
                                            از طریق مایکت
                                        </span>
                                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 24.5C18.6274 24.5 24 19.1274 24 12.5C24 5.87258 18.6274 0.5 12 0.5C5.37258 0.5 0 5.87258 0 12.5C0 19.1274 5.37258 24.5 12 24.5Z" fill="white"></path>
                                            <path d="M19.3608 11.0801C19.2604 8.80707 17.3925 7.00366 15.0979 7.00366C13.8251 7.00366 12.6778 7.56655 11.8962 8.44854C11.1146 7.56655 9.96734 7.00366 8.69456 7.00366C6.44658 7.00366 4.60374 8.73536 4.43881 10.9547C4.43164 11.0013 4.43164 11.0622 4.43164 11.1196V15.9346C4.43164 16.5262 4.90849 17.0031 5.50006 17.0031H5.52516C6.11673 17.0031 6.59358 16.5262 6.59358 15.9346V11.2738H6.60075C6.60075 10.1014 7.55444 9.15126 8.72325 9.15126C9.89564 9.15126 10.8457 10.1049 10.8457 11.2738H10.8529V15.2068C10.8529 15.7984 11.3298 16.2752 11.9213 16.2752H11.9464C12.538 16.2752 13.0148 15.7984 13.0148 15.2068V11.263C13.022 10.0906 13.9685 9.15484 15.1373 9.15484C16.3062 9.15484 17.2706 10.1121 17.2706 11.2809H17.2778V15.949C17.2778 16.5334 17.7546 17.0031 18.3318 17.0031H18.3569C18.9413 17.0031 19.411 16.5262 19.411 15.949V11.1877C19.3608 11.1339 19.3608 11.1088 19.3608 11.0801Z" fill="#0091EA"></path>
                                            <path d="M15.3273 17.4191C15.2806 17.3403 15.1229 17.498 15.1229 17.498C14.5313 18.1398 13.3051 18.5521 12.0324 18.5521C10.7596 18.5521 9.54058 18.1398 8.94183 17.498C8.94183 17.498 8.78408 17.3331 8.73747 17.4191C8.67652 17.5124 8.76974 17.663 8.76974 17.663C9.52624 18.7565 10.6807 19.2477 12.0324 19.2477C13.384 19.2477 14.5385 18.7565 15.295 17.663C15.3022 17.6594 15.3882 17.5124 15.3273 17.4191Z" fill="#0091EA"></path>
                                        </svg>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex justify-between items-center py-6 border-t border-gray-200">
                        <span className='text-gray-500 font-dana text-sm sm:text-base'>
                            تمامی حقوق مادی و معنوی این سایت متعلق به لوناکالا می‌باشد.
                        </span>
                        <div className="text-red-500 font-dana">
                            &#10085;
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
