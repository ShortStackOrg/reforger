//Root Layout
import './global.css';
import { ReactNode } from 'react';
import Navbar from '@/components/Navbar';
import { UserProvider } from '@auth0/nextjs-auth0/client';

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
        <Navbar/>
        <UserProvider>
          <main>{children}</main>
        </UserProvider>
      </body>
    </html>
  );
};

export default RootLayout;
