import Link from 'next/link';
import React from 'react';
import { Nav_data, nav_branding, nav_button } from '../../../constant/Navbar';

const Navbar = () => {
	return (
		<div className="container">
			<div className="navbar">
				<div className="navbar-font">
					<div className="dropdown">
						<label tabindex="0" className="btn btn-ghost lg:hidden">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5 text-white"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</label>
						<ul
							tabindex="0"
							className="menu menu-compact dropdown-content mt-3 p-2 shadow text-slate-500 rounded-box w-52"
						>
							{Nav_data.map((items, index) => (
								<li
									key={index}
									tabindex="0"
									className="text-slate-300 hover:text-white"
								>
									<Link href={items?.link}>
										{items.title}
										{items.dropdown && (
											<svg
												class="fill-current"
												xmlns="http://www.w3.org/2000/svg"
												width="20"
												height="20"
												viewBox="0 0 24 24"
											>
												<path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
											</svg>
										)}
									</Link>
									<ul class="p-2 bg-#110706">
										{items.dropdown &&
											items.dropdown.map((items1, index) => (
												<li key={index}>
													<Link href={items1?.link}>{items1?.title}</Link>
												</li>
											))}
									</ul>
								</li>
							))}
						</ul>
					</div>
					<a className="btn btn-ghost text-slate-300 hover:text-white normal-case lg:text-xl">
						{nav_branding}
					</a>
				</div>
				<div className=" hidden lg:flex">
					<ul className="menu menu-horizontal px-1">
						{Nav_data.map((items, index) => (
							<li
								key={index}
								tabindex="0"
								className="text-slate-300 hover:text-white"
							>
								<Link href={items?.link}>
									{items.title}
									{items.dropdown && (
										<svg
											class="fill-current"
											xmlns="http://www.w3.org/2000/svg"
											width="20"
											height="20"
											viewBox="0 0 24 24"
										>
											<path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
										</svg>
									)}
								</Link>
								<ul class="p-2 bg-#110706">
									{items.dropdown &&
										items.dropdown.map((items1, index) => (
											<li key={index}>
												<Link href={items1?.link}>{items1?.title}</Link>
											</li>
										))}
								</ul>
							</li>
						))}
					</ul>
				</div>
				<div>
					<button className="rounded-full btn btn-outline btn-white text-white mr-5">
						{nav_button.title}
					</button>
				</div>
			</div>
		</div>
	);
};
export default Navbar;
