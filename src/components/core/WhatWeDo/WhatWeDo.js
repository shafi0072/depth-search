import React from 'react';
import { WhatWeDo, card1, card2, card3 } from '../../../constant/WhatWeDo';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import CodeIcon from '@mui/icons-material/Code';

const index = () => {
	return (
		<div className="container mt-32 bg-[1E1B24]">
			<h4 className="text-background-color">{WhatWeDo.smallText}</h4>
			<h2 className="text-white text-5xl font-bold text-center mt-2">
				{WhatWeDo.title1}
			</h2>
			<h2 className="text-white text-5xl font-bold text-center mt-2 md:text-left">
				{WhatWeDo.title2}
			</h2>
			<h3 className="text-white text-xl text-center mt-2">
				{WhatWeDo.subTitle}
			</h3>
			<div className="hero min-h-screen">
				<div className="hero-content flex-col lg:flex-row-reverse">
					<div className="flex ">
						<div className="mr-2">
							<img className="rounded-lg" src={WhatWeDo.img1} alt="" />
						</div>
						<div>
							<img className="rounded-lg" src={WhatWeDo.img2} alt="" />
							<img className="rounded-lg mt-2" src={WhatWeDo.img3} alt="" />
						</div>
					</div>
					<div className="w-[1000px]">
						<div className="card card-side bg-base-100 shadow-xl mt-2 bg-[#1E1B24]">
							<div className="p-2">
								<figure>
									<AcUnitIcon className="text-white" />
								</figure>
								<div className="card-body">
									<h2 className="card-title text-white">{card1.title}</h2>
									<p className="text-white">{card1.description}</p>
								</div>
							</div>
						</div>
						<div className="card card-side bg-base-100 shadow-xl mt-2 bg-[#1E1B24]">
							<div className="p-2">
								<figure>
									<CodeIcon className="text-white" />
								</figure>
								<div className="card-body">
									<h2 className="card-title text-white">{card2.title}</h2>
									<p className="text-white">{card2.description}</p>
								</div>
							</div>
						</div>

						<div className="card card-side bg-base-100 shadow-xl mt-2 bg-[#1E1B24]">
							<div className="p-2">
								<figure>
									<img
										src="/images/stock/photo-1635805737707-575885ab0820.jpg"
										alt="Movie"
									/>
								</figure>
								<div className="card-body">
									<h2 className="card-title text-white">{card3.title}</h2>
									<p className="text-white">{card3.description}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default index;
