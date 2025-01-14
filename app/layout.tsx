import type { Metadata } from 'next';
import { Providers } from './providers';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import './globals.css';

export const metadata: Metadata = {
	title: 'Serene Icon',
	description: 'Serene Icon',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<head />
			<body className='min-h-screen'>
				<Providers>
					<Header />
					<main className='dark text-foreground bg-background'>{children}</main>
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
