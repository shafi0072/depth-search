import React from 'react';
import { Our_Partner } from '../../../constant/Our_Partners';

const Our_Partners = () => {
	return (
		<section className="container">
			<h2 className="text-white mt-5 text-base text-center mx-auto bg-[#000] w-[150px] p-2 rounded-[20px]">
				Our partners
			</h2>
			<h2 className="text-white text-5xl font-bold text-center mt-4">
				{Our_Partner.title1}
			</h2>
			<h2 className="text-white text-5xl font-bold text-center mt-2">
				{Our_Partner.title2}
			</h2>
		</section>
	);
};

export default Our_Partners;
