import type { Metadata } from "next";
import { Inter, Cairo } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const cairo = Cairo({ subsets: ["arabic"], variable: "--font-cairo" });

// Since Alexandria is on Google Fonts, we could use next/font/google, but assuming it might need custom loading if not supported in this Next.js version natively, let's use it from Google Fonts via next/font/google if available, or just rely on Cairo as fallback. 
// For safety, let's load it from next/font/google
import { Alexandria } from "next/font/google";
const alexandria = Alexandria({ subsets: ["arabic"], variable: "--font-alexandria" });

export const metadata: Metadata = {
  title: "د. هديل عبدالله | أخصائية التغذية العلاجية",
  description: "الموقع الشخصي للدكتورة هديل عبدالله، أخصائية التغذية العلاجية. خطط غذائية علمية وعملية تساعدك على تحقيق أهدافك الصحية.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <body className={`${alexandria.variable} ${inter.variable} ${cairo.variable} font-sans antialiased text-text bg-background`}>
        {children}
      </body>
    </html>
  );
}
