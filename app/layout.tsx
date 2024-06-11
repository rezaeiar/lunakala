import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Header from "./_components/modules/Header/Header";
import Footer from "./_components/modules/Footer/Footer";

const dana = localFont({
    src: [
        {
            path: "../public/fonts/Dana/woff2/DanaFaNum-Regular.woff2",
            weight: "400",
        },
        {
            path: "../public/fonts/Dana/woff2/DanaFaNum-Medium.woff2",
            weight: "500",
        },
        {
            path: "../public/fonts/Dana/woff2/DanaFaNum-DemiBold.woff2",
            weight: "600",
        }
    ],
    variable: "--font-dana",
    weight: "500",
});
const morabba = localFont({
    src: [
        {
            path: "../public/fonts/Morabba/woff2/Morabba-Light.woff2",
            weight: "300",
        },
        {
            path: "../public/fonts/Morabba/woff2/Morabba-Medium.woff2",
            weight: "500",
        },
        {
            path: "../public/fonts/Morabba/woff2/Morabba-Bold.woff2",
            weight: "700",
        }
    ],
    variable: "--font-morabba",
    weight: "500",
});
export const metadata: Metadata = {
    title: "خرید گوشی موبایل (تنوع در برند +جدیدترین مدل‌ها +ارسال فوری) - لوناکالا",
    description: "خرید اینترنتی گوشی موبایل؛ مقایسه مشخصات انواع موبایل از برندهای سامسونگ، شیائومی، اپل، وان پلاس و... لوناکالا ارزانترین سایت خرید گوشی با ضمانت 18 ماهه معتبر",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fa" dir="rtl">
            <body className={`bg-gray-50 ${dana.variable} ${morabba.variable}`}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
