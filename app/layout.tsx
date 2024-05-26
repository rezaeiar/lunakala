import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
