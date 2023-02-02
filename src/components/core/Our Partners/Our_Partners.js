import React from 'react';
import { Our_Partner } from '../../../constant/Our_Partners';

const Our_Partners = () => {
	return (
		<section className="container">
			<h2 className="text-background-color">Our partners</h2>
			<h2 className="text-white text-5xl font-bold text-center mt-4">
				{Our_Partner.title1}
			</h2>
			<h2 className="text-white text-5xl font-bold text-center mt-2">
				{Our_Partner.title2}
			</h2>
			<h5 className="text-white text-xl text-center mt-2">
				{Our_Partner.subTitle1}
			</h5>
			<h5 className="text-white text-xl  text-center mt-2">
				{Our_Partner.subTitle2}
			</h5>
		</section>
	);
};

export default Our_Partners;
