import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import Banner from '../src/components/core/Home/Banner';
import Our_Partners from '../src/components/core/Our Partners/Our_Partners';
import WhatWeDo from '../src/components/core/WhatWeDo/WhatWeDo';
import OurProcess from '../src/components/core/OurProcess/OurProcess';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<section className="container">
			<Banner />
			<Our_Partners />
			<WhatWeDo />
			<OurProcess />
		</section>
	);
}
