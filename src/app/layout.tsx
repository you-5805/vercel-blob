import { Metadata } from 'next';
import { PropsWithChildren } from 'react';
import '@/styles/global.css';

export const metadata = {} satisfies Metadata;

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang='ja'>
      <body>{children}</body>
    </html>
  );
}
