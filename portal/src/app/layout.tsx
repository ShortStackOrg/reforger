//Root Layout
import { ReactNode } from 'react';

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <head>
        <title>My Next.js App</title>
      </head>
      <body>
        <header>
          <nav>
            <a href="/">Home</a> | <a href="/auth/login">Login</a>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;
