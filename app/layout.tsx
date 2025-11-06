import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ayodeji Omidoyin - Full Stack Developer",
  description: "Professional portfolio showcasing full-stack development projects and skills",
  keywords: ["developer", "portfolio", "full-stack", "react", "node.js"],
  icons: {
    icon: [
      { url: '/favicon.ico' },
      new URL('/favicon.ico', 'https://yourdomain.com')
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ]
  },
  openGraph: {
    title: 'Ayodeji Omidoyin - Full Stack Developer',
    description: 'Professional portfolio showcasing full-stack development projects and skills',
    url: 'https://yourdomain.com',
    siteName: 'Ayodeji Omidoyin',
    images: [
      {
        url: '/profile_photo.jpg',
        width: 1200,
        height: 630,
        alt: 'Ayodeji Omidoyin - Profile Photo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ayodeji Omidoyin - Full Stack Developer',
    description: 'Professional portfolio showcasing full-stack development projects and skills',
    images: ['/profile_photo.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body
        className={`${inter.className} bg-white dark:bg-dark-300 text-gray-900 dark:text-white`}
      >
        {children}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: "#363636",
              color: "#fff",
            },
          }}
        />
      </body>
    </html>
  );
}




