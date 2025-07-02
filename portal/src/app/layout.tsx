//Root Layout
import NavBar from '@/components/Navbar';
import './global.css';
import { ReactNode } from 'react';

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <head>
        <title>Reforger</title>
      </head>
      <body className="bg-slate-300 text-gray-900 min-h-screen flex flex-col mb-400">
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
