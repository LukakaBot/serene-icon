'use client';

import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider } from '@/components/theme/ThemeProvider';

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<>
			<NextUIProvider>
				<ThemeProvider defaultTheme='dark'>{children}</ThemeProvider>
			</NextUIProvider>
		</>
	);
}
