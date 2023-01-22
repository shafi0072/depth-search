import Link from 'next/link';
import React from 'react'
import {Nav_data, nav_branding} from '../../../constant/Navbar'

const Navbar = () => {
	return (
		<div>
			<div class="navbar bg-#28292D">
				<div class="flex-1">
					<Link class="btn btn-ghost normal-case text-xl" href="/">{nav_branding}</Link>
				</div>
				<div class="flex-none">
					<ul class="menu menu-horizontal px-1">
						{
							Nav_data.map((items, index) => <li tabindex="0">
							<a href={items?.link}>
								{items.title}
								{items.dropdown && <svg
									class="fill-current"
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									viewBox="0 0 24 24"
								>
									<path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
								</svg>}
							</a>
							<ul class="p-2 bg-#110706">
								{
									items.dropdown &&	items.dropdown.map((items1, index) => <li>
									<a href={items1?.link}>{items1?.title}</a>
								</li> )
								}
								
							</ul>
						</li>)
						}
						
						
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
