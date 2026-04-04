import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import CookieBanner from "./components/CookieBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Revive Roof Repair | Central Pennsylvania's Trusted Roof Repair Experts",
  description:
    "Professional roof repair in Central PA - Harrisburg, Hershey, Mechanicsburg, York, Lancaster. 24/7 emergency service, storm damage repair, leak repair, roof replacement. Licensed PA #001473. Call (717) 500-1434 for free estimate.",
  keywords:
    "roof repair, roof replacement, storm damage, leak repair, Harrisburg roofer, Hershey roofer, York PA roofer, Lancaster roofer, emergency roof repair, Central Pennsylvania roofing",
  openGraph: {
    title: "Revive Roof Repair | Central Pennsylvania's Trusted Roof Repair Experts",
    description:
      "Professional roof repair in Central PA. 24/7 emergency service, storm damage, leak repair. Licensed & insured. Call (717) 500-1434",
    url: "https://reviveroofrepair.com",
    siteName: "Revive Roof Repair",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Revive Roof Repair | Central PA Roofers",
    description: "Professional roof repair in Central PA. 24/7 emergency service. Call (717) 500-1434",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1 pt-[72px]">{children}</main>
        <CookieBanner />
        <footer className="bg-[#1a1a2e] text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-bold text-xl mb-4">Revive Roof Repair</h3>
                <p className="text-gray-400 mb-4">
                  Central Pennsylvania&apos;s trusted roof repair experts. Serving Harrisburg,
                  Hershey, Mechanicsburg, York, Lancaster and surrounding areas.
                </p>
                <p className="text-gray-400 text-sm">
                  License: PA #001473 | Fully Insured
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Contact Us</h3>
                <p className="text-gray-400 mb-2">
                  <a href="tel:+17175001434" className="hover:text-white transition-colors">
                    Phone: (717) 500-1434
                  </a>
                </p>
                <p className="text-gray-400 mb-2">Hours: Mon-Sun 8am-8pm</p>
                <p className="text-gray-400">
                  <span className="text-[#e63946]">24/7 Emergency Service Available</span>
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Service Areas</h3>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>Harrisburg</li>
                  <li>Hershey</li>
                  <li>Mechanicsburg</li>
                  <li>York</li>
                  <li>Lancaster</li>
                  <li>Carlisle</li>
                  <li>Lebanon</li>
                  <li>Reading</li>
                  <li>Allentown</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
              <p>&copy; {new Date().getFullYear()} Revive Roof Repair. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
