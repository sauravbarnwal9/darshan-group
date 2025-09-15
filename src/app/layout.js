import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Google Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ Add your meta logo / favicon here
export const metadata = {
  title: "Darshan Group",
  description: "Darshan Group of Companies",
  icons: {
    icon: "/image.png",        // Your logo or favicon path in /public folder
    shortcut: "/favicon.ico", // Optional fallback
    apple: "/image.png",       // For iOS homescreen
  },
  openGraph: {
    title: "Darshan Group",
    description: "Darshan Group of Companies",
    images: ["/image.png"],    // Used for social sharing preview
  },
  twitter: {
    card: "summary_large_image",
    images: ["/image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
