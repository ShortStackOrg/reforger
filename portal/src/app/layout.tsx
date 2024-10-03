//Root Layout
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
        {/* navbar should replace this */}
        <nav className="bg-red-300 p-4">
          <a href="/" className="mr-4 hover:cursor-pointer hover:underline">Home</a>
          <a href="/api/auth/login" className="hover:cursor-pointer hover:underline">Login</a>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
