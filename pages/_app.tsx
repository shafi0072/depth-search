import '../styles/globals.css';
<<<<<<< HEAD
import '../styles/Root.css'
=======
>>>>>>> eefc4dd9bbf38c13b4d4488262449321d47146a7
import Navbar from '../src/components/core/Navbar/Navbar';
import type { AppProps } from 'next/app';
export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Navbar />
			<Component {...pageProps} />
		</>
	);
}
