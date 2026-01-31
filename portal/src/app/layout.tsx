//Root Layout
import NavBar from '@/components/Navbar';
import './global.css';
import { ReactNode } from 'react';
import { Space_Grotesk, Source_Sans_3 } from 'next/font/google';
import { Toaster } from 'sonner';

const displayFont = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
});

const bodyFont = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-body',
});

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <head>
        <title>Reforger</title>
      </head>
      <body className={`${displayFont.variable} ${bodyFont.variable} bg-background text-gray-900 min-h-screen flex flex-col`}>
        <NavBar />
        <main>{children}</main>
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
};

export default RootLayout;
