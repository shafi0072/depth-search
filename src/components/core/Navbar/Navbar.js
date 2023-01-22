<<<<<<< HEAD
import Link from 'next/link';
import React from 'react';
import { Nav_data, nav_branding, nav_button } from '../../../constant/Navbar';

const Navbar = () => {
	return (
		<div className="container">
			<div className="navbar bg-#28292D">
				<div className="">
					<div className="dropdown">
						<label tabindex="0" className="btn btn-ghost lg:hidden">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
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
							className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
						>
							{Nav_data.map((items, index) => (
								<li key={index} tabindex="0">
									<a href={items?.link}>
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
									</a>
									<ul class="p-2 bg-#110706">
										{items.dropdown &&
											items.dropdown.map((items1, index) => (
												<li key={index}>
													<a href={items1?.link}>{items1?.title}</a>
												</li>
											))}
									</ul>
								</li>
							))}
						</ul>
					</div>
					<a className="btn btn-ghost normal-case lg:text-xl">{nav_branding}</a>
				</div>
				<div className=" hidden lg:flex">
					<ul className="menu menu-horizontal px-1">
						{Nav_data.map((items, index) => (
							<li key={index} tabindex="0">
								<a href={items?.link}>
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
								</a>
								<ul class="p-2 bg-#110706">
									{items.dropdown &&
										items.dropdown.map((items1, index) => (
											<li key={index}>
												<a href={items1?.link}>{items1?.title}</a>
											</li>
										))}
								</ul>
							</li>
						))}
					</ul>
				</div>
				<div className="">
					<Link href={nav_button.link} className="btn">
						{nav_button.title}
					</Link>
				</div>
=======
const Navbar = () => {
	return (
		<div>
			<div class="navbar bg-base-100">
				<div class="flex-1">
					<a class="btn btn-ghost normal-case text-xl">daisyUI</a>
				</div>
				<div class="flex-none">
					<ul class="menu menu-horizontal px-1">
						<li>
							<a>Item 1</a>
						</li>
						<li tabindex="0">
							<a>
								Parent
								<svg
									class="fill-current"
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									viewBox="0 0 24 24"
								>
									<path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
								</svg>
							</a>
							<ul class="p-2 bg-base-100">
								<li>
									<a>Submenu 1</a>
								</li>
								<li>
									<a>Submenu 2</a>
								</li>
							</ul>
						</li>
						<li>
							<a>Item 3</a>
						</li>
						<li>
							<a>Item 3</a>
						</li>
					</ul>
				</div>
>>>>>>> eefc4dd9bbf38c13b4d4488262449321d47146a7
			</div>
		</div>
	);
};

export default Navbar;
