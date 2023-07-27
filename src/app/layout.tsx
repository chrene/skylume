import { GeoContextProvider } from '@/contexts/geo';
import { WeatherContextProvider } from '@/contexts/weather';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SkyLume',
  description: 'Your weather forecasting app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <GeoContextProvider>
        <WeatherContextProvider>
          <body className={inter.className}>{children}</body>
        </WeatherContextProvider>
      </GeoContextProvider>
    </html>
  );
}
