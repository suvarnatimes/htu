import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ClerkProvider } from '@clerk/nextjs';

export const metadata: Metadata = {
  title: 'Hope Theological University | Online Biblical & Theological Education',
  description: 'Hope Theological University (HTU India) offers distance and online Biblical, Theological and Doctoral degree programs. Associate Member of Cathedral Episcopal Synod Bishop\'s Council.',
  keywords: 'Hope Theological University, HTU India, Theological University, Distance Bible Education, Honorary Doctorate, Bachelor of Theology, Master of Divinity',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="antialiased min-h-screen flex flex-col font-sans bg-gray-50 text-gray-900">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
