import type { Metadata } from 'next';
import { HappySeedsWatermark } from '@/components/HappySeedsWatermark';
import './globals.css';

export const metadata: Metadata = {
  title: 'Cheer Penalty Clash',
  description: 'Cheer Penalty Clash is a World Cup penalty shootout game. Pick your team, aim, and shoot to score goals and top the fan power leaderboard!',
  keywords: ['World Cup', 'penalty shootout', 'soccer game', 'football game', 'fan power', 'gesture control', '2026 World Cup'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <HappySeedsWatermark />
      </body>
    </html>
  );
}
