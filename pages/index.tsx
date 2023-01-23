import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import Banner from '../src/components/core/Home/Banner';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<section className="container">
			<Banner />
		</section>
	);
}
