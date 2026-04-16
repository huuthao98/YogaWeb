import type { Metadata } from "next";
import { Playfair_Display, Montserrat, Cinzel } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import StarField from "@/components/StarField/StarField";
import CursorGlow from "@/components/CursorGlow/CursorGlow";
import CartProvider from "@/contexts/CartContext";

const playfair = Playfair_Display({ 
  subsets: ["vietnamese", "latin"],
  variable: "--font-serif",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["vietnamese", "latin"],
  variable: "--font-sans",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yogalamhuong.vn"),
  title: {
    default: "Yoga Lam Hương — Luxury Yoga Retreat & Shop | Vietnam",
    template: "%s | Yoga Lam Hương",
  },
  description:
    "Trải nghiệm yoga đẳng cấp tại Yoga Lam Hương — nơi giao thoa giữa tâm linh, sức khỏe và nghệ thuật sống. Khóa học yoga, retreat cao cấp và sản phẩm yoga luxury tại Việt Nam.",
  keywords: [
    "yoga vietnam",
    "yoga retreat vietnam",
    "khóa học yoga",
    "thảm yoga cao cấp",
    "đồ yoga",
    "yoga luxury",
    "thiền định",
    "sức khỏe tinh thần",
    "yoga teacher training",
    "yoga lam huong",
  ],
  authors: [{ name: "Yoga Lam Hương" }],
  creator: "Yoga Lam Hương Vietnam",
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://yogalamhuong.vn",
    siteName: "Yoga Lam Hương",
    title: "Yoga Lam Hương — Luxury Yoga Retreat & Shop",
    description:
      "Trải nghiệm yoga đẳng cấp tại Yoga Lam Hương — nơi giao thoa giữa tâm linh, sức khỏe và nghệ thuật sống.",
    images: [
      {
        url: "/yoga-hero.png",
        width: 1200,
        height: 630,
        alt: "Yoga Lam Hương - Luxury Yoga Retreat Vietnam",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yoga Lam Hương — Luxury Yoga Retreat & Shop",
    description:
      "Trải nghiệm yoga đẳng cấp tại Yoga Lam Hương — nơi giao thoa giữa tâm linh, sức khỏe và nghệ thuật sống.",
    images: ["/yoga-hero.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://yogalamhuong.vn",
    languages: {
      "vi-VN": "https://yogalamhuong.vn",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${playfair.variable} ${montserrat.variable} ${cinzel.variable}`}>
       <body>
        <CartProvider>
          <StarField />
          <CursorGlow />
          <Navbar />
          <main className="page-transition">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
