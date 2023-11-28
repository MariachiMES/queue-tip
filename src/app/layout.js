import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Queue Tip',
	description: 'Put your request in Queue with a Tip',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={`${inter.className} bg-slate-800`}>{children}</body>
		</html>
	);
}
