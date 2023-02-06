import React from 'react';
import Social from '../core/Social';
import Contact from '../core/ContactBar';
import Navbar from '../core/Navbar';
import Banner from '../core/Banner';
const Index = (props) => {
	return (
		<>
			<Social />
			<Contact />
			<Navbar />
			{props.children}
		</>
	);
};

export default Index;
