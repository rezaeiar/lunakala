import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Header from "./_components/modules/Header/Header";

const yekanbakh = localFont({
    src: [
        {
            path: "../public/fonts/YekanBakh/woff/YekanBakh-Thin.woff",
            weight: "100",
        },
        {
            path: "../public/fonts/YekanBakh/woff/YekanBakh-Light.woff",
            weight: "300",
        },
        {
            path: "../public/fonts/YekanBakh/woff/YekanBakh-Regular.woff",
            weight: "400",
        },
        {
            path: "../public/fonts/YekanBakh/woff/YekanBakh-SemiBold.woff",
            weight: "600",
        },
        {
            path: "../public/fonts/YekanBakh/woff/YekanBakh-Bold.woff",
            weight: "700",
        },
        {
            path: "../public/fonts/YekanBakh/woff/YekanBakh-ExtraBold.woff",
            weight: "800",
        },
        {
            path: "../public/fonts/YekanBakh/woff/YekanBakh-Black.woff",
            weight: "900",
        },
    ],
    variable: "--font-yekanbakh",
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
        <html lang="en" className="font-">
            <body className={yekanbakh.variable}>
                <Header />
                {children}
            </body>
        </html>
    );
}
