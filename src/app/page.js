const { PrismaClient } = require('@prisma/client');
import { SessionProvider } from 'next-auth/react';

const prisma = new PrismaClient();

async function main() {
	// ... you will write your Prisma Client queries here
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
export default function Home() {
	return (
		<div>
			<div className='p-3 text-center bg-slate-800'>
				<button
					type='button'
					className='text-white bg-slate-400 hover:bg-blue-300 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
				>
					Default
				</button>
			</div>
		</div>
	);
}
