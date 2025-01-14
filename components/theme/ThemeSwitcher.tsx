'use client';

import { useEffect, useState } from 'react';
import { Select, SelectItem } from '@nextui-org/react';
import { useTheme } from 'next-themes';

export function ThemeSwitcher() {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();
	const themeOptions = [
		{ label: '白天', value: 'light' },
		{ label: '黑夜', value: 'dark' },
	];

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return (
		<Select
			label='theme'
			selectedKeys={[theme!]}
			onSelectionChange={({ currentKey }) => currentKey && setTheme(currentKey)}
		>
			{themeOptions.map((option) => (
				<SelectItem key={option.value}>{option.label}</SelectItem>
			))}
		</Select>
	);
}
