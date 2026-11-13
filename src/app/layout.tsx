import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ClerkProvider } from '@clerk/nextjs';

export const metadata: Metadata = {
  title: 'HOPE THEOLOGICAL UNIVERSITY | Distance & Online Biblical Education',
  description: 'Hope Theological University - We Are A Leading University That Offers Distance And Online Biblical and Theological Education. A University of Synodos of Jesus Agape Diocese of India International Episcopal Association. ISO: INTERNATIONAL QUALITY CERTIFICATION SERVICE UK.',
  keywords: 'Hope Theological University, HTU India, Theological University, Distance Bible Education, Synodos of Jesus Agape Diocese, ISO UK Certification, Honorary Doctorate, Bachelor of Theology, Master of Divinity',
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
