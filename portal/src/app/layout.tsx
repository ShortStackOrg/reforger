//Root Layout
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
      <body>
        <nav>
          <a href="/">Home</a> | <a href="/auth/login">Login</a>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
