import React from 'react';
import { OurProcessDocomentation } from '../../../constant/OurProcess';

const OurProcess = () => {
	return (
		<div>
			<h4 className="text-background-color mt-4">
				{OurProcessDocomentation.smallText}
			</h4>
			<h2 className="text-white text-5xl font-bold text-center mt-2">
				{OurProcessDocomentation.title1}
			</h2>
			<h2 className="text-white text-5xl font-bold text-center mt-2 md:text-left">
				{OurProcessDocomentation.title2}
			</h2>
			<h3 className="text-white text-xl text-center mt-2 w-[600px] mx-auto">
				{OurProcessDocomentation.subTitle}
			</h3>

			<div className="flex mt-2">
				{OurProcessDocomentation.process.map((card) => (
					<>
						<div className=" w-96 bg-base-100 mx-auto">
							<figure>
								<img
									src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
									alt="Shoes"
								/>
							</figure>
							<div className="card-body">
								<h2 className="card-title text-white mx-auto">
									{`${card.id}. ${card.title}`}
								</h2>
								<p className="text-white mx-auto">{card.description}</p>
							</div>
						</div>
					</>
				))}
			</div>
		</div>
	);
};

export default OurProcess;
