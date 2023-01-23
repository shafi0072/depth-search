import React from 'react';
import { Banner_item } from '../../../constant/Banner';

const Banner = () => {
	return (
		<section className="container pt-1">
			<div className=" min-screen bg-[#23202A]">
				<div className="hero-content flex-col lg:flex-row-reverse">
					<img
						src="/img/banner_img.jpg"
						className="w-75 rounded-lg shadow-2xl ml-3"
					/>
					<div>
						<h6 className="text-white my-2 bg-[#000] w-[80px] text-center p-2 rounded-[20px]">
							{Banner_item.welcome}
						</h6>
						<h1 className="text-5xl font-bold text-white">
							{Banner_item.title}
						</h1>
						<p className="py-6 text-white text-lg">{Banner_item.description}</p>
						<div className="flex">
							<button className="btn bg-white text-black mr-2 rounded-full hover:text-[#000]">
								{Banner_item.button1}
							</button>
							<button className="btn bg-white text-black rounded-full">
								{Banner_item.button2}
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Banner;
